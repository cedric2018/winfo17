(function () {

  window.onload = function() {
    // Need to assign event handlers here, if any

    var ajax = new XMLHttpRequest();
    ajax.onload = fetchData;
    // Currently hosted on Josh's webster server.
    ajax.open('GET', 'https://webster.cs.washington.edu/students/josh4lee/winfo17/js/sendData.php', true);
    ajax.send();
  };

  function fetchData() {
    var allRoomData = JSON.parse(this.responseText);
    // Need to grab start and stop times here
    for (var row = 0; row < allRoomData.length; row++) {
      var roomData = allRoomData[row];
      if (roomData.Status == "Open") {
        // Dump into HTML

        // Temp debugging code
        console.log(roomData.Building + " " + roomData.Room + " " + roomData.TimeStart + " " + roomData.TimeEnd);
      }
    }
  }
})();
