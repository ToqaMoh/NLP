var validUrl = require('valid-url');
const regeneratorRuntime = require("regenerator-runtime");

async function formValidation(format, input) {

    const data = { 
        format, 
        input
    };

    try {

        if(format == "url"){
            if (!validUrl.isUri(input)){
                alert('That is not a valid URL'); 
            }
            else {
                Client.apiData("http://localhost:8081/submit", data).then((res) => { 
                    document.getElementById("agreement").innerHTML = "Agreement: " + res.agreement;
                    document.getElementById("subjectivity").innerHTML = "Subjectivity: " + res.subjectivity;
                    document.getElementById("confidence").innerHTML = "Confidence: " + res.confidence;
                    document.getElementById("irony").innerHTML = "Irony: " + res.irony;
                    document.getElementById("score_tag").innerHTML = "Score Tag: " + res.score_tag;
                    document.getElementById("statusCode").innerHTML = "Status Code: " + res.status.code;
                    document.getElementById("statusmsg").innerHTML = "Status Message: " + res.status.msg;
                });
            }
        }
        else if(format == "txt"){
            if (validUrl.isUri(input)){
                alert('That is not a valid Text'); 
            }
            else {
                Client.apiData("http://localhost:8081/submit", data).then((res) => { 
                    document.getElementById("agreement").innerHTML = "Agreement: " + res.agreement;
                    document.getElementById("subjectivity").innerHTML = "Subjectivity: " + res.subjectivity;
                    document.getElementById("confidence").innerHTML = "Confidence: " + res.confidence;
                    document.getElementById("irony").innerHTML = "Irony: " + res.irony;
                    document.getElementById("score_tag").innerHTML = "Score Tag: " + res.score_tag;
                    document.getElementById("statusCode").innerHTML = "Status Code: " + res.status.code;
                    document.getElementById("statusmsg").innerHTML = "Status Message: " + res.status.msg;
                });
            }
        }
    }
    catch (error) {
        return { error: error };
    }


};

export default formValidation