//names and inputs
var hacker1 = "John";
console.log(`The driver's name is ${hacker1}`);

var hacker2 = prompt("What is your name?");
console.log(`The navigator's name is ${hacker2}`);

//conditionals
if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both got equally long names, ${hacker1.length} characters!!`);
} else if (hacker1.length > hacker2.length) {
    console.log(`The Driver has the longest name, it has ${hacker1.length} characters`);
} else {
    console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`);
}

//loops
/*
var name = hacker1.toUpperCase();
console.log(name.split('').join(' '));
*/

var upperName = hacker1.toUpperCase();
var spacedName = "";

for (var j = 0; j < upperName.length; j++) {
    spacedName = spacedName + " " + upperName[j];
}
console.log(spacedName);

var reversedName = "";
for (var i = 0; i < hacker1.length; i++) {
    reversedName = hacker1[i] + reversedName;
}
console.log(reversedName);


var name1 = hacker1.toLowerCase();
var name2 = hacker2.toLowerCase();
if (name1 < name2) {
    console.log("The driver's name goes first");
} else if (name1 > name2) {
    console.log("Yo, the navigator goes first definitely");
} else {
    console.log("What?! You both got the same name?");

}

// for (var k = 0; k < name1.length; k++) {
//     for (var l = 0; l < name2.length; l++) {
//         if (name1 === name2) {
//             console.log("What?! You both got the same name?");
//         } else if (name1[k] < name2[l]) {
//             console.log("The driver's name goes first");
//             break;
//         } else if (name1[k] > name2[l]) {
//             console.log("Yo, the navigator goes first definitely");
//             break;
//         }
//     }
// }



// bonus
function palindrome(newString) {
    var re = /[^A-Za-z0-9]/g;
    newString = newString.toLowerCase().replace(re, '');
    var len = newString.length;
    for (var i = 0; i < len / 2; i++) {
        if (newString[i] !== newString[len - 1 - i]) {
            console.log("The text is not a Palindrome.");
        } else {
            console.log("The text is a Palindrome.");
            break;
        }
    }
}


// function palindrome(newString) {
//     var re = /[^A-Za-z0-9]/g;
//     newString = newString.toLowerCase().replace(re, '');
//     var reversedName = "";
//     for (var i = 0; i < newString.length; i++) {
//         reversedName = newString[i] + reversedName;

//     }
//     if (reversedName === newString) {
//         console.log("The text is a Palindrome."");
//     } else {
//         console.log("The text is not a Palindrome.");
//     }
// }


var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse commodo urna nec volutpat vulputate. Pellentesque id placerat dolor. Mauris ac risus nunc. Vivamus vel gravida sem. Duis vehicula, dui in mattis porttitor, libero dolor cursus tellus, sed condimentum magna ex nec ipsum. Sed tristique, urna a ultricies facilisis, elit sem cursus ipsum, iaculis sollicitudin felis quam eu urna. Quisque vel ex augue. Sed tellus magna, dignissim at risus nec, placerat tempus mi. Sed sagittis magna a tellus tempor, sit amet ornare erat aliquam. Aliquam euismod enim vel rhoncus bibendum. Maecenas tristique sapien leo, at efficitur velit cursus id.Sed posuere et massa nec porttitor.Vestibulum iaculis mauris eu felis hendrerit, eu vulputate libero ultricies.Nulla pharetra odio velit, ut euismod purus mollis eget.Curabitur vulputate justo felis, in tempus augue tincidunt vel.Ut porta turpis nec tempus porttitor.Nullam id dapibus lorem.Vestibulum lobortis tristique ipsum vitae cursus.Sed in est nisi. Fusce aliquet ante eget lectus lacinia congue.Mauris eleifend quam elit, et suscipit urna interdum eu.Vestibulum ac maximus purus.Quisque consequat magna nec aliquam lobortis.Donec nec tellus dui.Etiam non dignissim enim, in bibendum urna.Sed dapibus, nibh eget pellentesque tristique, enim elit semper metus, at interdum nunc sem id nisl.Curabitur porttitor, quam vitae tincidunt vulputate, leo diam imperdiet sem, sagittis pulvinar metus libero sed nibh.";
var totalWord = 0;
for (var i = 0; i < text.length; i++) {
    if (text[i] === " ") {
        totalWord += 1;
    }
}
console.log(`The text has ${totalWord} words.`);

var totalTimes = 0;
for (var n = 0; n < text.length; n++) {
    if (text[n] === " " && text[n + 1] === "e" && text[n + 2] === "t" && text[n + 3] === " ") {
        totalTimes += 1;
    }
}
console.log(totalTimes);