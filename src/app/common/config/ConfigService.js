import URL from 'url';
import configLoader from "./ConfigLoader";

class ConfigService {

    constructor(configLoaderExt) {
        this.config = {}
        if (configLoaderExt) {
            this.configLoader = configLoaderExt
        }
    }

    isServerDeploy(urlObject) {
        let hostname = urlObject.hostname
        if (hostname === 'localhost' || hostname === '127.0.0.1') {
            return false
        } else {
            return true
        }
    }

    loadLocalConfigFile() {
        return configLoader.loadConfigFile();
    }

    loadConfig(url) {
        let urlObject = URL.parse(url)
        if (this.isServerDeploy(urlObject)) {
            const urlPath = this.getHostName(urlObject)
            return {"URL": urlPath, "CAS_URL": urlPath, "MAIN_URL": urlPath}

        } else {
            let localConfig = this.loadLocalConfigFile()
            return localConfig;
        }
    }

    getHostName(urlObject) {
        let protocol = urlObject.protocol;
        let host = urlObject.host;
        return protocol + "//" + host + "/"
    }

}

module.exports = new ConfigService();
