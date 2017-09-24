/*
var myHTML = document.querySelector('html');
myHTML.onclick = function() {
    alert('OHH!');
};
*/

/*
document.querySelector('html').onclick=function(){
    alert('CLICKED!');
}
*/

var myImage = document.querySelector('img'); 


myImage.onclick = function() {
    
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'https://www.flaginstitute.org/wp/wp-content/uploads/flags/UNKG0001.png'){
        myImage.setAttribute('img', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Civil_and_Naval_Ensign_of_France.svg/300px-Civil_and_Naval_Ensign_of_France.svg.png');
        console.log('image changed');
    } else {
        alert('ree!');
        myImage.setAttribute('img','ZombieMurka.png');
        console.log('image changed back');
    }
    
}