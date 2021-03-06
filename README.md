Instructions: How to install the repository
==========================================
First you will need to fork the repository to your Github and than clone it on your local computer. You can clone it using command :
* git clone https://github.com/AishaNaveed/Mars_Rover.git

After that install its dependencies using :
* npm install

To run the test file, run :
* npm test

Work on the Kata that moves a rover around on a grid:-
====================================================

* Rover will recieve 2 input strings.
* You are given the initial starting point (x,y) of a rover along with the direction (N,S,E,W) it is facing.
* The rover receives a string of movement commands (M,L,R).

[Flow chart to represent the outline of the starting of the program](./flowchart.pdf)

* Implemented commands that move the rover forward.
* Implemented commands that turn the rover left/right.
* Implemented obstacle detection before each move to a new square. If a given sequence of commands encounters an obstacle, function returns and gives error.
* Implemented boundry limit detection before each move to a new square. If a given sequence of commands encounters boundry line, function returns and gives error.
* Implemented multiple rovers movement at the same time, detecting for obstacles or boundry and return function output accordingly.

Future updates:-
==============
There are many other ways to improve implementation and test cases of the provided solution for Mars rover. We could possibly update as:
* Other rovers position randomaly generated using function.
* Refactoring the code for further clarity and simplification
* Area can be taken as input to make it more robost.
* On occurance of any obstacle, function will return the last position of moving rover along with the error. 
* We can define movement of multiple rovers, return their final location and can stop them on position conflict.
* Creating seperate modules to follow design pattern envoirnment.