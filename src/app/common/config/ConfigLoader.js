class ConfigLoader {

    loadConfigFile() {
        var response = $.ajax({
            url: "/configs/service.json",
            async: false
        }).responseText;
        return JSON.parse(response)
    }

}

module.exports = ConfigLoader;
