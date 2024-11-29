document.write("<strong>Typeof/Coecion</strong><br>" + typeof("3" + 3)); //Type coercion by concaternation with string and using typeof operator.
document.write(`<br><strong>Infinity</strong><br>${2E310}<br>${-2E310}`); //Template string to display infinity and -infinty respectively.
document.write(`<br><strong>Boolean</strong><br>${1<2}<br>${1>2}`); //Displays boolean values true and false.
console.log(5 * 3); //Maths operation output to console.
console.log(1>2); //Display false in console.
document.write(`<br><strong>Double Equal sign</strong><br>${10 == "10"}<br>${10 == 1}`) //Displays true/false values using double equal signs.
document.write(`<br><strong>Triple Equal sign</strong><br>${10 === 10}<br>${10 === "9"}<br>${10 === "10"}<br>${10 === 1}`)//Displays true/false values using triple equal signs.
document.write(`<br><strong>AND</strong><br>${10 > 1 && 1 < 10}<br>${10 > 1 && 1 > 10}`)//AND operator to display ture and false.
document.write(`<br><strong>OR</strong><br>${10 > 1 || 1 < 10}<br>${10 > 11 || 1 > 10}`)//OR operator to display ture and false.
document.write(`<br><strong>NOT</strong><br>${!(10 < 1)}<br>${!(10 > 1)}`)//NOT operator to display ture and false.