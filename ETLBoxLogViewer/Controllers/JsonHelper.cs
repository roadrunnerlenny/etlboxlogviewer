using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace ETLBoxLogViewer.Controllers {
    public static class JsonHelper  {
        public static JsonResult ConvertStringToJson(string jsonLP) {
            var serializer = new JsonSerializerSettings {
                StringEscapeHandling = StringEscapeHandling.Default,
            };
            return new JsonResult(jsonLP, serializer) {
                ContentType = "text/json",
                StatusCode = 200
            };

        }
    }
}
