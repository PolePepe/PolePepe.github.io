var myButton = document.querySelector('button');
var myHeader = document.querySelector('h1');


function setUserName(){
    var myName = prompt('Please enter yout name.');
    localStorage.setItem('username', myName);
    myHeader.textContent = "Name: " + myName;
}

if (!localStorage.getItem('username')){
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeader.textContent = "Name: " +  storedName;
}

myButton.onclick = function(){
    setUserName();
}