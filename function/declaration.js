// function showMessage()
// {
// 	alert('Hello everyone!');
// }

// showMessage();
// showMessage();

// function showMessage()
// {
// 	let mesage = "Hello, I'm JavaScript!";
// 	alert(mesage);
// }
// showMessage();
// alert(mesage); //<-- Error! The variable is local to the function

// function checkAge(age){
// 	if (age >= 18){
// 		return true;
// 	} else {
// 		return confirm('Do you have permission from your parents?');
// 	}
// }

// let age = prompt('How old are you?');

// if (checkAge(age)){
// 	alert ('Access granted');
// } else {
// 	alert('Acces denied');
// }
//  function min(a,b){
// 	return (a < b) ? a : b;
// }
// alert (min(2, 5) == 2);
// alert(min(3, -1) == -1)
// alert(min(1, 1) == 1)

function pow(x,n) {
	return x ** n;
}

let a = +prompt('enter x', '');
let b = +prompt('enter n', '');

if (b < 1){
	alert(`Power ${b} is not supported, use a possitive integer`);
} else alert(pow(a, b));