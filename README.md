# Pomodoro Timer (25 + 5 Clock)

This is a simple Pomodoro Timer app implemented using React, which allows users to set a session length and a break length. The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. It uses a timer to break work into intervals, traditionally 25 minutes in length, separated by short breaks.

## Installation

1. To run the Pomodoro Timer locally, follow these steps:
1. Clone the repository or download the source code.
1. Open a terminal and navigate to the project directory.
1. Install the dependencies by running the command: npm install
1. Start the development server with the command: npm start
1. Open your web browser and visit http://localhost:3000 to see the application running.

## Features

- Set the session length: The user can set the duration of the work session (session length) using the "Session Length" buttons.
- Set the break length: The user can set the duration of the break period (break length) using the "Break Length" buttons.
- Timer Display: The app displays a countdown timer that shows the remaining time for the current session or break.
- Start/Stop: The user can start or stop the timer by clicking on the "Play" (when paused) or "Pause" (when running) button.
- Reset: The user can reset the timer and session/break lengths to their initial values by clicking on the "Reset" button.
- Audio Alert: When the timer reaches zero, an audio alert will play to signal the end of a session or break.

## About the Code

The Pomodoro Timer is built using React and the way that the countdown logic works is a setInterval() method that calculates the drifted milliseconds that normally comes with the setInterval() method itself. It uses the interval value minus the previous drift value. So the drifting could be avoided. Special thanks to Bergi (https://stackoverflow.com/users/1048572/bergi) from stackoverflow, who posted the interval drift solution in https://stackoverflow.com/questions/29971898/how-to-create-an-accurate-timer-in-javascript. The method used in this code is inspired by him/her.

## Contributing

If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request. Your contributions are welcome!