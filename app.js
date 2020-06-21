// Chapter no1

/* //Task no1
alert("Welcome to My website");

//Task no2
alert("Error!Please enter a valid password");

//Task no3
alert("WelcoMe to JS land...\nHappy coding!");

//Task no4
alert("WelcoMe to JS land");
alert("Happy coding!"); */

// Task no5
// console.log(alert("IaM running alert through jS console"));

// Chapter no2

/* //Task no1
var userNaMe;

//Task no2
var MyNaMe = "Danial Ghani Attari Qadri";

//Task no3
var Message = "Hello World";
alert(Message);

//Task no4
var naMe = "Ali";
var age = 21;
var qualification = "BSSE";
alert(naMe);
alert(age);
alert(qualification);

//Task no5
alert("PIZZA\n" + "PIZZ\n" + "PIZ\n" + "PI\n" + "P");

//Task no6
var eMail = "soMeone@eMail.coM";
alert("This is eMail address " + eMail);

//Task no7
var book = "A smarter way to learn JavaScript";
alert("One of the good book for JS is " + book);

//Task no8
var eleMent = document.getElementById("data");
eleMent.innerHTML = "Yah! I can write HTML content through JS";

//Task no9
var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(design); */

// Chapter no3

/* //Task no1
var age = 25;
alert(age);

//Task no2
var nuMberOfVisits
if(document.cookie == ""){
    nuMberOfVisits = 1;
}
else{
    nuMberOfVisits++;
}
document.cookie = "userVisits=" + nuMberOfVisits + ";expires=Tue, 6 Jun 2023 12:00:00 UTC";
alert(nuMberOfVisits);

//Task no3
var birth_year = 1994;
document.getElementById("data").innerHTML = "My birth year is " + birth_year + "<br>Data type of My declared birth year is nuMber";

//Task no4
var custoMerNaMe = "Asif";
var quantity = 2;
var product = " Levis jeans";
document.getElementById("data_one").innerHTML = custoMerNaMe + " ordered " + quantity + product + " on XYZ clothing"; */

// Chapter no4

/* // Task no1
var a, b, c;

// Task no2
var 1a, a@b, we!b, #rt, &;
var naMe, user_eMail, $, $abc, a12; */

// Task no3
// for this task please check browser 

//Chapter no5

/* // Task no1
var num1 = parseInt(prompt("Please enter first nuMber"));
var num2 = parseInt(prompt("Please enter second nuMber"));
var addition = num1 + num2;
document.getElementById("data").innerHTML = "SuM of " + num1 + " and " + num2 + " is " + addition;

// Task no2
var sub, Mul, Mod, div;
for(var i = 0; i < 4; i++){
    var p = document.createElement("p");
    switch(i){
        case 0:
            sub = num1 - num2;
            p.innerHTML = "Negation of " + num1 + " and " + num2 + " is " + sub;
            break;
        case 1:
            Mul = num1 * num2;
            p.innerHTML = "Multiplication of " + num1 + " and " + num2 + " is " + Mul;
            break;
        case 2:
            Mod = num1 % num2;
            p.innerHTML = "Modulus of " + num1 + " and " + num2 + " is " + Mod;
            break;
        default:
            div = num1 / num2;
            p.innerHTML = "Division of " + num1 + " and " + num2 + " is " + div;
    }
    document.body.appendChild(p);
}
// Task no3
var nuM3;
for( var i = 0; i < 6; i++){
    var p = document.createElement("p");
    switch(i){
        case 0:
            p.innerHTML = "Value of nuM3 after declaration " + nuM3;
            break;
        case 1:
            nuM3 = 12;
            p.innerHTML = "Value of nuM3 after initialization " + nuM3;
            break;
        case 2:
            ++nuM3;
            p.innerHTML = "Value of nuM3 after increaMent " + nuM3;
            break;
        case 3:
            nuM3 += 7;
            p.innerHTML = "Value of nuM3 after adding 7 to it " + nuM3;
            break;
        case 4:
            nuM3--;
            p.innerHTML = "Value of nuM3 after decreaMent " + nuM3;
            break;
        default:
            p.innerHTML = "After dividing nuM3 by 3 the reMainder is " + nuM3 % 3;
    }
    document.body.appendChild(p);
}

// Task no4
var MovieTicketPrice = 600;
var p = document.createElement("p");
p.innerHTML = "Total cost to buy 5 Movie tickets is " + MovieTicketPrice * 5;
document.body.appendChild(p);

// Task no5
var nuM4 = 12;
var p = document.createElement("p");
p.innerHTML = "Table of " + nuM4 + " is";
document.body.appendChild(p);
for(var i = 1; i < 11; i++){
    var p = document.createElement("p");
    p.innerHTML = nuM4 + "*" + i + "=" + (nuM4 * i);
    document.body.appendChild(p);
}

// Task no6
var teMpInCel = 30;
var p = createParagraph();
var convertedToFar = (teMpInCel * 9 / 5) + 32;
p.innerHTML = teMpInCel + "°C is " + convertedToFar + "°F";
var teMpInFar = 42;
p = createParagraph();
var convertedToCel = (teMpInFar - 32) * 5 / 9;
p.innerHTML = teMpInFar + "°C is " + convertedToCel + "°F";

// Task no7
var priceOfIteMOne = 100;
var quantityOfIteMOne = 4;
var priceOfIteMTwo = 200;
var quantityOfIteMTwo = 3;
var shippingCharges = 50;
createHeading().innerHTML = "Shopping Cart";
createLineBreaks();
createParagraph().innerHTML = "Price of iteM one is " + priceOfIteMOne;
createParagraph().innerHTML = "quantity of iteM one is " + quantityOfIteMOne;
createParagraph().innerHTML = "Price of iteM two is " + priceOfIteMTwo;
createParagraph().innerHTML = "quantity of iteM two is " + quantityOfIteMTwo;
createParagraph().innerHTML = "Shipping charges are " + shippingCharges;
createLineBreaks();
createParagraph().innerHTML = "Total cost of your order is " + (priceOfIteMOne * quantityOfIteMOne + priceOfIteMTwo * quantityOfIteMTwo + shippingCharges); */

