using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ALE.ETLBox;
using Newtonsoft.Json;
using ALE.ETLBox.Logging;

namespace ETLBoxLogViewer.Controllers {
    [Route("api/[controller]")]
    public class DemoLogController : Controller {

        [HttpGet("[action]/{loadProcessKey}")]
        public JsonResult GetDemoLog(int loadProcessKey) {
            string jsonLP = GetLogAsJSONTask.GetJSON(loadProcessKey);
            JsonResult result = JsonHelper.ConvertStringToJson(jsonLP);
            return result;
        }
   
        [HttpGet("[action]/{loadProcessKey}")]
        public JsonResult GetStaticDemoLog(int loadProcessKey) {
            var result = JsonHelper.ConvertStringToJson(demoLog[0]);
            return result;

        }

        List<string> demoLog = new List<string>() {
@"
{
  ""children"": [
    {
      ""children"": [
        {
          ""children"": [
            {
              ""children"": [],
              ""logKey"": 3,
              ""logDate"": ""2018-11-21T11:08:06.063"",
              ""startDate"": ""2018-11-21T11:08:06.063"",
              ""endDate"": ""2018-11-21T11:08:06.077"",
              ""level"": ""Info"",
              ""message"": ""Sql #2"",
              ""taskType"": ""SQL"",
              ""taskAction"": ""START"",
              ""taskHash"": ""66266656587AAB44FF6635B57FAE844A72002438"",
              ""stage"": """",
              ""source"": ""ETL""
            },
            {
              ""children"": [],
              ""logKey"": 5,
              ""logDate"": ""2018-11-21T11:08:06.077"",
              ""startDate"": ""2018-11-21T11:08:06.077"",
              ""endDate"": ""2018-11-21T11:08:06.077"",
              ""level"": ""Info"",
              ""message"": ""Sql #3"",
              ""taskType"": ""SQL"",
              ""taskAction"": ""START"",
              ""taskHash"": ""7A4F4A8AC3770A88BFB8DAD5A6A675BB6CDA2513"",
              ""stage"": """",
              ""source"": ""ETL""
            },
            {
              ""children"": [],
              ""logKey"": 7,
              ""logDate"": ""2018-11-21T11:08:06.077"",
              ""startDate"": ""2018-11-21T11:08:06.077"",
              ""level"": ""Warn"",
              ""message"": ""Warn message #1"",
              ""taskType"": ""LOG"",
              ""taskAction"": ""LOG"",
              ""taskHash"": ""D30E496873F2C999528EECA69C178F0DFEB3A09A"",
              ""stage"": """",
              ""source"": ""ETL""
            }
          ],
          ""logKey"": 2,
          ""logDate"": ""2018-11-21T11:08:06.063"",
          ""startDate"": ""2018-11-21T11:08:06.063"",
          ""endDate"": ""2018-11-21T11:08:06.077"",
          ""level"": ""Info"",
          ""message"": ""Test sub sequence 1.1"",
          ""taskType"": ""SEQUENCE"",
          ""taskAction"": ""START"",
          ""taskHash"": ""E896084AAA9300415C80F0DA86FADB57F312970E"",
          ""stage"": """",
          ""source"": ""ETL""
        },
        {
          ""children"": [
            {
              ""children"": [],
              ""logKey"": 10,
              ""logDate"": ""2018-11-21T11:08:06.077"",
              ""startDate"": ""2018-11-21T11:08:06.077"",
              ""endDate"": ""2018-11-21T11:08:06.087"",
              ""level"": ""Info"",
              ""message"": ""Sql #4"",
              ""taskType"": ""SQL"",
              ""taskAction"": ""START"",
              ""taskHash"": ""3B1A36DA39171D6651FBA86630E1F09DF99232AC"",
              ""stage"": """",
              ""source"": ""ETL""
            }
          ],
          ""logKey"": 9,
          ""logDate"": ""2018-11-21T11:08:06.077"",
          ""startDate"": ""2018-11-21T11:08:06.077"",
          ""endDate"": ""2018-11-21T11:08:06.087"",
          ""level"": ""Info"",
          ""message"": ""Test sub sequence 1.2"",
          ""taskType"": ""SEQUENCE"",
          ""taskAction"": ""START"",
          ""taskHash"": ""FD54C3DFC89B7DB31EF1C236C0FB31A355629699"",
          ""stage"": """",
          ""source"": ""ETL""
        },
        {
          ""children"": [
            {
              ""children"": [
                {
                  ""children"": [
                    {
                      ""children"": [],
                      ""logKey"": 16,
                      ""logDate"": ""2018-11-21T11:08:06.087"",
                      ""startDate"": ""2018-11-21T11:08:06.087"",
                      ""endDate"": ""2018-11-21T11:08:06.087"",
                      ""level"": ""Info"",
                      ""message"": ""Sql #5"",
                      ""taskType"": ""SQL"",
                      ""taskAction"": ""START"",
                      ""taskHash"": ""5D6624E2EEADA103C20077928AEB5291996A246A"",
                      ""stage"": """",
                      ""source"": ""ETL""
                    },
                    {
                      ""children"": [],
                      ""logKey"": 18,
                      ""logDate"": ""2018-11-21T11:08:06.087"",
                      ""startDate"": ""2018-11-21T11:08:06.087"",
                      ""endDate"": ""2018-11-21T11:08:06.087"",
                      ""level"": ""Info"",
                      ""message"": ""Sql #6"",
                      ""taskType"": ""SQL"",
                      ""taskAction"": ""START"",
                      ""taskHash"": ""EE3A0C838E670CE6C6C1D807FB0D4AAD52D466AC"",
                      ""stage"": """",
                      ""source"": ""ETL""
                    },
                    {
                      ""children"": [],
                      ""logKey"": 20,
                      ""logDate"": ""2018-11-21T11:08:06.107"",
                      ""startDate"": ""2018-11-21T11:08:06.107"",
                      ""level"": ""Warn"",
                      ""message"": ""Warn message #2"",
                      ""taskType"": ""LOG"",
                      ""taskAction"": ""LOG"",
                      ""taskHash"": ""D30E496873F2C999528EECA69C178F0DFEB3A09A"",
                      ""stage"": """",
                      ""source"": ""ETL""
                    }
                  ],
                  ""logKey"": 15,
                  ""logDate"": ""2018-11-21T11:08:06.087"",
                  ""startDate"": ""2018-11-21T11:08:06.087"",
                  ""endDate"": ""2018-11-21T11:08:06.107"",
                  ""level"": ""Info"",
                  ""message"": ""Test sub sequence 3.1"",
                  ""taskType"": ""SEQUENCE"",
                  ""taskAction"": ""START"",
                  ""taskHash"": ""F698D52C5F15974CE505E6856D8D70861E88EF96"",
                  ""stage"": """",
                  ""source"": ""ETL""
                },
                {
                  ""children"": [],
                  ""logKey"": 22,
                  ""logDate"": ""2018-11-21T11:08:06.107"",
                  ""startDate"": ""2018-11-21T11:08:06.107"",
                  ""endDate"": ""2018-11-21T11:08:06.107"",
                  ""level"": ""Info"",
                  ""message"": ""Custom #1"",
                  ""taskType"": ""CUSTOM"",
                  ""taskAction"": ""START"",
                  ""taskHash"": ""EEC6069783453CB030EBBA448FF842465FB95853"",
                  ""stage"": """",
                  ""source"": ""ETL""
                },
                {
                  ""children"": [],
                  ""logKey"": 24,
                  ""logDate"": ""2018-11-21T11:08:06.107"",
                  ""startDate"": ""2018-11-21T11:08:06.107"",
                  ""endDate"": ""2018-11-21T11:08:06.107"",
                  ""level"": ""Info"",
                  ""message"": ""Sql #7"",
                  ""taskType"": ""SQL"",
                  ""taskAction"": ""START"",
                  ""taskHash"": ""8EFEC3909988469225B1AEDC00836038E2A99A29"",
                  ""stage"": """",
                  ""source"": ""ETL""
                }
              ],
              ""logKey"": 14,
              ""logDate"": ""2018-11-21T11:08:06.087"",
              ""startDate"": ""2018-11-21T11:08:06.087"",
              ""endDate"": ""2018-11-21T11:08:06.107"",
              ""level"": ""Info"",
              ""message"": ""Test sub sequence 2.1"",
              ""taskType"": ""SEQUENCE"",
              ""taskAction"": ""START"",
              ""taskHash"": ""4682FF31A9F19A18837275A7162BA99F19AACF08"",
              ""stage"": """",
              ""source"": ""ETL""
            },
            {
              ""children"": [
                {
                  ""children"": [],
                  ""logKey"": 28,
                  ""logDate"": ""2018-11-21T11:08:06.107"",
                  ""startDate"": ""2018-11-21T11:08:06.107"",
                  ""endDate"": ""2018-11-21T11:08:06.107"",
                  ""level"": ""Info"",
                  ""message"": ""Custom #2"",
                  ""taskType"": ""CUSTOM"",
                  ""taskAction"": ""START"",
                  ""taskHash"": ""0D49D6EA076B124159F075FBCD7EAA2C3C7A867B"",
                  ""stage"": """",
                  ""source"": ""ETL""
                },
                {
                  ""children"": [],
                  ""logKey"": 30,
                  ""logDate"": ""2018-11-21T11:08:06.12"",
                  ""startDate"": ""2018-11-21T11:08:06.12"",
                  ""endDate"": ""2018-11-21T11:08:06.12"",
                  ""level"": ""Info"",
                  ""message"": ""Sql #7"",
                  ""taskType"": ""SQL"",
                  ""taskAction"": ""START"",
                  ""taskHash"": ""8EFEC3909988469225B1AEDC00836038E2A99A29"",
                  ""stage"": """",
                  ""source"": ""ETL""
                }
              ],
              ""logKey"": 27,
              ""logDate"": ""2018-11-21T11:08:06.107"",
              ""startDate"": ""2018-11-21T11:08:06.107"",
              ""endDate"": ""2018-11-21T11:08:06.12"",
              ""level"": ""Info"",
              ""message"": ""Test sub sequence 2.2"",
              ""taskType"": ""SEQUENCE"",
              ""taskAction"": ""START"",
              ""taskHash"": ""EB7D895E363ED65F31D8458C787C694F8024AE3B"",
              ""stage"": """",
              ""source"": ""ETL""
            },
            {
              ""children"": [
                {
                  ""children"": [],
                  ""logKey"": 34,
                  ""logDate"": ""2018-11-21T11:08:06.12"",
                  ""startDate"": ""2018-11-21T11:08:06.12"",
                  ""endDate"": ""2018-11-21T11:08:06.12"",
                  ""level"": ""Info"",
                  ""message"": ""Sql #8"",
                  ""taskType"": ""SQL"",
                  ""taskAction"": ""START"",
                  ""taskHash"": ""41E1524444203A7942F09E4CCF7605109B4D8D2D"",
                  ""stage"": """",
                  ""source"": ""ETL""
                },
                {
                  ""children"": [],
                  ""logKey"": 36,
                  ""logDate"": ""2018-11-21T11:08:06.137"",
                  ""startDate"": ""2018-11-21T11:08:06.137"",
                  ""endDate"": ""2018-11-21T11:08:06.137"",
                  ""level"": ""Info"",
                  ""message"": ""Custom #2"",
                  ""taskType"": ""CUSTOM"",
                  ""taskAction"": ""START"",
                  ""taskHash"": ""0D49D6EA076B124159F075FBCD7EAA2C3C7A867B"",
                  ""stage"": """",
                  ""source"": ""ETL""
                },
                {
                  ""children"": [
                    {
                      ""children"": [],
                      ""logKey"": 39,
                      ""logDate"": ""2018-11-21T11:08:06.137"",
                      ""startDate"": ""2018-11-21T11:08:06.137"",
                      ""endDate"": ""2018-11-21T11:08:06.137"",
                      ""level"": ""Info"",
                      ""message"": ""Sql #9"",
                      ""taskType"": ""SQL"",
                      ""taskAction"": ""START"",
                      ""taskHash"": ""4BAE0BAA159AF3720D78FEA3CD16A22B9F6A0FC3"",
                      ""stage"": """",
                      ""source"": ""ETL""
                    },
                    {
                      ""children"": [],
                      ""logKey"": 41,
                      ""logDate"": ""2018-11-21T11:08:06.137"",
                      ""startDate"": ""2018-11-21T11:08:06.137"",
                      ""endDate"": ""2018-11-21T11:08:06.137"",
                      ""level"": ""Info"",
                      ""message"": ""Sql #10"",
                      ""taskType"": ""SQL"",
                      ""taskAction"": ""START"",
                      ""taskHash"": ""30DCA0BFE879B6ADCB108236E093B1178EE7FCF4"",
                      ""stage"": """",
                      ""source"": ""ETL""
                    },
                    {
                      ""children"": [],
                      ""logKey"": 43,
                      ""logDate"": ""2018-11-21T11:08:06.137"",
                      ""startDate"": ""2018-11-21T11:08:06.137"",
                      ""level"": ""Error"",
                      ""message"": ""Error message"",
                      ""taskType"": ""LOG"",
                      ""taskAction"": ""LOG"",
                      ""taskHash"": ""D30E496873F2C999528EECA69C178F0DFEB3A09A"",
                      ""stage"": """",
                      ""source"": ""ETL""
                    }
                  ],
                  ""logKey"": 38,
                  ""logDate"": ""2018-11-21T11:08:06.137"",
                  ""startDate"": ""2018-11-21T11:08:06.137"",
                  ""endDate"": ""2018-11-21T11:08:06.137"",
                  ""level"": ""Info"",
                  ""message"": ""Test sub sequence 3.3"",
                  ""taskType"": ""SEQUENCE"",
                  ""taskAction"": ""START"",
                  ""taskHash"": ""6C5B5A48FCA9F9A4D76506AE3C2B606BA440E403"",
                  ""stage"": """",
                  ""source"": ""ETL""
                }
              ],
              ""logKey"": 33,
              ""logDate"": ""2018-11-21T11:08:06.12"",
              ""startDate"": ""2018-11-21T11:08:06.12"",
              ""endDate"": ""2018-11-21T11:08:06.15"",
              ""level"": ""Info"",
              ""message"": ""Test sub sequence 2.3"",
              ""taskType"": ""SEQUENCE"",
              ""taskAction"": ""START"",
              ""taskHash"": ""6AD5B017E25CFAB357290884FA21CF8CA0DA4CCC"",
              ""stage"": """",
              ""source"": ""ETL""
            }
          ],
          ""logKey"": 13,
          ""logDate"": ""2018-11-21T11:08:06.087"",
          ""startDate"": ""2018-11-21T11:08:06.087"",
          ""endDate"": ""2018-11-21T11:08:06.15"",
          ""level"": ""Info"",
          ""message"": ""Test sub sequence 1.3"",
          ""taskType"": ""SEQUENCE"",
          ""taskAction"": ""START"",
          ""taskHash"": ""73DB7CEDB48A245087405F509F7D95AD35CC487D"",
          ""stage"": """",
          ""source"": ""ETL""
        },
        {
          ""children"": [],
          ""logKey"": 47,
          ""logDate"": ""2018-11-21T11:08:06.15"",
          ""startDate"": ""2018-11-21T11:08:06.15"",
          ""endDate"": ""2018-11-21T11:08:06.15"",
          ""level"": ""Info"",
          ""message"": ""Custom #3"",
          ""taskType"": ""CUSTOM"",
          ""taskAction"": ""START"",
          ""taskHash"": ""91864214C97E72A08F704A9BB16DC2B05C0C9F7B"",
          ""stage"": """",
          ""source"": ""ETL""
        }
      ],
      ""logKey"": 1,
      ""logDate"": ""2018-11-21T11:08:05.99"",
      ""startDate"": ""2018-11-21T11:08:05.99"",
      ""endDate"": ""2018-11-21T11:08:06.15"",
      ""level"": ""Info"",
      ""message"": ""Test sequence 1"",
      ""taskType"": ""SUBPACKAGE"",
      ""taskAction"": ""START"",
      ""taskHash"": ""296EC13ADCBD659B0C03581F7F6DF3106DBC3222"",
      ""stage"": """",
      ""source"": ""ETL""
    },
    {
      ""children"": [],
      ""logKey"": 50,
      ""logDate"": ""2018-11-21T11:08:06.15"",
      ""startDate"": ""2018-11-21T11:08:06.15"",
      ""endDate"": ""2018-11-21T11:08:06.15"",
      ""level"": ""Info"",
      ""message"": ""Sql #1"",
      ""taskType"": ""SQL"",
      ""taskAction"": ""START"",
      ""taskHash"": ""B6D0D44998FC279DFBBA41B84940AB30478FC8FA"",
      ""stage"": """",
      ""source"": ""ETL""
    },
    {
      ""children"": [],
      ""logKey"": 52,
      ""logDate"": ""2018-11-21T11:08:06.15"",
      ""startDate"": ""2018-11-21T11:08:06.15"",
      ""level"": ""Info"",
      ""message"": ""Info message"",
      ""taskType"": ""LOG"",
      ""taskAction"": ""LOG"",
      ""taskHash"": ""D30E496873F2C999528EECA69C178F0DFEB3A09A"",
      ""stage"": """",
      ""source"": ""ETL""
    }
  ],
  ""logKey"": 0,
  ""logDate"": ""0001-01-01T00:00:00"",
  ""startDate"": ""0001-01-01T00:00:00"",
  ""taskType"": ""ROOT""
}
" };


 
    }
}
