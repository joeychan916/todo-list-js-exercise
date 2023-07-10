// Step 1: Introduce Task Object

// Create a new task object with title and description properties
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    // Method to print the task state
    logTaskState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    // Method to mark the task as completed
    markCompleted: function() {
      this.complete = true;
    }
  };

  return task;
}

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logTaskState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logTaskState(); // Clean Cat Litter has been completed

console.log(tasks);

// Step 2: Refactor Functions

// Instead of passing taskIndex, pass task object as a parameter
function logTaskState(task) {
  console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
}

// Instead of passing taskIndex, pass task object as a parameter
function completeTask(task) {
  task.complete = true;
}

// DRIVER CODE BELOW

logTaskState(task1); // Clean Cat Litter has not been completed
completeTask(task1);
logTaskState(task1); // Clean Cat Litter has been completed

console.log(tasks);

// Step 3: Use Methods Instead

// Use task object methods instead of separate functions
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logTaskState() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted() {
      this.complete = true;
    }
  };

  return task;
}

// DRIVER CODE BELOW

task1.logTaskState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logTaskState(); // Clean Cat Litter has been completed

console.log(tasks);

