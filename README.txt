How to Run?

1-You must Have NPM and NodeJs installed
2-Run the command "npm install -g create-react-app" to innstall React framework
3-On the terminal go to the project directory
4-Run the "npm start" command
5-IF THE TERMINAL RETURNS AN ERROR RUN "npm install" THEN "npm start" again !!!!!!!!
6-Local host will run and the site will run automatically on your default browser,
   if not, just use the url localhost:3000.



Notes about the project functionality:	

1- The data used are found in a local JS file in /src/components/context

2- /src/components/context Here you can also find Context.js and Utility.js:

	Context.js: equivalent to a context api except here I used react hooks to use the context.

	Utility.js: Gets the state from context.js with useContext and then runs the diferrent functions such as adding items to the cart
		    Finally it exports all the different functions and all the state to the Components.

3- Using React hooks and the combination of context.js + Utility.js we avoid the long code and unexpected bugs of simple Context API (Provider/Consumer).

4- Quick notes about the Utility functions:

	getId: detects the id of an item and returns that item (Every item in the data.js has an id).

	descProvider: Updates dTemplate which is an object in the data.js file that acts as a
		      template for the item that is clicked on to then redirect to the correct Description page of that specific item.
	
	addToCart : Is used for both adding the quantity of an item in the cart page and adding an item to the cart.
		    
	removeFromCart: Is used to reduce the quantity of an item in the cart page.

	deleteFromCart: Is used to delete item entirely from the cart.


