class Virus{
  
 constructor()
  
  {
   this.r=80;
    this.x=width;
    this.y=height - this.r;
  }
  move(){  
   this.x  -= scroll;
  }    
  
  show()
  {
   image(vImg, this.x,this.y, this.r,this.r);
      // rect(this.x,this.y, this.r,this.r);
  }
}
  
  