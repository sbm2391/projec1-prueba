function Lava(canvas, posX, posY, color1, color2, width) {
    this.posX = posX;
    this.posY = posY;
    this.colorInside = color1;
    this.colorOutside = color2;
    this.ctx = canvas;
    this.width = width;
    this.drawLava();
}

Lava.prototype.drawLava = function (){
/*lava*/

for(var i = 0; i < this.width; i+=20) {
    this.ctx.fillStyle=this.colorOutside;
    this.ctx.fillRect(this.posX + i,this.posY+10,10,10); 
}

for(var i = 10; i < this.width; i+=20) {
    this.ctx.fillStyle=this.colorInside;
    this.ctx.fillRect(this.posX + i,this.posY+10,10,10) 
    }

for(var i = 10; i < this.width; i+=20) {
    this.ctx.fillStyle=this.colorOutside;
    this.ctx.fillRect(this.posX + i,this.posY,10,10); 
    }

for(var i = 6; i < this.width; i+=20) {
    this.ctx.fillStyle=this.colorOutside;
    this.ctx.fillRect(this.posX + i,this.posY+6,4,4); 
    }
for(var i = 20; i < this.width; i+=20) {
    this.ctx.fillStyle=this.colorOutside;
    this.ctx.fillRect(this.posX + i,this.posY+6,4,4); 
    }

}