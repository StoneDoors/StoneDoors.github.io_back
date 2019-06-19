var x=0;
var y=0;
function bb(){
    isPen=true;
    aa();
    x=parseInt(Math.random()*window.innerWidth);
    y=parseInt(Math.random()*window.innerHeight);
}
window.setInterval(bb,4);
window.setInterval(bb,4);
window.setInterval(bb,4);
window.setInterval(bb,4);
window.setInterval(bb,4);
function aa(){
    if(isPen){
        var c=document.getElementById("can");
        var pen=c.getContext("2d");
        var x1=x;
        var y1=y;
        pen.lineTo(x1,y1);
        pen.moveTo(x,y);
        pen.stroke();
        x=x1;
        y=y1;
    }
}