// Task no8
/* var totalMarks = 1000;
var obtainMarks = 790;
createHeading().innerHTML = "Marksheet";
createLineBreaks();
createParagraph().innerHTML = "Total Marks: " + totalMarks;
createParagraph().innerHTML = "Marks obtain: " + obtainMarks;
createParagraph().innerHTML = "Percentage: " + obtainMarks / totalMarks * 100 + "%"; */

// Task no9
/* var usd_rates_in_PKR = 163.47;
var saudi_riyal_rates_in_PKR = 43.56;
var totalAMount = usd_rates_in_PKR * 10 + saudi_riyal_rates_in_PKR * 25;
createHeading().innerHTML = "Currency in PKR";
createLineBreaks();
createParagraph().innerHTML = "Total currency in PKR: " + totalAMount; */

// Task no10
/* var nuM5 = 12;
var calculation = (nuM5 + 5) * 10 / 2; */

// Task no11
/* var currentYear = 2020;
var birthYear = 1994;
var age = currentYear - birthYear;
createHeading().innerHTML = "Age Calculator";
createLineBreaks();
createParagraph().innerHTML = "Current year: " + currentYear;
createParagraph().innerHTML = "Birth year: " + birthYear;
createParagraph().innerHTML = "Your age: " + age; */

// Task no12
/* var radiusOfCircle = 12;
var areaOfCircle = 3.142 * 12 * 12;
var circuMferenceOfCircle = 2 * 3.142 * 12;
createHeading().innerHTML = "The GeoMetrizer";
createParagraph().innerHTML = "Radius of a circle: " + radiusOfCircle;
createParagraph().innerHTML = "The circuMference is: " + circuMferenceOfCircle;
createParagraph().innerHTML = "The area is: " + areaOfCircle; */

// Task no13
/* var favouriateSnack = "Biryani";
var currentAge = 25;
var MaxiMuMAge = 70;
var aMountPerDay = 2;
var ageReMaining = MaxiMuMAge - currentAge;
var reMainingBiryani = 2 * 365 * ageReMaining;
createHeading().innerHTML = "Life Supply Calculator";
createLineBreaks();
createParagraph().innerHTML = "Favouriate snack: " + favouriateSnack;
createParagraph().innerHTML = "Current age: " + currentAge;
createParagraph().innerHTML = "EstiMated MaxiMuM age: " + MaxiMuMAge;
createParagraph().innerHTML = "AMount of Snack per day: " + aMountPerDay;
createParagraph().innerHTML = "You will need " + reMainingBiryani + " plates of biryani till your life"; */

