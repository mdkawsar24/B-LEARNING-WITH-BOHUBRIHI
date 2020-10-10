//U1:Now Start Coding!
//P1:JavaScript Outputs

/*  window.alert("I am 'learning' JavaScript");
 alert("I am learning HTML");
 document.write('I am "learning" JavaScript');
 document.getElementById("root").innerHTML = "I am learning Javascript";
 document.getElementById("heading1").innerHTML = "This is Heading One";
 document.getElementById("heading3").innerHTML = "This is Heading Three";
 console.log("Hello World");
 document.write("67,5 67.5"); */

//P1:JavaScript Outputs Ens here

//U1:Now Start Coding! Ends Here

//U2:Variables and Constants
//P2:Javascript Variables Part 2
/* var a = 35;
let b = 65;
var c = b;
var d = a + b;
//document.write(a);
//document.write(b);

a = 45.7;//always latest value print kore
console.log(a);
console.log(b);
console.log(c);
console.log(d);
a = "Md kawsar Mia"
b = 95;
 //console.log(a);
 console.log(a);
 console.log(b);
 console.log(c);//b er man 95 holeo a er c er man 65 tekhe jabe karon c er man 2nd time change kora hoini
 var e =20;
 console.log(e);
 var e;
 console.log(e);

 //valid variables: $a, _abc, abc123{only underscore and dollar sign can be used before}
 //invalid variables:123,123abc
 //var myName, MyName;{they are different variables,that means variables are case sensetive} */

//P2:Javascript Variables Part 2 Ends Here

//P3:Javascript Constants and Keywords

/* const a = 5;
console.log(a); */
//a = 5 + 3;{not accepted because const cannot be assign again }
/* const b;
b = 5;[not accepted because const value need to assign initially ]
*/
// keywords cannot be the name of variables jemon var = const;
//https: //www.w3schools.in/javascript-tutorial/keywords/

//P3:Javascript Constants and Keywords Ends Here

//U2:Variables and Constants Ends Here

//U3:Operators
//P1:Arithmetic Operators
/* var a = 2;
var b = 3;
console.log(a);
var c , d;
c = a + b;
console.log(c);
console.log(a ** b);
//increment operator a++/++a both are almost same
a++;
++b;
console.log(a);
console.log(b);
c = a++; //post increment
d = ++b; //pre increment
console.log(a);
console.log(c);
console.log(d);
c = --a;
d = b--;
console.log(c); //age a er man 4 silo tai ekhane 3 hoiyese
console.log(a);//c = --a ekhane a er man 3
console.log(d);
console.log(b);
a = (3 - 5) * 5 / 7 + 4 ** 4;//(most priority goes to **)but (3-5)bracket er vitor tai er kaj age hobe */

//P1:Arithmetic Operators Ends Here

//P2:String Operators

/* var line1 = "Hello";
var line2 = " World";
console.log(line1 + line2);
var line3 = "Hello";
var line4 = "World";
console.log(line3 + " " + line4);
var a = "Hello";
var b = 34;
var c = 4;
console.log(a + b + c); //concatenate,it goes from left to right>Hello344..ortat ekhane hello er sathe 34 er joog korte partesena
 var d = 34;
 var e = 4;
 var f = "Hello";
 console.log(d + e + f); //they will add first two numbers>38Hello..ekhane 34 er sathe 4 er joog korte partese 
var g = "34";
var h = "4";
console.log(g + h);//344 hoiye jabe(jooger somoy)
console.log(g - h);//30 hobe (bioger somoy)
 var i = "4";
 var j = "Hello";
 console.log(i - j); //nan>not a number*/

//P2:String Operators Ends Here

//P3:Comparison, Logical and Conditional Operators
//Comparison Part
/* var a = 6;
       var b = - 5;
       console.log(a==b);
       console.log(a != b);
       console.log(a !== b);
       console.log(a > b);
       console.log(a < b);
       console.log(a >= b);
       console.log(a <= b);
       var c = 5;
       var d = "5";
      console.log(c == d);//true return kore although d er man ekta string
      console.log(c === d);//compare with type ortat false return korbe, beacause === use kora hoiyse,and here value is but type is not equal,ortat d er value type holo string
      console.log(c!=d);//string holeo they are equal
      console.log(c !== d);//here it will show the actull man oratat c not equal to d, karon the value of d is a string
      console.log(c > d);
       var e = (5>4);
       console.log(e);
       var f = 5 < 4
       console.log(f);*/
