function turn_on(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
// Typical action to be performed when the document is ready:
      document.getElementById("demo").innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("GET",
    "https://api.anto.io/channel/set/6BicdKZoiUa3K2KzI7pFTarZhHjuLFLeldjGW6Ud/smarthome/LED1/1", true);
  xhttp.send();
}



function turn_off(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
// Typical action to be performed when the document is ready:
      document.getElementById("demo").innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("GET",
    "https://api.anto.io/channel/set/6BicdKZoiUa3K2KzI7pFTarZhHjuLFLeldjGW6Ud/smarthome/LED1/0", true);
  xhttp.send();
}