// Chapter 6-9
// Task no1
/* var nuM9 = 10;
createHeading().innerHTML = "Result:";
createParagraph().innerHTML = "The value of nuM9 is: " + nuM9;
createParagraph().innerHTML = "***************";
createParagraph().innerHTML = "The value of ++nuM9 is:" + ++nuM9;
createParagraph().innerHTML = "Now the value of nuM9 is: " + nuM9;
createParagraph();
createParagraph().innerHTML = "The value of nuM9++ is: " + nuM9++;
createParagraph().innerHTML = "The value of nuM9 is: " + nuM9;
createParagraph();
createParagraph().innerHTML = "The value of --nuM9 is: " + --nuM9;
createParagraph().innerHTML = "Now the value of nuM9 is: " + nuM9;
createParagraph();
createParagraph().innerHTML = "The value of nuM9-- is: " + nuM9--;
createParagraph().innerHTML = "Now the value of nuM9 is: " + nuM9; */

// Task no2
/* var a = 2, b = 1;
var result = --a - --b + ++b + b--;
createParagraph().innerHTML = "a is " + a;
createParagraph().innerHTML = "b is " + b;
createParagraph().innerHTML = "result is " + result; */
// --a Means the value of a is pre decreMented and stored back in a
// --a - --b Means the pre decreMented value of b is subtracted froM pre decreMented value of a
// --a - --b + ++b Means that pre increMented value of b is added to --a - --b
// --a - --b + ++b + b-- Means that post decreMent value of b is added to --a - --b + ++b

// Task no3
/* var naMe = prompt("Enter your naMe");
if(naMe !== ""){
    alert("Hello " + naMe);
} */

// Task no4
/* var nuMber = prompt("Enter any nuMber");
if(nuMber === ""){
    for(var i = 1; i < 11; i++){
        createParagraph().innerHTML = "5*" + i + "=" + 5 * i;
    }
}
else{
    nuMber = parseInt(nuMber);
    if(isNaN(nuMber)){
        alert("Your input is invalid");
    }
    else{
        for(var i = 1; i < 11; i++){
            createParagraph().innerHTML = nuMber + "*" + i + "=" + nuMber * i;
        }   
    }
} */

// Task no5
/* var subjectOne = prompt("Enter first subject naMe", "CoMputer");
var subjectTwo = prompt("Enter second subject naMe", "Maths");
var subjectThree = prompt("Enter second third naMe", "English");
var subjectTotalMarks = 100;
var subjectOneObtainMarks = parseInt(prompt("Enter " + subjectOne + " Marks", "0"));
var subjectTwoObtainMarks = parseInt(prompt("Enter " + subjectTwo + " Marks", "0"));
var subjectThreeObtainMarks = parseInt(prompt("Enter " + subjectThree + " Marks", "0"));
var table = document.createElement("table");
for(var i = 0; i < 5; i++){
    var row = document.createElement("tr");
    if(i == 0){
        var first = document.createElement("th");
        first.innerHTML = "Subject";
        var second = document.createElement("th");
        second.innerHTML = "Total Marks";
        var third = document.createElement("th");
        third.innerHTML = "Obtained Marks";
        var fourth = document.createElement("th");
        fourth.innerHTML = "Percentage";
        row.appendChild(first);
        row.appendChild(second);
        row.appendChild(third);
        row.appendChild(fourth);
        table.appendChild(row);
        continue;
    }
    else if(i == 4){
        var first = document.createElement("th");
        var second = document.createElement("th");
        second.innerHTML = subjectTotalMarks * 3;
        var third = document.createElement("th");
        third.innerHTML = subjectOneObtainMarks + subjectTwoObtainMarks + subjectThreeObtainMarks;
        var fourth = document.createElement("th");
        fourth.innerHTML = (subjectOneObtainMarks + subjectTwoObtainMarks + subjectThreeObtainMarks) / 300 * 100 + "%";
        row.appendChild(first);
        row.appendChild(second);
        row.appendChild(third);
        row.appendChild(fourth);
        table.appendChild(row);
    }
    for(var j = 0; j < 4; j++){
        if(j == 0){
            switch(i){
                case 1:
                    var first = document.createElement("td");
                    first.innerHTML = subjectOne;
                    row.appendChild(first);
                    break;
                case 2:
                    var second = document.createElement("td");
                    second.innerHTML = subjectTwo;
                    row.appendChild(second);
                    break;
                case 3:
                    var third = document.createElement("td");
                    third.innerHTML = subjectThree;
                    row.appendChild(third);
                    break;
            }
        }
        else if(j == 1 && i < 4){
           var tot = document.createElement("td");
           tot.innerHTML = "100";
           row.appendChild(tot);
        }
        else if(j == 2){
            switch(i){
                case 1:
                    var first = document.createElement("td");
                    first.innerHTML = subjectOneObtainMarks;
                    row.appendChild(first);
                    break;
                case 2:
                    var second = document.createElement("td");
                    second.innerHTML = subjectTwoObtainMarks;
                    row.appendChild(second);
                    break;
                case 3:
                    var third = document.createElement("td");
                    third.innerHTML = subjectThreeObtainMarks;
                    row.appendChild(third);
                    break;
            }
        }
        else{
            switch(i){
                case 1:
                    var first = document.createElement("td");
                    first.innerHTML = subjectOneObtainMarks / subjectTotalMarks * 100 + "%";
                    row.appendChild(first);
                    break;
                case 2:
                    var second = document.createElement("td");
                    second.innerHTML = subjectTwoObtainMarks / subjectTotalMarks * 100 + "%";
                    row.appendChild(second);
                    break;
                case 3:
                    var third = document.createElement("td");
                    third.innerHTML = subjectThreeObtainMarks / subjectTotalMarks * 100 + "%";
                    row.appendChild(third);
                    break;
            }
        }
        table.appendChild(row);
    }
}
document.body.appendChild(table); */

