const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(Ralph) {cats.push(Ralph);}
function destructivelyPrependCat(Bob) {cats.unshift(Bob);}
function destructivelyRemoveLastCat(Garfield) {cats.pop();}
function destructivelyRemoveFirstCat(Milo) {cats.shift();}
function appendCat(Broom) {return cats.concat(Broom);}
function prependCat(Arnold) {return [Arnold].concat(cats);}
function removeLastCat() {return cats.slice(0, -1);}
function removeFirstCat() {return cats.slice(1);}











