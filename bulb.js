function changeImage(){
    var image =
    document.getElementById('myImage');
    if(image.src.match("bulbon.gif")){
        image.src ="bulboff.gif";
    }else {
        image.src="bulbon.gif";
    }
}