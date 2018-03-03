//import Project_Config from "./project_config.json";

var url = {};

(function () {
        let path = require("path");
        let baseUrl = {"BASE_URL": "http://localhost:8080/"};
        /*
        if (location.hostname.indexOf("localhost") > -1 || location.hostname.indexOf("127.0.0.1") > -1) {
            baseUrl = JSONUtil.getJSON(Project_Config);
        } else {
            let config = ConfigService.loadConfig(window.location.href);
            // baseUrl.LOGIN_URL=config.URL+"cas-server";
            // baseUrl.LOGIN_callbackUrl=config.URL+"bcp";
            baseUrl.BASE_URL = config.URL;
            console.log("configs/service.json:" + JSON.stringify(baseUrl));
        }
*/
        url.Register = baseUrl.BASE_URL + "user/register";
        url.Login = baseUrl.BASE_URL + "user/login";

    }
)();
module.exports = url;