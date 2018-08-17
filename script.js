var config = {
    apiKey: "AIzaSyBgqPbFr-ajNedjUCpp6lHEDormUXdeO14",
    authDomain: "demos-5e9fb.firebaseapp.com",
    databaseURL: "https://demos-5e9fb.firebaseio.com",
    projectId: "demos-5e9fb",
    storageBucket: "demos-5e9fb.appspot.com",
    messagingSenderId: "475764957678"
  };
  firebase.initializeApp(config);

var trainData = firebase.database();

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
    
    trainData.ref("/trainArr").push(train)

    $("#trainName").val("")
    $("#destination").val("")
    $("#firstTrain").val("")
    $("#frequency").val("")

    renderTrains()
})

console.log(trainData.ref("/trainArr"))

function renderTrains() {

    $("#trainTimes").empty()

    $("#trainTimes").append("<tr><th>Train Name</th><th>Destination</th><th>First Train</th><th>Frequency</th></tr>")

    for (var i = 0; i < trainData.length; i++) {
        $("#trainTimes").append("<tr>" +
                "<td>" + trainData[i].trainName + "</td>" + 
                "<td>" + trainData[i].destination + "</td>" + 
                "<td>" + trainData[i].firstTrain + "</td>" + 
                "<td>" + trainData[i].frequency + "</td>" + 
            "</tr>")
      }

}

renderTrains()