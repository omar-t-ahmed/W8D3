class Clock {
  constructor() {
    // 1. Create a Date object.
    let date = new Date();
    // 2. Store the hours, minutes, and seconds.
    this.hour = date.getHours();
    this.minute = date.getMinutes();
    this.second = date.getSeconds();
    // 3. Call printTime.
    this.printTime();
    // 4. Schedule the tick at 1 second intervals.
    setInterval(this._tick.bind(this), 1000);
  }
  printTime() {
    // Format the time in HH:MM:SS

    // Use console.log to print it.
    console.log(`${this.hour}:${this.minute}:${this.second}`);
  }
  _tick() {
    // 1. Increment the time by one second.
    this.second++;

    if (this.second === 60) {
      this.second = 0
      this.minute++
    };

    if (this.minute === 60) {
      this.minute = 0
      this.hour++
    };

    // 2. Call printTime.
    this.printTime();
  }
}

// const clock = new Clock();

/////////////////////////////////////


const readline = require("readline");
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
    if (numsLeft <= 0) {
        reader.close();
        return completionCallback(sum);
    } 
    
    reader.question('What number would you like to add?', function(num) {
        sum += parseInt(num)
        console.log(`your new sum is ${sum}`)

        numsLeft--
        addNumbers(sum, numsLeft, completionCallback)
    }
)}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));