var btn = document.querySelector('#btn');
var pic = document.querySelector("#pic");

btn.addEventListener("click", function(){
//request
var XHR = new XMLHttpRequest();

XHR.onreadystatechange = function(){
    if(XHR.readyState == 4 && XHR.status == 200){
       var url = JSON.parse(XHR.responseText).message;
       pic.src = url;
    }
}

XHR.open("GET","https://dog.ceo/api/breeds/image/random");
XHR.send();
})

