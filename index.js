var musicians = [ "John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr" ];
var instruments = [ "Guitar", "Bass Guitar", "Lead Guitar", "Drums" ];

function theBeatlesPlay(musicians, instruments) {
  var arrayNew = [ ];
  for (var i = 0; i < musicians.length;
        i++) {

          arrayNew.push(`${musicians[i]} plays ${instruments[i]}`)

        }
  return arrayNew;
}


const facts = ["foo","bar"]

function johnLennonFacts(facts) {

  var i = 0;
  var arr = [];

  while (i < facts.length) {
    arr.push(`${facts[i]}!!!`);
    i += 1;
  }

  return arr;

}

function iLoveTheBeatles(i) {

  var i = 0;
  var arr = [];

  do {

  arr.push('I love the Beatles!');
} while (i < 15; i++);

return arr;

}
