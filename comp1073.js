// JavaScript Document

//add your object here 
const jess = {
  name: ['Jessica','Gilfillan'],
  age:34,
  interests: ['coffee', 'code', 'cats'],
  bio: function() {
    alert(this.name[0] + ' ' + this.name[1]  + ' is ' + this.age + ' years old. They like ' + this.interests[0] + ', ' + this.interests[1] +  ' and ' + this.interests[2] + '.');
  },
  greeting: function() {
    alert('Hi! I\'m ' + this.name[0] + this.age + '.');
  }
}


//add event listener function or event handler property here 

let button = document.getElementById('jess'); 
//button.addEventListener('click', jess.greeting); 

button.addEventListener('click', function(){
  jess.bio(); 
})

let twitchStreamer = {

    //properties
    name: {
        first: Zachary,
        last: Green
    },
    program: 'Computer Science',
    home: 'Innisfil',
    interest: 'gaming',

    greeting: function(){
        alert('Hi, I am' + ' ' + twitchStreamer.name.first);
    },

    display: function() {
        alert('Name: ' + ' ' + twitchStreamer.name.first + ', ' + twitchStreamer.name.last +
        ' | ' + 'Program: ' + twitchStreamer.program + ' | ' + 'Place I call home: ' + twitchStreamer.home +
        ' | ' + 'Interests: ' + twitchStreamer.gaming + '.');
    }



}

twitchStreamer.petPeeve = 'sniff uncontrollably';


delete twitchStreamer.name.last;

let buttonZPGreeny = document.getElementById("ZPGreeny");
buttonZPGreeny.addEventListener('click', function() {
    twitchStreamer.display();
})
