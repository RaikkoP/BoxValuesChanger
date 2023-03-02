
setInterval(function(){
    const border = ['10px','20px','30px','40px','50px','60px','70px','80px','90px','100px']
    const colors = ['AliceBlue','AntiqueWhite','Aqua','Aquamarine','Azure','Beige','Bisque','IndianRed','LightCoral','Salmon','DarkSalmon'];
    let color = colors[Math.floor(Math.random() * colors.length+1)];
    let radius = border[Math.floor(Math.random() * border.length+1)];
    console.log(radius);
    document.getElementById("box").style.setProperty('background-color', color );
    document.getElementById("box").style.borderRadius = radius;

}, 500);