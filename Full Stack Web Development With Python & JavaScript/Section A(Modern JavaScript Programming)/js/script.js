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
      
      
      //P5 & 6:Exercise – Operators(With Answer)

      
//U3:Operators Ens Here

