var canvas = new fabric.Canvas("myCanvas")
var blockW = 30, blockH = 30, playerX = 500, playerY = 300;
var player, block;

function updatePlayer(){
    fabric.Image.fromURL("player.png",function(img){
        player = img;
        player.scaleToWidth(90);
        player.scaleToHeight(140);
        player.set({top: playerY, left: playerX});
        canvas.add(player)
    });
}
updatePlayer();

function updateBlock(block_img){
    fabric.Image.fromURL(block_img,function(img){
        block = img;
        block.scaleToWidth(blockW);
        block.scaleToHeight(blockH);
        block.set({top: playerY, left: playerX});
        canvas.add(block)
    });
}

window.addEventListener("keydown",function(event){
    if(event.keyCode == 37){
        moveLeft();
    }
    if(event.keyCode == 38){
        moveUp();
    }
    if(event.keyCode == 39){
        moveRight();
    }
    if(event.keyCode == 40){
        moveDown();
    }
    if(event.keyCode == 87){
        updateBlock("wall.jpg");
    }
    if(event.keyCode == 85){
        updateBlock("unique.png");
    }
    if(event.keyCode == 82){
        updateBlock("roof.jpg");
    }
    if(event.keyCode == 84){
        updateBlock("trunk.jpg");
    }
    if(event.keyCode == 67){
        updateBlock("cloud.jpg");
    }
    if(event.keyCode == 89){
        updateBlock("yellow_wall.png");
    }
    if(event.keyCode == 68){
        updateBlock("dark_green.png");
    }
    if(event.keyCode == 68){
        updateBlock("light_green.png");
    }
    if(event.keyCode == 71){
        updateBlock("ground.png");
    }
    

});

function updateWidth(){
    blockW+=10
    document.getElementById("width").textContent = blockW;
}
function updateHeight(){
    blockH+=10
    document.getElementById("width").textContent = blockH;
}

function moveUp(){
    if(playerY>0){
        playerY=playerY-10;
        canvas.remove(player);
        updatePlayer();
    }
    
}
function moveDown(){
    if(playerY<600-140){
        playerY=playerY+10;
        canvas.remove(player);
        updatePlayer();
    }
}
function moveRight(){
    if(playerX<1000-90){
        playerX=playerX+10;
        canvas.remove(player);
        updatePlayer();
    }
}
function moveLeft(){
    if(playerX>0){
        playerX=playerX-10;
        canvas.remove(player);
        updatePlayer();
    } 
}

