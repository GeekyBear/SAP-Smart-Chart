sap.ui.define(["sap/ui/core/util/MockServer"], function (MockServer) {
  "use strict";

  return {
    init: function () {
      // create
      var oMockServer = new MockServer({
        rootUri: "/here/goes/your/serviceUrl/",
      });

      // configure
      MockServer.config({
        autoRespond: true,
        autoRespondAfter: 1000,
      });

      // simulate
      var sPath = sap.ui.require.toUrl("smartchart/test/service");
      oMockServer.simulate(sPath + "/metadata.xml", sPath);
      console.log(oMockServer);
      // start
      oMockServer.start();
    },
  };
});