// Chapter 9-11
// Task no1
/* var city = prompt("Enter city naMe?").toLowerCase();
if(city === "karachi"){
    alert("WelcoMe to the city of lights");
} */

// Task no2
/* var gender = prompt("Enter your gender please").toLowerCase();
if(gender === "male"){
    alert("Good Morning Sir");
}
else if(gender === "female"){
    alert("Good Morning Ma'aM");
} */

// Task no3
/* var signalColor = prompt("Please input signal color").toLowerCase();
switch(signalColor){
    case "red":
        alert("Must stop");
        break;
    case "yellow":
        alert("ready to Move");
        break;
    case "green":
        alert("Move");
        break;
} */

// Task no4
/* var reMainingFuel = parseFloat(prompt("Enter aMount of fuel"));
if(reMainingFuel < 0.25){
    alert("Please refill the fuel in your car");
} */

// Task no5
/* var a = 4; 
if (++a === 5){ 
    alert("given condition for variable a is true"); 
} */ // alert will be display because a is pre increMented 
/* var b = 82; 
if (b++ === 83){ 
    alert("given condition for variable b is true");
} */ // alert will not display because b is post increMented 
//var c = 12; 
/* if (c++ === 13){ 
    alert("condition 1 is true"); 
} */ // alert will not display because c is post increMented 
/* if (c === 13){ alert("condition 2 is true"); } */ // alert will display because condition is true
/* if (++c < 14){ alert("condition 3 is true"); } */ // alert will not display because condition is false 
/* if(c === 14){ alert("condition 4 is true"); } */ // alert will display because condition is true
/* var materialCost = 20000; 
var laborCost = 2000; 
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){ alert("The cost equals"); } */ // alert will display because condition is true 
/* if (true){ alert("True"); } */ // alert will display because condition is true 
/* if (false){ alert("False"); } */ // alert will not display because condition is false
/* if("car" < "cat"){ alert("car is smaller than cat"); } */ // alert will display because in the condition strings are checked character by character

// Task no6
/* var coMputerMarks = parseInt(prompt("Enter coMputer Marks"));
if(!isNaN(coMputerMarks)){
    var MathsMarks = parseInt(prompt("Enter Maths Marks"));
    if(!isNaN(MathsMarks)){
        var englishMarks = parseInt(prompt("Enter english Marks"));
        if(!isNaN(englishMarks)){
            var totalMarks = 300;
            var percentage = (MathsMarks + englishMarks + coMputerMarks) / totalMarks * 100;
            var grade, reMarks;
            if(percentage >= 80){
                grade = "A-1";
                reMarks = "Excellent";
            }
            else if(percentage >= 70){
                grade = "A";
                reMarks = "Good";
            }
            else if(percentage >= 60){
                grade = "B";
                reMarks = "You need iMproveMent";
            }
            else{
                grade = "fail";
                reMarks = "Sorry";
            }
            createHeading().innerHTML = "Marksheet";
            createParagraph().innerHTML = "Total Marks: " + totalMarks;
            createParagraph().innerHTML = "Percentage: " + percentage + "%";
            createParagraph().innerHTML = "Grade: " + grade;
            createParagraph().innerHTML = "ReMarks: " + reMarks;
        }
        else{
            alert("Please enter valid nuMber");
        }
    }
    else{
        alert("Please enter valid nuMber");
    }
}
else{
    alert("Please enter valid nuMber");
} */

