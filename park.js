var Park = function(){
  this.enclosure = [];
};

Park.prototype = {
  addDino: function(dino){
    this.enclosure.push(dino);
  },
  removeDino: function(dinoToRemove){
    for (dino of this.enclosure){
      if (dino.type === dinoToRemove){
        var indexFind = this.enclosure.indexOf(dino);
        console.log('index: ', indexFind);
        this.enclosure.splice(indexFind, 2);
        // need to specify the amount of entries expected to remove??!!!
      }
    } 
  }, 
  getDinosOverTwoKids: function(){
    var count = [];
    for (dino of this.enclosure){
      if (dino.offspring > 2){
        count.push(dino);
      }
    }
    return count.length;
  },
  getDinosAfterYear: function(year){
    count = this.enclosure.length;
    for (var i = 0; i < year; i++){
      // provides the amount of loops, limited by by the inputted year
      for (dino of this.enclosure){
         count += dino.offspring;
      }
    }
    return count;
  }

}

module.exports = Park;