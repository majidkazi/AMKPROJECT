let SL_XML = require('slappforge-sdk-xml');
const xmlParser = new SL_XML.XMLParser();

let Swagger = require('swagger-client');

exports.handler = function (event, context, callback) {

    Swagger.http({
        url: 'https://services.uat.fintechmart.online/api-sandbox/application/token',
        method: 'post',
        query: {},
        headers: { "Accept": "*/*", "Content-Type": "application/json" },
        body: JSON.stringify({
            "userName": "Your email address",
            "password": "Your password"
        })
    }).then((response) => {
        var access_token = "bearer " + response.body.access_token;
        // Insert new API calls here to call with APIX Access Token


        callback(null, access_token);
    }).catch((err) => {
        console.log(err);
        callback("Execution failed");
    });

}