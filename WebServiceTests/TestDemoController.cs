using ETLBoxLogViewer.Controllers;
using System;
using Xunit;

namespace WebServiceTests {
    public class TestDemoController {
        [Fact]
        public void TestDemoProcess() {
            var controller = new DemoProcessController();
            var result = controller.GetDemoProcessList();
        }
    }
}
