// // Задача №
// let varNumber = +prompt();
// if (varNumber > 0) {
// 	alert("Положительное");
// } else if (varNumber < 0) {
// 	alert("Отрицательное");
// } else if (varNumber == 0) {
// 	alert("0");
// }


// // Задача № 2
// let money_1 = +prompt();
// let money_2 = +prompt();
// if ((money_1 + money_2) >= 100) {
// 	alert("Можно лететь!");
// } else {
// 	alert("Слишком мало денег!");
// }


// // Задача № 3
// let age = 26;
// if (age >= 20 && age < 27) {
// 	alert("Выслать повестку");
// } else {
// 	alert("Пока свободен !");
// }


// // Задача № 4
// let busNumber = +prompt();
// if (busNumber == 255 || busNumber == 225 || busNumber == 7) {
// 	alert("Можно ехать автобус № " +busNumber);
// } else {
// 	alert("Ожидай не твой автобус");
// }


// // Задача № 5
// let day =  prompt();
// let convertDay = day.charAt(0).toUpperCase() + day.slice(1, day.length);
// console.log(convertDay);
// switch (convertDay) {
// 	case "Понедельник":
// 	case "Вторник":
// 	case "Среда":
// 	case "Четверг":
// 	case "Пятница":
// 		alert("Надо идти на работу");
// 		break;
// 	default:
// 		alert("Выходной");
// 		break;
// }


// // Задача № 6
// let x = +prompt();
// let y = +prompt();
// if (x <= 1 && (y >= 3) || (y < 0)) {
// 	alert(x + y);
// } else {
// 	alert("Неверно!");
// }


// // Задача № 7
// let x = +prompt();
// let y = +prompt();
// let summ;
// if ((x > 2 && x < 11) || (y >= 6 && y < 14)) {
// 	x = x * 2;
// 	alert(x);
// } else {
// 	x = x + 5;
// 	alert(x);
// }


// // Задача № 8
// let firstName = prompt();
// console.log(firstName);
// if (firstName !== null && firstName !== "" ) {
// 	alert("Привет " +firstName);
// }


// // Задача № 9
// let greeting = "";
// let lang = prompt();
// switch (lang) {
// 	case "ru":
// 		greeting = "Привет";
// 		break;
// 	case "en":
// 		greeting = "Hello";
// 		break;
// 	case "de":
// 		greeting = "Guten Tag";
// 		break;
// 	default:
// 		break;
// }
// alert(greeting);


// // Задача № 10
// let month = new Date().getMonth();
// switch (month) {
// 	case 1:
// 	case 0:
// 	case 11:
// 		alert("Зима");
// 		break;
// 	case 10:
// 	case 9:
// 	case 8:
// 		alert("Оень");
// 		break;
// 	case 7:
// 	case 6:
// 	case 5:
// 		alert("Лето");
// 		break;
// 	case 4:
// 	case 3:
// 	case 2:
// 		alert("Весна");
// 		break;
// 	default:
// 		break;
// }


// // Задача № 11
// let lang = prompt();
// let day = +prompt();
// if (lang === "ru" && (day >= 0 || day <= 6)) {
// 	switch (day) {
// 		case 0:
// 			alert("воскресенье");
// 			break;
// 		case 1:
// 			alert("понедельник");
// 			break;
// 		case 2:
// 			alert("вторник");
// 			break;
// 		case 3:
// 			alert("среда");
// 			break;
// 		case 4:
// 			alert("четверг");
// 			break;
// 		case 5:
// 			alert("пятница");
// 			break;
// 		case 6:
// 			alert("суббота");
// 			break;
// 		default:
// 			break;
// 	}
// } else if (lang === "en" && (day >= 0 || day <= 6)) {
// 	switch (day) {
// 		case 0:
// 			alert("sunday");
// 			break;
// 		case 1:
// 			alert("monday");
// 			break;
// 		case 2:
// 			alert("tuesday");
// 			break;
// 		case 3:
// 			alert("wednesday");
// 			break;
// 		case 4:
// 			alert("thursday");
// 			break;
// 		case 5:
// 			alert("friday");
// 			break;
// 		case 6:
// 			alert("saturday");
// 			break;
// 		default:
// 			break;
// 	}
// }


