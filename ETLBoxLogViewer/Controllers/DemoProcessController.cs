using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ALE.ETLBox;
using Newtonsoft.Json;

namespace ETLBoxLogViewer.Controllers {
    [Route("api/[controller]")]
    public class DemoProcessController : Controller {

        int RequestCounter { get; set; } = 0;
        [HttpGet("[action]")]
        public JsonResult GetDemoProcessList() {
            RunETLDemoProcess();
            string jsonLP = GetLoadProcessAsJSONTask.GetJSON();
            JsonResult result = JsonHelper.ConvertStringToJson(jsonLP);
            return result;

        }

        private static void RunETLDemoProcess() {
            ControlFlow.CurrentDbConnection = new SqlConnectionManager(new ConnectionString("Data Source=.;Integrated Security=SSPI;"));
            DropDatabaseTask.Delete("DemoDB");
            CreateDatabaseTask.Create("DemoDB");

            ControlFlow.CurrentDbConnection = new SqlConnectionManager(new ConnectionString("Data Source=.;Integrated Security=SSPI;Initial Catalog=DemoDB;"));

            //Logging (partly only works with existing configuration nlog config in App.config)
            CreateLogTablesTask.CreateLog();
            StartLoadProcessTask.Start("Process 1","Start Message 1", "ETL");
            ControlFlow.STAGE = "Staging";
            SqlTask.ExecuteNonQuery("some sql", "Select 1 as test");
            TransferCompletedForLoadProcessTask.Complete();
            ControlFlow.STAGE = "DataVault";

            Sequence.Execute("some custom code", () => { });
            LogTask.Warn("Some warning!");
            EndLoadProcessTask.End("Everything successful");
        }

      

        [HttpGet("[action]")]
        public JsonResult GetStaticDemoProcessList() {

            var result = JsonHelper.ConvertStringToJson(demoProcessList[0]);
            RequestCounter++;
            return result;

        }

        List<string> demoProcessList = new List<string>() {
@"[
  {
    ""loadProcessKey"": 1,
    ""startDate"": ""2018-11-16T14:12:27.613"",
    ""transferCompletedDate"": ""2018-11-16T14:12:27.623"",
    ""endDate"": ""2018-11-16T14:12:27.63"",
    ""processName"": ""Process 1"",
    ""startMessage"": ""Start Message 1"",
    ""isRunning"": false,
    ""endMessage"": ""Everything successful"",
    ""wasSuccessful"": true,
    ""wasAborted"": false,
    ""isFinished"": true,
    ""isTransferCompleted"": true
  }
]" };


 
    }
}
