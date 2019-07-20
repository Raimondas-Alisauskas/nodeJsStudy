// Print "Hello World"
// Every second
// And stop after 5 times

// After 5 times. Print "Done" and let Node exit.

let i = 1;
const task = () => {
    console.log("Hello World");
    i += 1;

    if (i > 5){
        clearTimeout(taskAtInterval);
        console.log("Done");
    }
}

let taskAtInterval = setInterval (task, 1000)