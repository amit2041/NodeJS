import events from "events";

class FitnessTracker extends events.EventEmitter {
  constructor() {
    super();
    this.progress = 0;
    this.goal = 1000;
  }

  addExercise(exercise) {
    // Write code to update the progress and emit a 'goalReached' event when the goal is reached
    this.progress += exercise.caloriesBurned;
    console.log(`Added exercise: ${exercise.name}, Calories burned: ${exercise.caloriesBurned}, Total progress: ${this.progress}`);
    
    if (this.progress >= this.goal) {
      this.emit('goalReached');
    }
  }
}

const Solution = () => {
  // define  listener that sends a congratulatory message to the user upon reaching their fitness goal
  const tracker = new FitnessTracker();

  function sendCongratulatoryMessage() {
    console.log("Congratulations! You have reached your fitness goal");
  }

  // Define listener for the 'goalReached' event
  tracker.on('goalReached', sendCongratulatoryMessage);
  // simulate adding exercise
  tracker.addExercise({ name: "Running", caloriesBurned: 500 });
  tracker.addExercise({ name: "Weightlifting", caloriesBurned: 600 });
};

Solution();

export { FitnessTracker, Solution };
