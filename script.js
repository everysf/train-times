var config = {
    apiKey: "AIzaSyBgqPbFr-ajNedjUCpp6lHEDormUXdeO14",
    authDomain: "demos-5e9fb.firebaseapp.com",
    databaseURL: "https://demos-5e9fb.firebaseio.com",
    projectId: "demos-5e9fb",
    storageBucket: "demos-5e9fb.appspot.com",
    messagingSenderId: "475764957678"
  };
  firebase.initializeApp(config);

var database = firebase.database();
var trainArr = database.ref("/trainArr")

$("#submit").on("click", function(event) {

    event.preventDefault();
    trainName = $("#trainName").val().trim();
    destination = $("#destination").val().trim();
    firstTrain = $("#firstTrain").val().trim();
    frequency = $("#frequency").val().trim();

    var train = {
        trainName: trainName,
        destination: destination,
        firstTrain: firstTrain,
        frequency: frequency
    };
    
    database.ref("/trainArr").push(train)

    $("#trainName").val("")
    $("#destination").val("")
    $("#firstTrain").val("")
    $("#frequency").val("")

    renderTrains()
})

console.log(trainArr)

function renderTrains() {

    $("#trainTimes").empty()

    $("#trainTimes").append("<tr><th>Train Name</th><th>Destination</th><th>First Train</th><th>Frequency</th></tr>")

    for (var i = 0; i < database.length; i++) {
        $("#trainTimes").append("<tr>" +
                "<td>" + trainArr[i].trainName + "</td>" + 
                "<td>" + trainArr[i].destination + "</td>" + 
                "<td>" + trainArr[i].firstTrain + "</td>" + 
                "<td>" + trainArr[i].frequency + "</td>" + 
            "</tr>")
      }

}

trainArr.on("value", function(snap) {
    if (snap.val()) {
        renderTrains()
    }
})

renderTrains()