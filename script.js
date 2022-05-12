 1. What is JavaScript?
         Javascript is a scripting language that enables us to upadte content, control multimedia adn animate
         images. JS can change amd update both HTML and CSS.

    ADVANTAGES OF JavaScript-->


          a. SPEED : Since JavaScript is a intrepeted language, it reduces the time required by the other programming language like JAVA for compilation. JavaScript is also a client-side script, it speeds up the execution of the program it saves time required to connect to the Server.
 

          b. RICH INTERFACES: JavaScript provides various interfaces to developers for creating a catchy website, drag and drop components or sliders may give rich interfaces to the webpage.

          c. LESS OVERHEAD:  JavaScript improves the performance of the website and web applications by reducing the code length. The code becomes less overhead by using various built-in functions like fro loop , DOM access etc.

    
    DISADVANTAGES -->
    
        a. CLIENT-SIDE SECURITY : Since JavaScript code is viewable to the user, others may use the source code without the authentication for malicious purposes.

        b. SINGLE INHERITANCE: JavaScript supports only single inheritance not the multiple inheritance.

        c. RENDERING STOPPED: A single code error can stop the rendering of the entire JS code on the website.


  2. Full Form of ECMA Script => European Computer Manufracturer Association Script

  3. Diffrence between '==' and '===' operator?
        Both are comparison operator. but == is used to compare only values and === operator used to compare both values and data type.

   4. What is Implicit Type Coercion?
        Implicit Type Coericion is automatic conversion of value from one data type to another data type.

        example:

        let result = "3" + 3;
        console.log(result);  //Output: 33
        
        note: There is also a manual conversion of value which is called Explicit Type Coericion.
    
   5. What is pass by value and pass by reference?
        Pass by value means when we pass the actual value of the variable to the function.
        Pass by reference means passing the reference of an argument to the calling function corresponding to the formal parameter of the called function.

   6. Immediatley Invoked Function:
        Immediatley Invoked Function is a function which runs as soon as it is defined. To invoke the funcion, we use set of second parenthesis.
        
                (function(){
                    //code to be executed;
                })();

 7. High Order Functions:
        High order function are the function that operate on other function either by taking as an argument or by returning them
        Example:

        function highOrder(func){
            func();
        }
        highOrder(showMessage = () =>{
            console.log("Hello World.");
        });

  8. Explain "this" keyword?
         The "this" keyword refers to the object that the function is a property of.
         
         const user={
             firstName:"Chiranjeeb",
             lastName:  "Saikia",
             getfullName: function(){
                 return this.firstName + " " + this.lastName;
             } 
         }
         user.getfullName(); // Output : Chiranjeeb Saikia

    9. What is Scope and Scope Chain?
         Scope in Javacript determines the accessibility of variable and functions at various part in one's code.
         3 types of scope=>

         GLOBAL SCOPE: All the variables or function declared in global namespace have global scope that means variables or function having global scope can be accessed from anywhere from the code.

         FUNCTION SCOPE: Variables or funnctions that are declared inside a function have function scope that means we can access these variables or functions within the function but can not accesss it from the outside.

         BLOCK SCOPE: Block scope is related to the variable declared with let and const keyword. Variables declared with var keyword doesnot have block scope.

         When we try to access a variable or function during a function call, it starts searching from the local variables and if not found in there, it will search in it outer scope untill global scope is reached and completes the searching for the variable there.This process is called Scope Chain.

    10. What is Call-Back function?
          Call back functions are the function which are used as a argument in other functions.

          Example:

          function divideByHalf(sum){
              console.log(Math.floor(sum/2));
          }

          function operationOnSum(num1, num2, operation){
              var sum = num1 + num2;
              operation(sum);
          }

          operationOnSum(4,5, divideByHalf);
             //Output: 4.5



    11. What is DOM?
         DOM stands for Document Object Model.
         DOM is a programming interface for HTML and XML documents.
         When a browser tries to render the HTML document, it will create a object based on the HTML document
         called DOM.
         Using this DOM, we can manipulate or change the various elements inside the HTML document.

    12. What is temporal dead zone?
         Temporal dead zone is a behaviour  that occurs when we try to access a variable declared with let and const keyword. It is a behaviour that occurs when accessing a variable before it is initialised.
         
    13. What is Asynchronous Function?
         JS Asynchronous function is a function that runs parallel to the other functions.

         setTimeout(): Using setTimeout(), we can specify a callback function to be executed on time out.
         setInterval(): Using setInterval(), we can specify a callback function to be executed on each interval.

    14. What is promise in Javascript?
         Promise ia a good way to handle asynchronous operation in javascript. It is used to find if asynchronous operation is completed or not.

         Promise in Javascript may have one of the three states.
         1.Pending 2.Fulfilled 3. Rejected

         A promise starts with a pending statement that means the operation is not completetd yet. If the operation is successful, the process ends with a fulflled state and if there is a error in the operation, the process ends with a rejected state.

        const count = true;
        let countValue = new Promise(function(resolve,reject){
            if(count){
                resolve("There is a count value.");
            }else{
                reject("There is not a count value.");
            }

        });
        console.log(countValue);

       In the above program, a Promise object is created that contains two function resolve and reject.
         resolve() is used when the process is successful and reject() is used when there is a error in the process.

    15. What is Async-Await?
         Async and Await makes promises easier to write.
         The " async " keyword before any function is used to make the function return a promise.
         The "await" keyword is used inside any async function that makes the function to wait for promises.

        let promise = new Promise(function(resolve, reject){
            setTimeout(()=>{
                resolve("Async Function")
            }, 4000);
        });

        async function asyncFunc(){
            let result = await promise;
            console.log(result);
            console.log('hello');
        }
        asyncFunc();


    16. What is Closure in JavaScript?
         Closure are the function that have access to the variable that are present in their scope chain even if the outer function ceases to exist.
        Example: 
        
        function firstName(){
            const fName = "Chiranjeeb";
            return function lastName(){
                const lName = "Saikia";
                return function fullName(){
                    console.log('My Name is ${fName} ${lName}.')
                }
            }

        }
        firstName(); //Output => [function: lastName]
        firstName()(); //Output => [Function: fullName]
        firstName()()(); //Output=> My Name is Chiranjeeb Saikia.
                  
          
    17. What is Memoization?
          Memoization is a form of caching where the return value of a function is cached based on its parameter.
          If the parameter of the function is not changed then the cache version of the function is returned.

    18. What are call(), apply() and bind() method?
          
          call() method is a pre defined method in JavaScript. It can be used to invoke or call a method with an owner object as an argument(parameter). call() method takes arugments separately. With call() an object can use method from another object.

           const personDetails = {
               fullName: function(city, country){
                return this.firstName + " " + this.lastName + ", "+ city+", "+country+".";      
               }
            }
            const person1 = {
                firstName: "Chiranjeeb",
                lastName: "Saikia"
            }

            personDetails.fullName.call(person1, "Digboi","India");

                     //Output: Chiranjeeb Saikia, Digboi,India.

          apply() method is also a predefined method in JavaScript. It is similar to the call() method. But the difference is that apply() method takes arguments in an Array.

          const personDetails = {
            fullName: function(city, country){
             return this.firstName + " " + this.lastName + ", "+ city+", "+country+".";      
            }
         }
         const person1 = {
             firstName: "Chiranjeeb",
             lastName: "Saikia"
         }

         personDetails.fullName.apply(person1, ["Digboi","India"] );

                  //Output: Chiranjeeb Saikia, Digboi,India.

        bind() method is used to call a function with the this value. In Other words, bind() method allows us to easily set which objects will bound by the this keyword when a function or a method is invoked.


            let runner = {
                name : runner,
                run: function(speed){
                    console.log(this.name + "runs at "+ speed);
                }
            }

            let flyer = {
                name: flyer,
                fly: function(speed){
                    console.log(this.name+" fly at "+ speed);
                }
            }

            let run = runner.run.bind(flyer,20);
            run();

                We use call, apply and bind method when we want to couple a function with an object.



                Map() METHOD In AN Array:

                      --> Map() method creates an new array by calling a function for every array elements.
                      --> Map()  calls a function only once for each array elements.
                      --> Map() does not execute the function from empty Element.
                      --> Map() deos not change the original array.

                      Q. Return a new array with the square root of all element values.

                      const numbers = [4 , 9, 16, 25];
                      const sqrtNumber = numbers.map(Math.sqrt);
                      console.log(sqrtNumber);

                      Q. Multiply all the values in an array with 10.

                      const numb = [2,3,4,5,6,7];
                      const newNumber = numb.map((numb) =>{
                          return numb*10;
                        });
                       console.log(newNumber);


                filter() Method in an Array:

                      --> filter() method creates an new array filled with array elements that passes a test provided by a function.
                      --> filter() method does not execute on empty elements.
                      --> filter() method does not change the original array.
                    

                      Return an array of all values in ages[] that are 18 or over:


                      const ages = [12,33,40];
                      const result = ages.filter(checkAdults)

                      function checkAdults(age){
                          return age >=18;
/                      }

                      console.log(result);

                Reduce() Method in an Array:

                      --> reduce() method runs a function on each array elements to produce a single value.

                      Q. Find out the sum of an array.

                      const arr = [2,4,6,8,10];
                      const output = arr.reduce(function(acc,curr){
                          acc += curr;
                          return acc;
                      }, 0);
                      console.log(output);

                      Q. Find out the Maximum in an array.

                      const array = [1,2,3,4,5];
                      const output = array.reduce(function(acc,curr){
                          if(curr>acc){
                              acc = curr;
                          }
                          retrun acc;
                      }, 0);
                      console.log(output);


                      EVENT LOOP IN JavaScript -->
                                The event loop is something that pulls the stuffs out of the queue and place it on to the function execution stack whenever the function stack is empty.
                      EVENT PROPGATION -->
                                Event propagation is a mechansim that defines how a event propagates or travel through the DOM tree to arrive at its target and what happens at it afterward. There are 3 phases of event propagation.
                                1. Capturing phase: The event goes down to the element.
                                2. Target phase: The event reached the targeted element.
                                3. Bubble phase: The event bubbles up from the element.

                      EVENT BUBBLING-->
                                Event bubbling is a method of event propagation in HTML DOM , when an event is in an element inside another element and both have registered a handle to that event.
                                Event bubbling means the propagation of events from child element to the anchestor element in the DOM.

                      EVENT CAPTURING-->
                                Event capturing is also a method of event propagation in HTML DOM, it is completely opposite of event bubbling. Event capturing means propagation of event from the outer most element to the target element in the HTML DOM. 
                                
                      DEBOUNCING IN JavaScript-->
                                A debounce function makes sure that our code is triggered once per user input. Search field suggesstions, text field auto save, eliminating double button clicking are all use cases of debouncing.
                                Debounce calls a function when an user has not carried out an event in the specific amount of time.

                      THROTTLING IN JavaScript-->
                                Throttling calls a function when an user is carrying out an event at interval of a specified amount of time.
                      
                      CURRYING IN JavaScript-->
                                Currying is a technique in functional programming that transform function of multiple arguments into a several function of a single arguments in sequence.

                                function calculateVolume(length, breadth, height){
                                    return length*breadth*height;

                                }
                                console.log(calculateVolume(4,5,6));

                                But using Currying,

                                function calculateVolume(length){
                                    return function(breadth){
                                        return function(height){
                                            return length*breadth*height;
                                        }
                                    }
                                }

                                console.log(calculateVolume(4)(5)(6));

                        NULL V/S UN-DEFINED V/S DEFINED-->

                        In JavaScript, the null represents the intentional absence of any object value. null is a special value that represents an empty or unknown value. Null is an object with a valid value.

                        In javascript, the undefined property indicates that a variable has not been assigned a value, or not declared at all.

                        The defined property indicates that a variable has been assigned a value.

                        DIFFERENCE BETWEEN var, let AND const KEYWORDS-->

                        1. The scope of the var variable is functional scope.
                           The scope of the let variable is block scope.
                           The scope of the const variable is block scope.

                        2. var and let can be declared without initialisation but const can not declared without initialisation.

                        3. var can be updated and re-declared in to the scope.
                           let can be updated but can not be re-declared into the scope.
                           const can not be updated or re-declared into the scope.

                        4. var can be accessed without initialisation as its default value is "undefined".
                           let can not be accessed without the initialisation as it returns an error.
                           const can not be accessed without the initialisation as it can not be declared without the initialisation.

                        
                        WEAKMAP IN JavaScript-->
                               WeakMap is a Data Structure that allow us to store a collection of key-value pairs. The key can not be of primitive data types. The key must be of object type and the value can be of any data type.

                               const m = new WeakMap();

                               obj1 = {}
                               m.set(obj1, "Object-1");
                               obj2 = {}
                               m.set(obj2, "Object-2");

                               m.delete(obj2);

                               console.log(m); //Output
                               console.log(m.get(obj1));  // Output: Object-1
                               console.log(m.has(obj1));  // true

                        WeakSet IN JavaScript-->
                               WeakSet is used to store collection of objects. It is a collection of objects and not the value of some particular data type.

                               var weakSetObject = new WeakSet();
                               var object1 = {}
                               var object2 = {}

                               weakSetObject.add(object1);
                               weakSetObject.add(object2);  // Both object1 and object2 is added.

                               console.log("WeakSet has Object2: " + weakSetObject.has(object2));
                               // Output: weakSet has Object2: true

                               weakSetObject.delete(object2);
                               console.log("WeakSet has Object2: "+ weakSetObject.has(object2));
                               //Output: WeakSet Has object2: false.


                            WHAT IS IIFE?
                               IIFE(Immediatley Invoked Function Expression) is a way to execute the function Immediatley, as soon as they are created. IIFE is a good way to secure the scope.
                               The common advantage of using IIFE is that any variable or function defined inside IIFE block can not be accessed outside the IIFE Block. Thus, it prevents the global scope from getting polluted.



                            WHAT IS LOCAL STORAGE IN JavaScript-->

                                localStorage is a property that allows javascript sites and app to save the key-value pairs in a web browser with no expiration date that means the data stored in the web browser will saved even after the browser window is closed.

                            WHAT IS SESSION STORAGE-->

                                sessionStorage is a property that allows to store key value pairs only for a session that means the data stored in the sessionStorage will be deleted when the browser window will be closed.

                            DIFFERENT ARRAY LOOPING METHOD--->

                            1.for loop-->
                            
                               let myArray = [
                                   {id:1, name: "Chiranjeeb", age:24 },
                                   {id:2, name: " Ananya", age:24},
                                   {id:3, name: "Tiku", age:17}
                               ];

                               for(let i=0; i<myArray.length;i++){
                                   console.log(myArray[i].name);
                                }
                                 
                                //OUTPUT:    Chiranjeeb
                                             Ananya

                            2. for/of loop-->

                                let myArray2 = [
                                    {id:1, name: "John", age:20},
                                    {id:2, name: "Martin", age:23},
                                ];

                                for(let user of myArray2){
                                    console.log(profile.name);
                                }


        DIFFERENT ARRAY METHODS:

        1. concat() =>    this method concatenates or joined two or more arrays returning a new array. 

        const Name1 = ["Cecilie", "Lone"];
        const Name2 = ["Emil", "Tobias", "Linus"];          //JOINING TWO ARRAYS
        const newName = Name1.concat(Name2);                  
        console.log(newName);                                

        const Name1 = ["Cecilie", "Lone"];
        const Name2 = ["Emil", "Tobias", "Linus"]; 
        const Name3 = ["Chiranjeeb", "Ananya"];             //JOINING THREE ARRAYS

        const newName = Name1.concat(Name2, Name3);
        console.log(newName);


        2. Array.from() ===> This method returns an array from any iterable object. 
           

        const text = "CHIRANJEEB";
        const myArray = Array.from(text);            //OUTPUT => C,H,I,R,A,N,J,E,E,B
        console.log(myArray);

        3. indexOf() ==> This method returns the first index of the specified value.

        const fruits = ["banana", "orange", "apple", "Mango", "apple"];
        let index = fruits.indexOf("apple");
        console.log(index);      //OUTPUT: 2

        If we include the postion of searching start. 

        const fruits = ["banana", "orange", "apple", "Mango", "apple"];
        console.log("Index is: " + fruits.indexOf("apple",3));

        //OUTPUT: Index is: 4 . It will search for the value from index 3 i.e. Mango

        console.log(fruits.indexOf("apple",2));                         //OUTPUT: 2.

        4. lastIndexOf() ==> This method returns the last index of the specified value. It will search from the right to left . 
        

        CASE--1 :


        const fruits = ["Apple", "Orange", "Apple", "Mango"];
        console.log(fruits.lastIndexOf("Apple"));                       //Output: 2.

        CASE--2: When searching starts at a given index.
        
        const fruits = ["Banana", "Apple", "Orange", "Apple", "Mango"];
        console.log(fruits.lastIndexOf("Apple",4 ));                   //Output: 3
        console.log(fruits.lastIndexOf("Apple",3 ));                   //Output: 3

        CASE--3: When the value or the search index is negative. 

        const fruits = ["Banana", "Apple", "Orange", "Apple", "Mango"];
        console.log(fruits.lastIndexOf("Apple",-2));                   //Output: 3.

        5. join() method: This method returns an array as a String. 

        const users = ["Martin", "Alan", "Chris"];
        const output = users.join("and");
        console.log(output);                               //output: Martin and Alan and Chris

        6. shift() method: This method removes the first element of the array. It changes the original array. 
        
          const fruits =["Banana", "Orange", "Apple", "Grapes"];
          fruits.shift();
          console.log(fruits);      //OUTPUT: Orange, Apple, Grapes

          Also returns the shifted element. 

          const fruits =["Banana", "Orange", "Apple", "Grapes"];
          console.log(fruits.shift());           //OUTPUT: Banana.


        7. unshift() method: This method adds a new element at the beginning of the array. It overwrites the original array. 

           const fruits = ["Banana", "Orange", "Apple"];
           fruits.unshift("Mango", "Grapes");
           console.log(fruits);                //Output: Mango, Grapes, Banana, Orange, Apple

        8. slice() method: This method returns selected array element as an new array. 
                        Syntax: array.slice(start, end);

                        start ==> INCLUDED
                        end ==> NOT INCLUDED
                
                        const fruits = ["Banana", "Apple", "Orange", "Mango", "Grapes"];
                        const myBest = fruits.slice(1,4);
                        console.log(myBest);

                        //OUTPUT: Apple, Orange, Mango

                        const fruits = ["Banana", "Apple", "Orange", "Mango", "Grapes"];
                        const myBest = fruits.slice(-3,-1);
                        console.log(myBest);    
                        
                        //OUTPUT: Orange, Mango

        9. splice() method: This method adds and/ or remove array elements.

                        Syntax: array.splice(index, howmany, "items1", "item2",......);

                        const fruits = ["Banana","Apple", "Orange"];
                        fruits.splice(2,0,"Lemon","Mango");
                        console.log(fruits);

                        //OUTPUT: Banana, Apple, Orange, Lemon, Mango

                        const fruits = ["Banana", "Apple", "Orange"];
                        fruits.splice(1,2,"Lemon","Mango");
                        console.log(fruits);

                        //OUTPUT: Banana, Lemon, Mango

            HTML Document Object Model 
            1. querySelector(): querySelector() returns the first element that matches the CSS element selectors. 
               Example: 
                       
                       1. Get the first <p> element and add background color .

                       <p>This is the first element.</p>
                       <p>This is the second element.</p>

                       <script>
                           document.querySelector("p").style.backgroundColor =  "red";
                       </script>

                        2. Add back ground color to the first element with the class "example". 

                        <p class="example">This is the FIRST.</p>
                        <p class="example">This is the SECOND.</p>

                        <script>
                        document.querySelector(".example").style.backgroundColor = "red";
                        </script>

                        3. Change the text of the element with id ="demo". 
                        
                        <p id="demo"> This is the p element.</p>
                        <script>
                          document.querySelector("#demo").innerHTML = "Hello World!";

                        </script>


                        4. Select the first <p> element with the parent is a <div> element.

                        <div>
                        <p>This is the Paragraph Element.</p>
                        </div> 
                        <button onclick="myFunction()">Click</button>

                        <script>
                        function myFunction(){
                        document.querySelector("div > p").style.backgroundColor = "red";
                        }
                        </script>

                        5. Add a red border to the first link with a target attribute:

                        <p>Add a red border to the first link with a target attribute:</p>

                          <a href="https://www.w3schools.com">w3schools.com</a> 
                          <a href="http://www.disney.com" target="_blank">disney.com</a>
                          <a href="http://www.wikipedia.org" target="_top">wikipedia.org</a>

                          <script>
                           document.querySelector("a[target]").style.border = "10px solid red";
                          </script>

            2. querySelectorAll() method: querySelectorAll returns all the element that matches the CSS element selector. 
                                  It returns a NodeList. 

                                  1. Select all the element with the class "example". 

                                  <h1 class="example"> This is the Heading Element. </h1>
                                  <p class="example">This is the Paragraph Element.</p>

                                  <script> 
                                   const nodeList = document.querySelectorAll(".example");
                                   for(let i=0;i<NodeList.length;i++){
                                       nodeList[i].style.backgroundColor = "red";
                                   }

                                  </script>

                                  2. Add a background color to the first p element with class="example".v 

                                  <h2 class="example">A heading</h2>
                                  <p class="example">A paragraph.</p> 
                                  <p class="example">A paragraph.</p> 

                                   <script>
                                       const nodeList = document.querySelectorAll("p.example");
                                       nodeList[0].style.backgroundColor = "red";
                                   </script>


                                 3. Number of the element with the calss "example". 

                                 <h2 class="example">A heading</h2>
                                  <p class="example">A paragraph.</p> 
                                  <p class="example">A paragraph.</p>
                                  
                                  <p id="demo"></p>

                                  <script>
                                  const numb = document.querySelectorAll(".example");
                                  document.getElementById("demo").innerHTML = numb.length;
                                  </script>
 

                HOW TO PREVENT EVENT PROPAGATION IN JavaScript. 


                   <div id="box">
                   <button class="btn">Register</button>
                   </div>

                   <script>
                   const box = document.querySelectorAll("#box");
                   const btn = documnet.querySelectorAll(".btn");

                   btn.addEventListener("click", function(e){
                       alert("The button was clicked.");
                   });

                   box.addEventListener("click", function(e){
                       alert('The box was clicked.');
                   });

                   After clicking the button, There will be two alert boxes.
                   To prevent the click event from propagating to <div> element, you call the stopPropagation() method in the event handler of the button:

                   box.addEventListener("click", function(e){
                       alert('The box was clicked');
                       e.stopPropagation();
                   });



                   </script>

































































































        


















      


















                        































