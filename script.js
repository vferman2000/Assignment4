//1.    Create a namespace called Animal. Then, define two sub classes from the namespace, one called Cat and another called Dog. 
/*
var Animal = Animal || {};
"use strict";
function cat() {}
function dog() {}
*/



//2.    Abandon the use of namespaces and start over. Now, create two classes, one called Cat and another called Dog. The Cat class should be created using literal notation and the Dog class should be created using constructor notation.
/*
var Cat = {};
function Dog() {}
*/

//3.    Directly underneath, create a new instance of the Dog class.
/*
var Cat = {};
function Dog() {}
var Lazzy = new Dog();
*/

//4.    Start over and now create a new class using constructor notation called Animal. When a new instance of the Animal class is created, the message “The Animal has been created” should be displayed in the console window.
/*
function Animal() {
    "use strict";
    window.console.log("The Animal has been created!");
}
var Lazzy = new Animal();
*/

//5.    Now, change the above code so that it accepts a parameter and that value is what should be displayed in the console window. The message should be passed as an argument into the constructor at the moment that the Animal class is instantiated.

/*
function Animal(name) {
    "use strict";
    this._name = name;
    window.console.log(this._name);
}

var brownDog = new Animal("Lazzy");
*/

//6.    Start over and now create a new class using constructor notation called Animal. Define five properties within your class including type, breed, color, height, and length. These properties will be set in the constructor so you’ll need to pass in parameters into the function’s constructor, set the properties, and then pass in the actual arguments during the object’s instantiation. 
/*

function Animal(type, breed, color, height, lenght) {
    "use strict";
    this._type = type;
    this._breed = breed;
    this._color = color;
    this._height = height;
    this._lenght = lenght;
    
    window.console.log(this._type + this._breed + this._color + this._height + this._lenght);
}

var brownDog = new Animal("German, ", "Pure, ", "Brown, ", "tall, ", "long, ");

*/

//7.    Use a for-in loop to loop through and display all of the properties in the Animal class. You should see a total of 5 properties displayed in a list within the console window.

/*

function Animal(type, breed, color, height, lenght) {
    "use strict";
    this._type = type;
    this._breed = breed;
    this._color = color;
    this._height = height;
    this._lenght = lenght;
}
        

var brownDog = new Animal();
for (var i in brownDog){
		console.log(i);}

	
*/


//8.    Now, create a public method called speak. Within the speak method you will use a conditional to check the type of Animal being created. If it’s a dog, return “The <color> dog is barking!” If it’s a cat return “The <color> cat is meowing!” instead. Call that method after the Animal class has been instantiated.

/*

function Animal(type) {
	"use strict";
	this._type = type;

	Animal.speak = function () {
		if (type === "dog") {
			window.console.log("the brown dog is barking!");
		} else if (type === "cat") {
			window.console.log("the white cat is meowing!");
		}
	}
}

var myPet = new Animal("dog");
//var myPet = new Animal("cat");
Animal.speak();

*/

//9.    Now, convert all of your properties to private properties. Then, create a private method called checkType(). In this method you will check to see what the type is. If it’s dog, return dog, otherwise, return cat. Then, create a public method called speak that returns the value of the checkType() method. The console window should now display “The <animal type> has made a noise!”

/*

var Animal = function (type) {
	"use strict";
	var _type = type;

	var checkType = function () {
		if (type === "dog") {
			return "dog";
		} else if (type === "cat") {
			return "cat";
		}
	};
	
	Animal.Speak = function () {
		window.console.log("The " + checkType() + " has made a noise");
	}

};

var myPet = new Animal("cat");
Animal.Speak();

*/

//10.    Create your own String method called findWords() that inherits from the native String Object. This method should find all instances of a specific word within a provided paragraph of text. It should then alert out to the user the number of times that word was found in the paragraph.

/*
var findWords = function (string,char){
	var re = new RegExp(char,"gi");
    return str.match(re).length; 
 }
	var str = "Cats and dogs are inheritly the same.  They have four legs, one head, two eyes, one nose, one mouth, one tail and two ears.  They come in different colors and sizes but they are after all, pets.";
	
	alert(findWords(str,'one'));
	
*/


//The Recipe Card (15 points)	
//Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings). Your object should have a publically available method that when called, will log out the recipe within the console so that the recipe information looks like this:

/*
function Recipe(title, servings, ingredients) {
	"use strict";
	this._title = title;
	this._servings = servings;
	this._ingredients = ingredients;
		
	Recipe.prototype.display = function () {
		window.console.log(title + "\n" + "Serves: " + servings + "\n"  + "Ingredients: " + "\n" + ingredients);
		
	}
}
var myRecipe = new Recipe("Guacamole", 4, ["- 3 Avocados" + "\n" + "- 1 Lime" + "- 1 Teaspoon Salt" + "\n" + "- 1/2 Cup Onion" + "\n" + "- 3 Tablespoons Cilantro" + "\n" + "- 2 Diced Tomatoes" + "\n" + "- 1 Teaspoon Garlic" + "\n" + "- 1 Pinch Ground Pepper"]);
myRecipe.display();

*/

//The Reading List (15 points)
//Keep track of which books you read and which books you want to read! Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet). Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien". Then, use a conditional to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.' Make sure your object contains at least 5 books.




var books = [
  				{title:	'Blasphemy',
   				author:	'Laura Paulsinsky',
   				alreadyRead: false
  				},
  				{title: 'Death by Chocolate',
  				author: 'Richard Moore',
  				alreadyRead: true
  				},
				{title: 'Love at first sight',
  				author: 'Carol Smith',
  				alreadyRead: false
				},
				{title: 'Insight',
  				author: 'Nikito Ohno',
  				alreadyRead: true
				},
				{title: 'Narcissist',
  				author: 'Mario Lars',
  				alreadyRead: true
				}
];

				 for (var i = 0; i < books.length; i++) {
  				 var book = books[i];
  				 var bookCollection = book.title + " by " + book.author;
				 console.log(bookCollection);
  				if (book.alreadyRead) {
				 console.log('You already read "' + bookCollection);
  				} else {
				console.log('You still need to read "' + bookCollection);
  }
}

	
