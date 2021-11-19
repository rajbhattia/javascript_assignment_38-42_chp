//chp 38-42

//Switch while do while functions

//1
function power(base, exponent) {
	var result = 1;
	if(exponent == undefined)
		exponent = 2;
	for(var i=1; i<=exponent; i++) {
		result = result * base;
	}
	return result;
}

console.log(power(2,4))



//2

var year 
var year = prompt("enter year")
if(year%4 == 0){
    console.log("its leap year")
}
else{
    console.log("its not leap year")
}


//3

var a=2
var b=3
var c=4
var  area
S = (a + b + c) / 2;
 area = sqrt(S*(S - a)*(S - b)*(S - c));
 console.log(area)



//4

var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

var Avgmarks = 0;

for (var i=0; i < students.length; i++) {
        Avgmarks += students[i][1];
        var avg = (Avgmarks/students.length);
}

console.log("Average grade: " + (Avgmarks)/students.length);

        if (avg < 60){
          console.log("Grade : F");      
          } 
        else if (avg < 70) {
                console.log("Grade : D"); 
                  } 
        else if (avg < 80) 
             {
                console.log("Grade : C"); 
        } else if (avg < 90) {
                console.log("Grade : B"); 
        } else if (avg < 100) {
                console.log("Grade : A"); 
}


//5
function indexOf(string, character) {
    let result = string;
    let i = 0;
    let output = 1;
  
    while (i < result.length) {
      if (result[i] === character) {
        output = output + indexOf[i];
      }
    }
  
    return output;
  }



//6

function hasVowels(string){
    let word = string.toLowerCase()
    if(/[aeiou]/.test(word)){
      return true
    } else if (word.includes("y") && YIsAVowel(word)){
      return true
    } else {
      return false
    }
  }


//7
function findOccurrences() {
    var str = "Pleases read this application and give me gratuitySuch occurrences are ea, ea, ui.";
    var count = 0;

    switch (str) {
        case 'a':
            count++;
        case 'A':
            count++
        case 'e':
        case 'E':
        case 'i':
        case 'I':
        case 'o':
        case 'O':
        case 'u':
        case 'U':
            return 1;
        default:
            return 0;
    }
}

findOccurrences();



//8

var km,m,cm,f,inh
var a = prompt("enter distance in kilmeter")
console.log(a)

m = km * 1000;
cm = km * 1000 * 100;
f = km * 3280.84;
inh = km * 39370.08;
console.log("The distance in Feet: %f\n", f);
console.log("The distance in Inches: %f\n", inh);
console.log("The distance in Meters: %f\n", m);
console.log("The distance in Centimeters: %f\n", cm);



//9

var i, time_worked, over_time, overtime_pay = 0;
	for (i = 1; i <= 10; i++)
	{
		prompt("Enter the time employee worked in hr ");
		console.log("time_worked");
		if (time_worked>40)
		{
			over_time = time_worked - 40;
			overtime_pay = overtime_pay + (12 * over_time);
		}
	}
	console.log("nTotal Overtime Pay Of 10 Employees Is ", overtime_pay);



//10

var amount;
	prompt("Please input amount for withdraw : ");
	console.log("amount");

	//calculations
	console.log("\Required notes of Rs. 100  :  %d", amount / 100);
    console.log("Required notes of Rs. 50   :  %d", (amount % 100) / 50);
    console.log("Required notes of Rs. 10   :  %d", (((amount % 100) % 50) / 10));
    console.log("Amount still remaining Rs. :  %d", (((amount % 100) % 50) % 10));












//ennnnnnnnnnnnnnnnnnnnnnnnd