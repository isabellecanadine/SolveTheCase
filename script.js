document.addEventListener('DOMContentLoaded', function() {
  var button = document.querySelector('#begin')
  var input = document.querySelector('#name-input')
  var content = document.querySelector('#content')
  button.addEventListener('click', function() {
    content.innerHTML = `

 <head>
<title>Solve The Case!</title>
   <link rel="stylesheet" href="style.css">
   <script src = "./script.js"></script> 
</head>

    <p class= "p1"><font size="+3"> Welcome, Detective ${input.value} </font></p>

    <div class="tooltip">
    <button onClick="myFunction()" class = "new-case">
    <img src="alert.png" alt="buttonpng" border="0" />
    </button>
    <span class="tooltiptext">YOU HAVE A NEW CASE! CLICK THE ALERT TO LEARN MORE!</span>
    </div>
    <br>
    <br>
    <a target="_blank" href="https://www.wvsp.gov/Pages/default.aspx"><img src="police.png" alt="West Virginia Police." class= "police" /></a>
    <br>
    <br>
    <center><p class= "p2"><font size = "+5"> WEST VIRGINIA POLICE DEPARTMENT</font></p></center>

    `

  `<button type="button" class="collapsible">Open Collapsible</button>

<div class="content2">
  
  <script>
    function load_text() {
      document.getElementById("output").value = "text....";
    }

    function bold_click() {
      document.getElementById("output").style.fontWeight = "bold";
    }

    function underline_click() {
      document.getElementById("output").style.textDecoration = "underline";
    }

    function italic_click() {
      document.getElementById("output").style.fontStyle = "italic";
    }

  </script>


<body onload="load_text()">

<br/>

<input id="button1" type="button" value="B" name="button1" style="font-weight: bold; width: 26px; height: 24px" size="28" onclick="bold_click()">

    <input type="button" value="i" style="width: 25px; font-style: italic; height: 24px" size="30" onclick="italic_click()">

    <input id="button1" style="width: 26px; height: 24px; text-decoration: underline" type="button" size="8" value="u" name="button1" onclick="underline_click()">

    <input id="button1" style="width: 26px; height: 24px;" type="button" size="8" value="n" name="button1" onclick="normal_click()">

<br/>
<br/>

     <textarea style="width: 399px; height: 182px" id="output" name="output" rows="9" wrap="virtual" cols=48></textarea><br>

     <p><input type="reset" value="clear"></p>
  

</body>
</div>
`

})

})

function myFunction() {
  window.location.href = "CasePage.html";
}


var coll = document.getElementsByClassName("collapsible");
    var i;
    
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }