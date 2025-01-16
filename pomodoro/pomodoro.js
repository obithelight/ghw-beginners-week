const isRunning = false; // tracks if timer is currently running
let timeLeft; // Remaining time in seconds
const workTime = 25; // tracks work duration in minutes
const breakTime = 5; // tracks break duration in minutes
const isWorkTime = true; // tracks if we are working or on break

const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");
const workTimeInput = document.getElementById("work-time");
const breakTimeInput = document.getElementById("break-time");
const statusDisplay = document.getElementById("status");
const progressBar = document.getElementById("progress");

// console.log({
//   minutesDisplay,
//   secondsDisplay,
//   startButton,
//   pauseButton,
//   resetButton,
//   workTimeInput,
//   breakTimeInput,
//   statusDisplay,
//   progressBar,
// });
