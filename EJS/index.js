import express from "express";

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req,res) => {
  const today = new Date();

  const dayNumber = today.getDay();
  
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayName = days[dayNumber];

  let message;

  switch (dayName) {
    case "Monday":
      message = "Fresh start. Set the tone for the week.";
      break;
    case "Tuesday":
      message = "Build momentum. Don't slow down.";
      break;
    case "Wednesday":
      message = "Halfway there. Keep pushing.";
      break;
    case "Thursday":
      message = "Almost the finish line. Stay sharp.";
      break;
    case "Friday":
      message = "Finish strong. You earned the rest.";
      break;
    case "Saturday":
      message = "Rest, recharge, and enjoy yourself.";
      break;
    case "Sunday":
      message = "Reflect, reset, and plan ahead.";
      break;
    default:
      message = "Have a great day!";
  }

  res.render("index", {
    day: dayName,
    advice: message,
  });
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}.`);
});