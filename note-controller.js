function changeText() {
    var elem = document.getElementById("app");
        elem.innerHTML = "Howdy";
  }

  changeText()


// Alternative way of doing the above:
//   function changeGreeting(text) {
//     var tag = (document.getElementById("app").innerHTML = text);
//   }
  
//   changeGreeting("Howdy");