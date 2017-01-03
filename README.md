![cf](https://i.imgur.com/7v5ASc8.png) lab-15-ds-algos
======
# Data Structures & Algorithms

### Linked Lists

[Data Structures: Linked Lists](https://en.wikipedia.org/wiki/Linked_list)

## To Submit this Assignment
  * fork this repository
  * write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
  * push to your repository
  * submit a pull request to this repository
  * submit a link to your PR in canvas
  * write a question and observation on canvas

# Include
* gitignore
* eslint
* package.json
* gulpfile
* readme
 * Write a paragraph about your project
 * Document your methods (format them using markdown for clean readability!)
 * Write docs on your implementation and document your Big-O
* tests
  * use chai's expect and should where applicable
  * ensure that all of your codes has test coverage

## Directions
*You should have the Insertion and Removal methods complete for a Singly and Doubly Linked List*
* Add a new Method to your **Doubly** Linked List called `reverse()`, which takes no arguments.
  * Using only the pointer to the head node of the list, reverse the order of nodes in the list.
  * The head node may be empty, indicating an empty list, which you should handle appropriately.
  * This method will change the next and prev pointers of all nodes so that the direction of the list is reversed.
  * Finally, return the head node of the newly reversed list.

* Write clean test coverage for your data structures, and reverse method for the d-linked list
  * ensure that you've covered any edge cases and tested thoroughly
  * write at least three tests for each method