// Task no7
/* var secretNuMber = 12;
var userInput = parseInt(prompt("Enter nuMber"));
if(!isNaN(userInput)){
    if(userInput === secretNuMber){
        alert("Bingo! Correct answer");
    }
    else if(secretNuMber + 1 === userInput){
        alert("Close enough to the correct answer");
    }
} */

// Task no8
/* var userInput = parseInt(prompt("Enter nuMber"));
if(!isNaN(userInput)){
    if(userInput % 3 === 0){
        alert(userInput + " is divisible by 3");
    }
} */

// Task no9
/* var userInput = parseInt(prompt("Enter nuMber"));
if(!isNaN(userInput)){
    if(userInput % 2 === 0){
        alert(userInput + " is even");
    }
    else{
        alert(userInput + " is odd");
    }
} */

// Task no10
/* var teMp = parseInt(prompt("Enter teMperature"));
if(!isNaN(teMp)){
    if(teMp > 40){
        alert("It is too hot outside");
    }
    else if(teMp > 30){
        alert("The Weather today is Normal");
    }
    else if(teMp > 20){
        alert("Today’s Weather is cool");
    }
    else if(teMp > 10){
        alert("OMG! Today’s weather is so Cool");
    }
} */

// Task no11
/* var nuM1 = parseInt(prompt("Enter first nuMber"));
var nuM2 = parseInt(prompt("Enter second nuMber"));
if(isNaN(nuM1) || isNaN(nuM2)){
    alert("Please enter valid nuMber");
}
else{
    var operator = prompt("Please enter operator");
    switch(operator){
            case "+":
               alert(nuM1 + nuM2);
               break;
            case "-":
                alert(nuM1 - nuM2);
                break;
            case "*":
                alert(nuM1 * nuM2);
                break;
            case "/":
                alert(nuM1 / nuM2);
                break;
            case "%":
                alert(nuM1 % nuM2);
                break;
            default:
                alert("Please enter valid operator");
    }
} */

// Chapter 12-13
// Task no1
/* var char = prompt("Please input an alphabet or a digit froM 0 to 9");
if(char.length > 1){
    alert("Invalid input");
}
else{
    var code = char.charCodeAt(0);
    if((code >= 65 && code <= 90) || (code >= 97 && code <= 122)){
        alert("You enter alphabet");
    }
    else if(code >= 48 && code <= 57){
        alert("You entered nuMber");
    }
    else{
        alert("Invalid input");
    }
} */

// Task no2
/* var nuM6 = parseInt(prompt("Enter first nuMber"));
var nuM7 = parseInt(prompt("Enter second nuMber"));
if(nuM6 > nuM7){
    alert(nuM6 + " is greater");
}
else if(nuM6 < nuM7){
    alert(nuM7 + " is greater");
}
else{
    alert("Both nuMbers are equal");
} */

// Task no3
/* var nuM8 = parseInt(prompt("Enter nuMber"));
if(nuM8 > 0){
    alert(nuM8 + " is positive");
}
else if(nuM8 < 0){
    alert(nuM8 + " is negative");
}
else{
    alert("It is " + nuM8);
} */

// Task no4
/* var char = prompt("Enter alphabet");
function checkVowel(char){
    if(char.length > 1 || char.length < 1){
        alert("Invalid input");
        return false;
    }
    else if(char.length == 1){
        if(char === "a" || char === "A" || char === "e" || char === "E" || char === "i" || char === "I" || char === "o" || char === "O" || char === "u" || char === "U"){
            return true;
        }
        return false;
    }
}
if(checkVowel(char)){
    alert(char + " is a vowel");
}
else{
    alert("It is not a vowel");
} */

// Task no5
/* var correctPassword = "Pakistan*12";
var userPassword = prompt("Enter your password");
while(userPassword === ""){
    userPassword = prompt("Enter your password");
}
if(userPassword === correctPassword){
    alert("Correct password");
}
else{
    alert("Incorrect password");
} */

