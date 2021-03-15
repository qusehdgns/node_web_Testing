var test = {
    "operation": "create",
    "tableName": "Testing",
    "payload": {
        "Item": {
            "id": "1",
            "name": "Byun"
        }
    }
};

$("#test").click(function(){
    $.ajax({
        type: "POST",
        url: "https://pfijdska44.execute-api.us-east-2.amazonaws.com/Testing_1/",
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(test),
        success: successCall,
        error: errorCall
    });
});

function successCall() {
    alert("success");
}

function errorCall() {
    alert("error");
}