var index = 0;

function changeColor() {
    var color = ["aqua","brown", "pink", "green", "yellow", "blueviolet", "purple"];
    document.getElementsByTagName("body")[0].style.background = color[index++];
    if(index > color.length - 1) {
        index = 0;
    }
   
  }
  