// Task no6
/* var greeting; 
var hour = 13; 
if (hour < 18) { 
    greeting = "Good day";
} 
else{ 
    greeting = "Good evening";
} */

// Task no7
/* var tiMe = new Date();
var hours = tiMe.getHours();
if(hours >= 0 && hours < 12){
    alert("Good Morning");
}
else if(hours >= 12 && hours < 17){
    alert("Good afternoon");
}
else if(hours >= 17 && hours < 21){
    alert("Good evening");
}
else{
    alert("Good night");
} */

// Chapter 14-16
// Task no1
// var arr = [];

// Task no2
/* var arr = new Array();
arr[0] = "Danial Ghani Attari Qadri";
arr[1] = "Ali";
alert(arr[1]); */

// Task no3
//var arr = ["abc", "def"];

// Task no4
//var arr = [12, 11];

// Task no5
//var arr = [true, false];

// Task no6
//var arr = [12, "abc", true];

// Task no7
/* var arr = ["SSC", "HSC", 'BCS', 'BS', "B.COM", "MS", 'M. Phil.', "PhD"];
createHeading().innerHTML = "qualifications:";
for(var i = 1; i <= arr.length; i++){
    createParagraph().innerHTML = i + ") " + arr[i - 1];
} */

// Task no8
/* var Students = ["Danial", "Gayyour", "Ali"], score = [370, 380, 495];
for(var i = 0; i < Students.length; i++){
    createParagraph().innerHTML = "Score of " + Students[i] + " is " + score[i] + ". " + "percentage is " + score[i] / 500 * 100;
} */

// Task no9
/* var colors = ["Green", "blue", "red"];
for(var i = 0; i < colors.length; i++){
    createParagraph().innerHTML = colors[i];
} */

/* var userColor = prompt("Enter your favouriate color naMe");
var colors = [];
colors.push(userColor);
createParagraph().innerHTML = colors[0]; */

/* var colors = ["Red"];
colors.splice(0, 0, "Green", "Blue");
createParagraph().innerHTML = colors; */

/* var colors = ["red", "blue", "Green"];
colors.shift();
createParagraph().innerHTML = colors; */

/* var colors = ["Green", "red", "blue"];
colors.pop();
createParagraph().innerHTML = colors; */

/* var colors = ["Green", "red", "blue"];
var userColor = prompt("Enter your favouriate color naMe");
var userIndex = parseInt(prompt("Enter position where you want to add color"));
colors.splice(userIndex, 0, userColor);
createParagraph().innerHTML = colors; */

/* var colors = ["Green", "red", "blue"];
var userIndex = parseInt(prompt("Enter position of color you want to delete"));
var totalColors = parseInt(prompt("How Many colors you want to delete"));
colors.splice(userIndex, totalColors);
createParagraph().innerHTML = colors; */

// Task no10
/* var StudentScores = [320, 350, 260, 300];
var sortedScores = StudentScores.slice(0, StudentScores.length).sort();
createParagraph().innerHTML = "Student scores: " + StudentScores;
createParagraph().innerHTML = "Sorted scores: " + sortedScores; */

// Task no11
/* var cities = ["Karachi", "Lahore", "IslaMabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(0,3);
createHeading().innerHTML = "Cities list:";
createParagraph().innerHTML = cities;
createHeading().innerHTML = "Selected cities list:";
createParagraph().innerHTML = selectedCities; */

// Task no12
/* var arr = ["This", "is", "my", "cat"];
createHeading().innerHTML = "Array:";
createParagraph().innerHTML = arr.join(" "); */

// Task no13
/* var devices = ["Monitor", "Mouse", "keyboard"];
createHeading().innerHTML = "Devices:";
createParagraph().innerHTML = devices;
for(var i = 0; i < devices.length; i++){
    createHeading().innerHTML = "Out:";
    createParagraph().innerHTML = devices[i];
} */

// Task no14
/* var devices = ["Monitor", "Mouse", "keyboard"];
createHeading().innerHTML = "Devices:";
createParagraph().innerHTML = devices;
for(var i = devices.length - 1; i > -1; i--){
    createHeading().innerHTML = "Out:";
    createParagraph().innerHTML = devices[i];
} */

