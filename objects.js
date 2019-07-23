
// Exercise 1

var mom = { 
    firstName: 'Alice', 
    lastName: 'Wong', 
    eyeColor: 'brown', 
    hairColor: 'black',
}; 

var daughter = { 
    firstName: 'Ilene', 
    hairColor: 'brown' ,
    
 
};


daughter.__proto__= mom;
console.log(daughter.firstName, daughter.lastName, daughter.eyeColor, daughter.hairColor);
console.log('First Name: '+ daughter.firstName, daughter.lastName, daughter.eyeColor, daughter.hairColor);

// **********************
// Exercise 2
// **********************

var mom = { 
    firstName: 'Alice', 
    lastName: 'Wong', 
    eyeColor: 'brown', 
    hairColor: 'black',
    showInfo: function(){
console.log('First Name: ' + this.firstName, 'Last Name: ' +this.lastName, this.eyeColor, this.hairColor);
 }
};

var daughter = { 
    firstName: 'Ilene', 
    hairColor: 'brown' ,
};


daughter.__proto__= mom;
// console.log(daughter.__proto__);

mom.showInfo()

daughter.showInfo()









// **********
// Exercise 3
// *********


class Person{ 
    constructor (name){
      this.name = name;
      this.friends = []; 
    }
      addFriend(friend) { 
      this.friends.push(friend); 
  }; 
      createGreeting(other){ 
       return 'Yo ' + other.name + '! from ' + this.name + '.'; 
  };
  
      greet(other) {
       console.log(this.createGreeting(other)); 
  };
      lazyGreet(other){
        setTimeout(() =>{ console.log('Yo ' + other.name + '! from ' + this.name + '.'); }, 2000);      
            
    };
  
    createGreetingsForFriends(){
         return this.friends.map(friend => this.createGreeting(friend));
    }
//       
};


// Person1 = new Person ("A")
// Person2 = new Person('F')

// Person1.greet(Person2 );
// Person1.lazyGreet(Person2);
// Person1.addFriend(Person2);
// console.log(Person1.createGreetingsForFriends(Person2));


var alfie = new Person('Alfie'); 
var anushka = new Person('Anushka'); 
var henrique = new Person('Henrique'); 
alfie.addFriend(anushka); 
alfie.addFriend(henrique); 

console.log(alfie.createGreetingsForFriends()); 


