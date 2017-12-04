var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name){
 kittens.push(name);
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name){
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
}

function appendKitten(name){
  var newKitten = [...kittens,"Broom"]
  return newKitten;
}