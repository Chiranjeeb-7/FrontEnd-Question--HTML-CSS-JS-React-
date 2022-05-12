JavaScript CODING QUESTIONS:

1. Print the firstName and lastName of the given array:

           
           [
               {firstName: "Chiranjeeb", lastName:"Saikia", age:24},
               {firstName: "Ananya", lastName:"Mahanta", age: 24},
               {firstName:"Monikornika", lastName:"Dutta", age:25}
           ]


const users = [
               {firstName: "Chiranjeeb", lastName:"Saikia", age:24},
               {firstName: "Ananya", lastName:"Mahanta", age: 24},
               {firstName:"Monikornika", lastName:"Dutta", age:125}
]

const output = users.map((x)=> x.firstName + x.lastName);
console.log(output);


2. Print the firstName and lastName whose age is less than 25 of the given array. //IMPORTANT

const usersDetails = [
    {firstName:"Chiranjeeb", lastName:"Saikia", age:24},
    {firstName: "Ananya", lastName:"Saikia", age:24},
    {firstName:"Moni", lastName:"Dutta", age:125}
];

const output2 = usersDetails.filter((x)=>x.age<25);
console.log(output2);

3. Print Only the firstName of the given array whose age is less than 25. //IMPORTANT

const usersDetails2 = [
    {firstName:"Chiranjeeb", lastName:"Saikia", age:24},
    {firstName: "Ananya", lastName:"Saikia", age:24},
    {firstName:"Moni", lastName:"Dutta", age:25}
];

const output3 = usersDetails2.filter((x)=>x.age<25).map((x)=>x.firstName);
console.log(output3);


4. REMOVE DUPLICATE FROM THE Array. 

FIRST WAY==>


const arr = [10,5,20,10,6,5,8,5,20];
const uniqueArr = [...new Set(arr)];
console.log(uniqueArr); //   OUTPUT=> [10,5,20,6,8]

SECOND WAY==>

const arr2 = [1,2,3,4,1,2];
const b =[];

for(let i=0;i<arr2.length;i++){
    if(b.indexOf(arr2[i]== -1)){
        b.push(arr2[i]);
    }
}
console.log("Removed Array Elements: " + b);

THRD WAY===>

const array3 = [1,2,3,4,2,1];
const c=[];

array3.filter((dup)=>{
    if(c.indexOf(arr[dup]==-1)){
        c.push(arr[dup]);
    }
});

console.log(c);



5. WRite A PROGRAM FOR THE FOLLOWING OUTPUT USING CURRYING. 

             console.log("Output with normal function", mul(2)(3)(4));


             function mul(a){
                 return function (b){
                    return function (c){
                        return a*b*c;
                    };                
                 };
             };

             console.log(mul(2)(3)(4));

             USING ARROW FUNCTION:


             const multi = (a) =>{
                 return (b) => {
                     return (c) => {
                         return a*b*c;
                     };

                 };
             };

             console.log(multi(2)(3)(4));


6. WRITE A PROGRAM TO MULTIPLY TWO NUMBERS WITHOUT USING THE MULTIPLY SIGN IN JavaScript. 

function multiply(num1,num2){

    let answer = num1;
    for(let i = 0; i < num2-1; i++){
        answer += num1;
    }
    return answer;

}
console.log(multiply(5,3));





7. REVERSING AN ARRAY IN DIFFERENT WAY---->


=====> Using array.reverse() METHOD:


const myArr = [1,2,3,4];
myArr.reverse();
console.log(myArr);   //OUTPUT: [4,3,2,1]


=====> Using decrementing for loop:


const myarr2 = [1,2,3,4];
const newArr = [];
for(let i = myarr2.length - 1; i>=0;i--){
    newArr.push(myarr2[i]);
}
console.log(newArr);


======> USING unshift() Method:


const array1 = [1,2,3,4];
const newArray = [];
array1.forEach(element => {
    newArray.unshift(element);
});

console.log(newArray);


=======> IMPORTANT   Without using the new array


const arr = [1,2,3,4,5];
for(let i=0; i < Math.floor(arr.length/2); i++){
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length-1-i],arr[i]];
}

console.log(arr);
























