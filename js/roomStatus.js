(function () {

  window.onload = function() {
    // Need to assign event handlers here

    var ajax = new XMLHttpRequest();
    ajax.onload = fetchData;
    ajax.open('GET', 'https://webster.cs.washington.edu/students/josh4lee/winfo17/js/sendData.php', true);
    ajax.send();
  };

  function fetchData() {
    var allRoomData = JSON.parse(this.responseText);
    debugger;
    for (var row = 0; row < allRoomData.length; row++) {
      var roomData = allRoomData[row];
      if (roomData.Status == "Open") {
        // Dump into HTML
        console.log(roomData.Building + " " + roomData.Room + " " + roomData.TimeStart + " " + roomData.TimeEnd);
      }
    }
  }
})();
