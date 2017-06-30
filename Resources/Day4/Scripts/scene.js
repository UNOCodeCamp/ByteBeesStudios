var scene = new Scene();

function Scene()
{
  this.hazards = new Array();
  this.blocks = new Array(); //#new
  this.height = null;
  this.width = null;

  this.draw = function()
  {
    
   // this.blocks.forEach( (block) => block.draw() );    
    
  };

  this.setScene = function()
  {
      for (var i=0; i<this.width; i++)
      var x = 0;
      var y = viewport.height-32;
      var w = 32;
      var h = 32;
      var block = new Block(x,y,w,h);
      this.blocks.push(block);
  };
}