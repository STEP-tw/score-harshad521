const Snake=function(head,body) {
  this.head=head;
  this.body=body;
  this.foodSwallowed = 0;
}

Snake.prototype={
  getBody:function() {
    return this.body;
  },
  getHead:function() {
    return this.head;
  },
  move:function() {
    this.body.push(this.head);
    this.head=this.head.next();
    return this.body.shift();
  },
  grow:function(growthFactor) {
    for (var i = 0; i < growthFactor; i++) {
      this.body.unshift(new Position(Infinity,Infinity,this.direction));
    }
  },
  turnLeft:function() {
    this.head=this.head.turnLeft();
  },
  turnRight:function() {
    this.head=this.head.turnRight();
  },
  getSnakeLength:function() {
    return this.foodSwallowed;
  },
  updateFoodSwallowedCount : function() {
    this.foodSwallowed++;
  }
}
