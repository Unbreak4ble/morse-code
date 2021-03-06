
function encode() {
  try{
    let encodeText = document.getElementById("texter");
let decodeText = document.getElementById("resultText");

     $.ajax({
  url: '/encode',
  method: 'POST',
  data: {text: encodeText.value},
   success: function(data){
     decodeText.innerHTML = data.text;
     const table = document.getElementById("tableText");
       
       table.innerHTML = `<tr>
          <th>Character</th>
          <th>Code</th>
        </tr>`;
       
     for(let res of data.arr){
       table.innerHTML += "<tr class='linesTable'><td class='colum'>"+res.letter+"</td><td class='colum'>"+res.code+"</td></tr>"
     }
}
});
}catch(err){console.log(err)};
}


function decode() {
  try{
    let encodeText = document.getElementById("resultMorse");
let decodeText = document.getElementById("morseText");

     $.ajax({
  url: '/decode',
  method: 'POST',
  data: {text: decodeText.value},
   success: function(data){
     encodeText.innerHTML = data.text;
     const table = document.getElementById("tableMorse");
       
       table.innerHTML = `<tr>
          <th>Code</th>
          <th>Character</th>
        </tr>`;
       
     for(let res of data.arr){
       table.innerHTML += "<tr class='linesTable'><td class='colum'>"+res.letter+"</td><td class='colum'>"+res.code+"</td></tr>"
     }
}
});
}catch(err){console.log(err)};
}

function changeToMorse() {
  document.getElementById("morseDiv").style.display = "block";
  document.getElementById("textDiv").style.display = "none";
}

function changeToText() {
  document.getElementById("textDiv").style.display = "block";
  document.getElementById("morseDiv").style.display = "none";
}

function showModalText() {
  document.getElementById("gt").style.display = "block";
  document.getElementById("gm").style.display = "none";
}

function showModalMorse() {
  document.getElementById("gt").style.display = "none";
  document.getElementById("gm").style.display = "block";
}

function hidegt() {
  document.getElementById("gt").style.display = "none";
}

function hidegm() {
  document.getElementById("gm").style.display = "none";
}

function colorText() {
  try{
  const table = document.getElementById("tableText");
  let lines = table.getElementsByClassName("linesTable");
  
  for(let line of lines){
    line.style.color = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
  }
  
  }catch{}
}

function colorMorse() {
  try{
  const table = document.getElementById("tableMorse");
  let lines = table.getElementsByClassName("linesTable");
  
  for(let line of lines){
    line.style.color = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
  }
  
  }catch{}
}

function returnColorText() {
  try{
  const table = document.getElementById("tableText");
  let lines = table.getElementsByClassName("linesTable");
  
  for(let line of lines){
    line.style.color = "white";
  }
  
  }catch{}
}

function returnColorMorse() {
  try{
  const table = document.getElementById("tableMorse");
  let lines = table.getElementsByClassName("linesTable");
  
  for(let line of lines){
    line.style.color = "white";
  }
  
  }catch{}
}

function newAlert(text, isError){
  try{
  var element = document.createElement("div");
  
  element.classList.add(isError ? "alertError" : "alertSuccess");
  
  element.innerHTML = text;
  
  document.body.appendChild(element);
  }catch{};
}

function textCopy() {
  try{
  var copyTextarea = document.createElement("textarea");
  copyTextarea.value = document.getElementById("resultText").innerHTML;
 
  copyTextarea.style.position = "fixed";

  document.body.appendChild(copyTextarea);
  copyTextarea.focus();
  copyTextarea.select();
  
  
  try {
    var successful = document.execCommand('copy');
    var status = successful ? true : false;
    
    if(status)
      newAlert("Morse code copied", false);
     else
      newAlert("Unable to copy", true);
      
    
  }catch(err){alert(err)}
  
  document.body.removeChild(copyTextarea)
  }catch(err){alert(err)}
  
}

function morseCopy() {
  try{
  var copyTextarea = document.createElement("textarea");
  copyTextarea.value = document.getElementById("resultMorse").innerHTML;
  
  copyTextarea.style.position = "fixed";

  document.body.appendChild(copyTextarea);
  copyTextarea.focus();
  copyTextarea.select();
  
  
  try {
    var successful = document.execCommand('copy');
    var status = successful ? true : false;
    
    if(status)
      newAlert("Text copied", false);
    else
      newAlert("Unable to copy", true);
    
  }catch(err){alert(err)}
  
  document.body.removeChild(copyTextarea)
  }catch(err){alert(err)}
  
}