// Task no15
/* var MobileManufacturers = ["Apple", "Nokia", "SaMsung", "Motorolla", "Sony", "Haier"];
document.write("<select>" + "<option>" + MobileManufacturers[0] + "</option>"
+ "<option>" + MobileManufacturers[1] + "</option>"
+ "<option>" + MobileManufacturers[2] + "</option>"
+ "<option>" + MobileManufacturers[3] + "</option>"
+ "<option>" + MobileManufacturers[4] + "</option>"
+ "<option>" + MobileManufacturers[5] + "</option>"
+ "</select>"
); */

// Chapter 17-20
// Task no1
//var arr = [[1, 2], ["3", 4]];

// Task no2
//var arrTwo = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];

// Task no3
/* for(var i = 1; i < 11; i++){
    console.log(i);
} */

// Task no4
/* var Multiplication_Table = parseInt(prompt("Enter the nuMber for which you want to print the table of", "0"));
var MaxiMuM_liMit = parseInt(prompt("Enter the MaxiMuM liMit or length of table?", "10"));
if(isNaN(Multiplication_Table) || isNaN(MaxiMuM_liMit)){
    alert("Please give valid input");
}
else{
    createParagraph().innerHTML = "Multiplication table of " + Multiplication_Table;
    createParagraph().innerHTML = "MaxiMuM liMit or length is " + MaxiMuM_liMit;
    for(var i = 1; i <= MaxiMuM_liMit; i++){
        createParagraph().innerHTML = Multiplication_Table + "*" + i + " = " + Multiplication_Table * i;
    }
} */

// Task no5
/* var fruits = ["apple", "banana", "Mango", "orange", "strawberry"];
for(var j = 0; j < fruits.length; j++){
    createParagraph().innerHTML = fruits[j];
}
createLineBreaks();
for(var j = 0; j < fruits.length; j++){
    createParagraph().innerHTML = "EleMent at index " + j + " is " + fruits[j];
} */

// Task no6
/* createHeading().innerHTML = "Counting:";
var p = createParagraph();
for(var i = 1; i < 16; i++){
    p.innerHTML = p.innerHTML + i + " ";   
}
createHeading().innerHTML = "Reverse counting:";
p = createParagraph();
for(var i = 10; i > 0; i--){
    p.innerHTML = p.innerHTML + i + " ";   
}
createHeading().innerHTML = "Even:";
p = createParagraph();
for(var i = 0; i < 21; i+=2){
    p.innerHTML = p.innerHTML + i + " ";   
}
createHeading().innerHTML = "Odd:";
p = createParagraph();
for(var i = 1; i < 20; i+=2){
    p.innerHTML = p.innerHTML + i + " ";   
}
createHeading().innerHTML = "Series:";
p = createParagraph();
for(var i = 2000; i < 21000; i+=2000){
    p.innerHTML = p.innerHTML + i + " ";   
} */

// Task no7
/* var iteMs = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Enter iteM");
if(userInput === ""){
    alert("Please give valid input");
}
else{
    userInput = userInput.toLowerCase();
    var iteMExistence = false;
    for(var j = 0; j < iteMs.length; j++){
        if(userInput === iteMs[j]){
            iteMExistence = true;
            createParagraph().innerHTML = userInput + " is available at index " + j + " in our bakery";
            break;
        }
    }
    if(!iteMExistence){
        createParagraph().innerHTML = "We are sorry " + userInput + " is not available in our bakery";
    }
} */

// Task no8
/* var arr = [24, 53, 78, 91, 12];
createParagraph().innerHTML = "Array iteMs: 24, 53, 78, 91, 12";
createParagraph().innerHTML = "The largest nuMber is " + Math.max(...arr); */

// Task no9
/* var arr = [24, 53, 78, 91, 12];
createParagraph().innerHTML = "Array iteMs: 24, 53, 78, 91, 12";
createParagraph().innerHTML = "The sMallest nuMber is " + Math.min(...arr); */

// Task no10
/* var p = createParagraph();
for(var i = 1; i < 21; i++){
    p.innerHTML = p.innerHTML + 5*i + ", ";
} */
function createParagraph(){
    var p = document.createElement("p");
    document.body.appendChild(p);
    return p;
}
function createHeading(){
    var heading = document.createElement("h1");
    document.body.appendChild(heading);
    return heading;
}
function createLineBreaks(){
    document.body.appendChild(document.createElement("br"));
    document.body.appendChild(document.createElement("br"));
}