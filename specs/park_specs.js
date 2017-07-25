var assert = require('assert');
var Park = require('../park.js');
var Dinosaur = require('../dino.js');

describe('Park', function(){

var park;
var dino1 = new Dinosaur('Tyrannosaurus', 1);
var dino2 = new Dinosaur('Velociraptor', 3);
var dino3 = new Dinosaur('Stegosaurus', 4);
var dino4 = new Dinosaur('Dilophosaurus', 5);

beforeEach(function(){
  park = new Park();
})

it('should be able to add dinosaur', function(){
  park.addDino(dino1);
  assert.strictEqual(park.enclosure.length, 1);
})

it('should be able to remove all dinosaurs of a particular type', function(){
  park.addDino(dino2);
  park.addDino(dino2);
  park.addDino(dino1);
  park.addDino(dino4);
  park.addDino(dino3);
  park.addDino(dino2);
  console.log('before: ', park.enclosure);
  assert.strictEqual(park.enclosure.length,6);
  park.removeDino('Velociraptor');
  console.log('after: ', park.enclosure);
  assert.strictEqual(park.enclosure.length,3);
})

it('should get all the dinosaurs with an offspring count of more than two', function(){
  park.addDino(dino1);
  park.addDino(dino2);
  park.addDino(dino3);
  park.addDino(dino4);
  assert.strictEqual(park.getDinosOverTwoKids(), 3);
})

it('should calculate total dinos after one year, start one dino', function(){
  park.addDino(dino2);
  assert.strictEqual(park.getDinosAfterYear(1), 4);
})

it('should calculate total dinos after two years, start one dino', function(){
  park.addDino(dino2);
  assert.strictEqual(park.getDinosAfterYear(2), 7);
})

it('should calculate total dinos after two years, start two dinos', function(){
  park.addDino(dino2);
  park.addDino(dino3);
  assert.strictEqual(park.getDinosAfterYear(2), 16);
})

})
