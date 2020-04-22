class Soap{
  
 constructor()
  
  {
   this.r=100;
    this.x=700;
    this.y=height-400;
  }  
  move(){  
   this.x  -= scroll;
  }    
   
  show()
  {
   image(soapImg, this.x,this.y, this.r,this.r);
      // rect(this.x,this.y, this.r,this.r);
  }
}