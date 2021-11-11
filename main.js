// console.log('hello world');

// // string, Numbers, Boolean, null, undefined


// const name = 'chandra'
// const x = 2
// const age = 40.5

// const isCoool = false

// const z = null;

// let a;


// // concatenation

// console.log('My name is ' + name + ' and I am ' + age + ' years old') 

// // Templat String

// const hello = `My name is ${name} and I am ${age} years old`

// console.log(hello)

// const s = 'Hello World'

// console.log(s.length)

// console.log(s.toUpperCase().substring(0,7).length)

// console.log(s.split('  '))


// // Arrays 

// const numbers = new Array(1,2,3,4,5)

// const fruits = ['apples', 'oranges', 'pears', 52, 4.5]

// console.log(fruits[4])



// fruits.push('papaya')

// console.log(fruits)

// fruits.unshift('strawberries')


// //  object literals ~ dictionaries

// const person = {
//     firstname: 'Chandraskhar',
//     Lastname: 'pulamarasetti',
//     age: 25,
//     address: {
//         street: '2-75',
//         village: 'chintalagraharam',
//         city: 'vskp',
//         pincode: 530047
//     },
//     hobbies: ['music', 'movies', 'sports'],

// }

// console.log(person.address.village)


// // For

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// // while
// let i = 0
// while(i < 10) {
//     console.log('while loop number: ' + i)
//     i++
// }


// // forEach, map, filter
// todos = [
//     {
//         id:1,
//         text: 'boss',
//         isCompltd : false
//     },
//     {
//         id:2,
//         text: 'worker',
//         isCompltd : true
//     },
//     {
//         id:3,
//         text: 'agent',
//         isCompltd : false
//     }
// ]


// for (let i=0; i <todos.length; i++) {
//     console.log(todos[i].isCompltd)
// }

// for (let abc of todos) {
//     console.log(abc.id)
// }

// // forach, map, filter

// todos.forEach(function(todo) {
//         console.log(todo.text)
// })


// const todoText = todos.map(function(todo){
//     return todo.text
// })

// const todoCompltd = todos.filter(function(todo){
//     return todo.isCompltd === false
// }).map(function(todo){
//     return todo.text
// })

// console.log(todoCompltd)


// // Conditionals

// const xx = 20;

// if (xx === 30){
//     console.log('x is 30')
// } else {
//     console.log('x is not 30')
// }

// // ternary operator

// const x_ = 125;

// const colour = x_>10 ? 'red' : 'blue';



// // switch

// switch(colour){
//     case 'red':
//         console.log('Colour is red');
//         break;
//     case 'blue':
//         console.log('Colour is blue');
//         break;
//     default:
//         console.log('Colour is not red or blue');
//         break;
// }

// // function

// function addNums(num1, num2) {
//     return num1 + num2
// }

// console.log(addNums(5,25))


// // OOPS
// // constructor function
// function Person_1(firstname, lastname, dob) 
// {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.dob =  new Date(dob);
//     this.getBirthYear = function(){
//         return this.dob.getFullYear()
//     }
// }

// const person1 = new Person_1('chandra', 'sekhar', '08-05-1995');


// // class 

// class Person {
//     constructor(firstname, lastname, dob) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.dob = new Date(dob);
//     }

//     getBirthYear() {
//         return this.dob.getFullYear()
//     }

//     getFullname() {
//         return `${this.firstname} ${this.lastname}`
//     }
// }

// const person2 = new Person('chandra', 'sekhar', '03-16-1996')

// console.log(person2.getFullname())


 
// selectors 

// console.log(window)

// single element selector

// console.log(document.getElementById('my-form'))

// console.log(document.querySelector('my-form'))

// console.log(document.querySelector('.container'))

// console.log(document.querySelector('h1'))

// console.log(document.querySelectorAll('.item'))

// const items = document.querySelectorAll('.item')

// items.forEach((item) => console.log(item))

// multiple element selector


// const ul = document.querySelector('.items');

// ul.remove()

// ul.lastElementChild.textContent = 'hello'

// ul.children[0].innerHTML = '<h1>Chandra pulamarasetti</h1>'

// const btn = document.querySelector('.btn');



// btn. addEventListener('mouseout', (e) => {
//     e.preventDefault();
//     document.querySelector('.btn').innerHTML = 'Submitted'
//     document.querySelector('.btn').style.background = 'blue'
// });

const myform = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');


myform.addEventListener('submit', onSumbit);


function onSumbit(e) {
    e.preventDefault()
    if (nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error')
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);

    } else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`))

        userList.appendChild(li)

        // clear fields
        
        nameInput.value = '';
        emailInput.value = ''

    }

}




