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

function prependKitten(name){
  var newKitten = ["Arnold",...kittens]
  return newKitten;
}

function removeLastKitten(name){
  var newKitten = kittens.slice(0,newkitten.length - 1);
  return newKitten;
}

function removeFirstKitten(name){
  var NewKitten = kittens
  return 
}