// // Задача № 12
// // Метод Swith
// let firstName = prompt();
// let age = +prompt();
// switch (firstName, age) {
// 	case ("John") && (29):
// 		console.log(firstName + " " + age);
// 		break;
// 	case ("Kate") && (15):
// 		console.log(firstName + " " + age);
// 		break;
// 	default:
// 		console.log("Пока");
// 		break;
// }

// // Терный оператор
// let firstName = prompt();
// let age = +prompt();
// (firstName === "John" && age === 29) ? console.log(firstName + " " + age):
// 	(firstName === "Kate" && age === 15) ? console.log(firstName + " " + age) : console.log("Пока");

// // Задача № 13
// let str = "";
// for (let i = 0; i < 5; i++) {
// 	str +=".#";
// }
// console.log(str);

// // Задача № 14
// for (let i = 1; i <= 10; i++) {
// 	if (i % 2 == 0) {
// 		console.log(i * i);
// 	}
// }


// Задача № 15
let userName = "Dima";
for (let i = 0; i <= 4; i++) {
	if (i === 3) {
		console.log("Happy birthday dear " + userName);
	} else {
		console.log("Happy birthday to you");
	}
}


// // Задача № 16
// let varConfirm = confirm();
// let count = 0;
// console.log(varConfirm);
// while (varConfirm !== true) {
// 	count += 1;
// 	console.log(count);
// 	varConfirm = confirm();
// }


// // Задача № 17
// let varNumber = +prompt();
// let total = null;
// for (let i = 0; i != varNumber; i++) {
// 	if ((i % 2) != 0) {
// 		total += i;
// 		console.log(i);
// 	}
// }
// alert(total);


// // Задача № 18
// let count = 0;
// while (true) {
// 	let random = ((Math.random() * 100) / 100);
// 	let varFixed = +random.toFixed(2);
// 	count += 1;
// 	if (varFixed > 0.9) {
// 		alert("Число которое прервало = " + varFixed + " " + "Цикл прокрутился = " + count);
// 		break;
// 	}
// }


// // Задача № 19
// for (let i = 1; i <= 10; i++) {
// 	for (let k = 1; k <= 10; k++) {
// 		console.log(k + " * " + i +" = " +(k * i));
// 	}
// }


// // Задача № 20
// for (let i = 0, x = 1, y = 1; i <= 20; i++, x = y - x, y += x, console.log(x)) {}


// // Задача № 21
// let varNumber = +prompt();
// let count = 0;
// let sum = 0;
// while (varNumber !== 0) {
// 	count += 1;
// 	sum += varNumber;
// 	varNumber = +prompt();
// }
// console.log("Счетчик = " + count);
// console.log("Сумма введеных чисел = " + sum);
// console.log("Среднее арифметическое = " + sum / count);



// // Задача № 22
// let password = "123qwe";
// let authorization;
// reset:
// 	while (true) {
// 		if ((authorization !== password)) {
// 			authorization = prompt();
// 			if (authorization === null) {
// 				let varConfirm = confirm("Вы уверенны что хотите отменить вторизацию ?");
// 				if (varConfirm === true) {
// 					alert("Вы отменили регистрацию");
// 					break;
// 				} else {
// 					continue reset;
// 				}
// 			}
// 		} else {
// 			alert("Вы авторизированны!");
// 			break;
// 		}
// 	}

// // Задача № 23
// for (let i = 1; i <= 50; i++) {
// 	if (((i % 3) === 0) && ((i % 5) !== 0)) {
// 		console.log("Fizz делится на 3            " + i);
// 	} else if (((i % 5) === 0) && ((i % 3) !== 0)) {
// 		console.log("Buzz делиться на 5           " + i);
// 	} else if (((i % 5) === 0) && ((i % 3) === 0)) {
// 		console.log("FizzBuzz делиться на 3 и 5   " + i);
// 	}
// }