//Comparison Parts Ends here

//Logical Operator
/* true || true
true || false
false || true
false || false
true || true || false//true return kore beacause or operator e jekono ekta true holei true return kore
true && true
true && false
false && true
false && false
!true//false return kore
!false//true return kore */
/* (5>7) || (6<8);
var a = (5>7);
var b = (6<-8);
console.log(a || b);
console.log(a && b);
(4 < 6) && (1 > -9);// true return kore
(4 < 6) && !(1 > -9); // false return kore, because ! not use kora hoiyse */
//Logical Operator Ends Here

//Conditional Operators
/* var a = (8<6) ? "Hello":"World";
console.log(a);// 8 tekhe 6 boro condition ta jodi true hoi tahole Hello dekhabe r jodi false hoi tahole World dekhabe */
//Conditional Operators Ends Here

//P3:Comparison, Logical and Conditional Operators Ends Here

//P4:Assignment Operators

/* var a = 20;
var b = 12;
a = b;//b er value a te chole jabe
console.log(a);
var c = a + b;
console.log(c);//c er man 24 hobe
a += 18; //a = a + 18;
console.log(a);//a er man 30 hobe because age a = b te a er man 12 silo
a -= 10; //a = a - 10;
console.log(a);//age a er man 30 hoiyesili then 10 minus kore 20 hoise
a *= 10; //a = a * 10;
console.log(a);
a /= 10; //a = a / 10;
console.log(a);
a %= 8; //a = a % 8;
console.log(a);
var name = "Hello ";
name += "World"; //name = name + "World";
console.log(name);
name += "!";
console.log(name); */

//P4:Assignment Operators Ends Here

//P5 & 6:Exercise – Operators(With Answer)
/* var c = prompt("Enter Temperature in Celcius: ");
var f = 9 / 5 * c + 32;
window.alert("Fahrenheit: " + f + " Degree");

console.log("Task Complete!"); */
/* var temp = prompt("Please enter temperature: ");
var result = 9 / 5 * temp + 32;
alert("Fahrenheit: " + result + " Degree");
console.log("Task Complete!"); */

//P5 & 6:Exercise – Operators(With Answer) Ends Here



//U3:Operators Ens Here

//U4:Data Types 

//P1:Different Types of Data

/* var man = {
      name: "kawsar",
      age: 21,
      home: "Brahmanbaria"
} */

//P1:Different Types of Data Ends Here

//P2:Numbers
/* var c = 187;
var a = c.toString(2);
console.log(a);
var x = "kawsar0179";//mix character
console.log(isNaN(x));
var e = 10;
console.log(isNaN(e)); */

//P2:Numbers Ends here

//P3:Strings

/* var a = 'Hello '''''' world';//single quotataion er vitor single quotation rakha jaina, tai ekhane error dekhabe
console.log(a);
var b = "Hello '''' World";//single quotation er vitor double ebong double quotation er vitor single quotation rakha jai
console.log(b);
var c = "I am " "Kawsar";//double quotation er vitor double quotation rakha jaina tai error dekhabe
console.log(c);
var x = "Hello \" World";//back slash die double quotation er vitor double quotation ebong single er vitor single quotation use valid
console.log(x);
var y = "Hello \\ World";//back slash dekhanoor jonno doita backslash dite hoi
console.log(y);
var e = "Hello \t\t World";//backslash t use hoi boro space dewar jonno, ekhane doita use kora hoise onek space er jonno
console.log(e);
var d = "Hello \n World";//back slash n use hoi break dewar jonno
console.log(d);
z = "Bohubrihi".length;
console.log(z);
var f = "Kawsar";
f.concat(z, "efg", "123");
console.log(f); */

//P3:Strings Ends Here

//P4:Booleans


//P4:Booleans Ends Here

//P5:Arrays Part 1

