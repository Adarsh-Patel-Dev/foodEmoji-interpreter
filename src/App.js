import "./styles.css";
import React, { useState } from "react";

const foodDictionary = {
  "🥜": "peanuts",

  "🌰": "chestnuts",

  "🍞": "bread",

  "🥐": "croissant",

  "🥖": "baguette-bread",

  "🥨": "pretzel",

  "🥞": "pancakes",

  "🧀": "cheese-wedge",

  "🍖": "meat-on-bone",

  "🍗": "poultry-leg",

  "🥩": "cut of meat",

  "🥓": "bacon",

  "🍔": "hamburger",

  "🍟": "fries",

  "🍕": "slice of pizza",

  "🌭": "hotdog",

  "🥪": "sandwich",

  "🌮": "taco",

  "🌯": "burrito",

  "🥙": "stuffed flatbread",

  "🥚": "egg",

  "🍳": "fried egg",

  "🥘": "shallow pan of food",

  "🍲": "stew",

  "🥗": "green salad",

  "🍿": "popcorn",

  "🍱": "bento",

  "🍘": "rice cracker",

  "🍙": "rice ball",

  "🍚": "cooked rice",

  "🍛": "curry",

  "🍜": "ramen",

  "🍝": "spaghetti",

  "🍠": "sweet potato",

  "🍢": "oden",

  "🍣": "sushi",

  "🍤": "fried shrimp",

  "🍥": "fish cake",

  "🍡": "dango",

  "🥟": "dumpling",

  "🥠": "fortune cookie",

  "🍦": "soft ice cream",

  "🍧": "shaved ice",

  "🍨": "ice cream",

  "🍩": "doughnut",

  "🍪": "cookie",

  "🎂": "birthday cake",

  "🍰": "shortcake",

  "🥧": "pie",

  "🍫": "chocolate bar",

  "🍬": "candy",

  "🍭": "lollipop"
};

var foodWeKnow = Object.keys(foodDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function foodInputhandler(event) {
    var userInput = event.target.value; // {/* //setting state in eventhandler */}

    var meaning = foodDictionary[userInput];

    //console.log(meaning);

    if (meaning === undefined) {
      meaning = "We don't have this food in our database!";
    }

    setMeaning(meaning); //react call to show o/p
  }
  function emojiClickHandler(emoji) {
    var meaning = foodDictionary[emoji];
    setMeaning(meaning); //react call to show o/p
    // console.log(emoji);
  }

  return (
    <div className="App">
      <h1>Foodoji</h1>
      <input
        placeholder="Enter food emoji here"
        onChange={foodInputhandler}
      ></input>
      {/* //interaction with "onChange"  */}
      <h2>
        <em> {meaning}</em>
      </h2>
      {/* //actual o/p by react using useState  */}
      <hr />

      <h3> Food we have</h3>
      <h6>click your favourite food</h6>

      {foodWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              
              fontSize: "2rem",
              padding: "1rem",
              cursor: "pointer"
            }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}

      <footer>
        <h3>Social Media Presence</h3>
        <div class="icon">
          <a
 href="https://github.com/Adarsh-Patel-Dev"
            class="fa fa-github"
          ></a>
          <a
            href="https://www.linkedin.com/in/adarsh-patel-449a55175"
            class="fa fa-linkedin"
          ></a>
          <a
            href="https://twitter.com/AdarshPatelDev?s=08"
            class="fa fa-twitter"
          ></a>
          <a
            href="https://instagram.com/git_sit_code"
            class="fa fa-instagram"
          ></a>
        </div>
      </footer>
    </div>
  );
}

/**
 * html       js
 * class----> className
 * style---->takes an object instead
 */
