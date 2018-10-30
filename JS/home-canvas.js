window.onload = function(){
    
    var matchHeight = document.getElementById("welcome-info").clientHeight;
    
    console.log("Height: " + matchHeight);
    
    var joshua;
    var styles;
    
    var config = {

        type: Phaser.CANVAS,
        width: 500,
        height: matchHeight,
        parent: "homeCanvas",
        backgroundColor: '#1a1a1f',
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 200 }
            }

        },
        scene: {
            create: create,
            update: update
        }
    }
    
    var c;
    var x;

    var time = 0;
    var frame = 0;

    var S = Math.sin;
    var C = Math.cos;
    var T = Math.tan;

    
    function R (r,g,b,a)
    {
        a = a === undefined ? 1 : a;

        return "rgba("+(r|255)+","+(g|255)+","+(b|200)+","+a+")";
    };
    

    var scene = new Phaser.Game(config);
    
    function u (t)
    {
        c.width=1920;
        
        for(i=0;i<41;i++){
            for(j=25;j>-25;j--){
               
                x.fillRect(650+j*i*.5*C(i*.2)+C(2*t+i*.2)*250,540+j*i*0.6*S(i*.2)+S(3.2*t+i*.2)*250,2,);
            }
        }
    }

    function create (){

        var canvasTexture = this.textures.createCanvas('dwitter', 1920, 1080);

        c = canvasTexture.getSourceImage();
        x = c.getContext('2d');
        
        

        this.add.image(0, 0, 'dwitter').setOrigin(0).setScale(0.2);
    }
    
    function update ()
    {
        time = frame / 60;

        if (time * 60 | 0 == frame - 1)
        {
            time += 0.000001;
        }

        frame++;

        u(time);
    }
}