/* var countries = ["Bangladesh", "India", "America" ]
console.log(countries);
console.log(countries[0]);
console.log(countries.length);
countries[1] = "Poland";
console.log(countries[1]);
countries[3] = "Norway";
console.log(countries[3]);
countries[countries.length] = "Sewden"//spelling mistake
console.log(countries);
countries[4] = "Sweden"//spelling mistake solved
console.log(countries);
countries.push("China")
console.log(countries);
countries.pop();
console.log(countries);
countries.push("Pakistan", "Japan")
console.log(countries);
countries.shift()
console.log(countries);
countries.unshift("Bangladesh")
console.log(countries); */

//P5:Arrays Part 1 Ends Here

//P6:Arrays Part 2

/* var numbers = []
console.log(numbers);
numbers.push(12)
console.log(numbers);
numbers.push("two")
console.log(numbers);
var x = "Bangladesh";
var y = x.split("")
console.log(y);
var a = "Bangladesh is a country";
var b = a.split("n");
console.log(b);
b = a.split(" ");
console.log(b);
var c = "Bangladesh, China, Findland";
var d = c.split(",");
console.log(d);
var e = d.toString()
console.log(e);
var f = "Bangldesh is a country";
var g = f.split(" ");
console.log(g);
var h = g.toString()
console.log(h);
h = g.join("/");
console.log(h);
h = g.join(" ");
console.log(h);
h = c.concat(f);
console.log(h); */


//P6:Arrays Part 2 Ends Here

//P7:Objects

/* var student = { name: "Kawsar", age:22, hometown:"Brahmanbaria"}
console.log(student);

console.log(student["name"]);
console.log(student.name);
console.log(student.age);
student["occupation"] = "student";//new 
console.log(student);
student.village = "Sadakpur";
console.log(student);
delete student.village
console.log(student);
student = {}
console.log(student);
student.name = "Karim"
student.age = 23
console.log(student); */


//P7:Objects Ends Here

//P8:More on Arrays and Objects

/* var arr = [ 1, 2, ["a", "b"], 3, 4];
console.log(arr);
console.log(arr[0]);
console.log(arr[2]);
console.log(arr[2][0]);//array er vitor onno r ekta array er 0 number element ta dekha hoise
var array = [ 1, 2, ["a", ["word1", "word2"], "b"], 3, 4];
console.log(array[2][1][1]);
var arry = [ 1, 2, ["a", "b"], {prop1:"item 1", prop2:"item 2"}] ;
console.log(arry);
console.log(arry[3]["prop1"]);
console.log(arry[3].prop1);
var aray = ["item 1", "item 2", { prop1:"item 1", prop2:[1, 2, ["a", "b"]]}];
console.log(aray);
console.log(aray[2]["prop2"][2][0]);
console.log(aray[2].prop2);
console.log(aray[2].prop2[2]);
console.log(aray[2].prop2[2][0]);
var obj = {prop1:"prop 1", prop2:"prop 2", prop3:["item 1 of prop 3", "item 2 of prop 3"]}
console.log(obj);
console.log(obj.prop3[1]); */


//P8:More on Arrays and Objects Ends Here

//P9:Undefined, Empty values, null, NaN


//P9:Undefined, Empty values, null, NaN Ends Here

//P10:Primitive and Reference Types

//P10:Primitive and Reference Types Ends Here

//U4:Data Types Ends Here

//U5:Template Literals (ES6)

//P1:Template Literals (ES6)

/* console.log("First line \nSecond line");
console.log(`First line
Second line`);//Backtick use kore
var a = `First line
Second line`;
console.log(a);
let age = 36;
console.log("His age is: " + age);
console.log(`His age is${age}`)
let name = "Rahim";
let agee = 25;
let dob = "16th April, 1995";
console.log(`His name is: ${name}
His age is: ${agee}
His date of birth is: ${dob}.`);
let x = 60;
let y = 40;
console.log(`${x} + ${y} = ${x + y}`); */

//P1:Template Literals (ES6) Ends Here

//U5:Template Literals (ES6) Ends Here

//U6:Conditions

//P1:If Statement



//P1:If Statement Ends Here

//U6:Conditions Ends Here