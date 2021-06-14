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

  "🍳": "fried_egg",

  "🥘": "shallow_pan_of_food",

  "🍲": "stew",

  "🥗": "green_salad",

  "🍿": "popcorn",

  "🍱": "bento",

  "🍘": "rice_cracker",

  "🍙": "rice_ball",

  "🍚": "cooked_rice",

  "🍛": "curry",

  "🍜": "ramen",

  "🍝": "spaghetti",

  "🍠": "sweet_potato",

  "🍢": "oden",

  "🍣": "sushi",

  "🍤": "fried_shrimp",

  "🍥": "fish_cake",

  "🍡": "dango",

  "🥟": "dumpling",

  "🥠": "fortune_cookie",

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

  "🍭": "lollipop",

  "🍮": "custard"
};

var foodWeKnow = Object.keys(foodDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function foodInputhandler(event) {
    var userInput = event.target.value; // {/* //setting state in eventhandler */}

    var meaning = foodDictionary[userInput];

    //console.log(meaning);

    if (meaning === undefined) {
      meaning = "something which we don't have in our database!";
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
      <h1>inside out</h1>
      <input onChange={foodInputhandler}></input>
      {/* //interaction with "onChange"  */}
      <h2>
        <em> {meaning}</em>
      </h2>
      {/* //actual o/p by react using useState  */}

      <h3> food we know</h3>
      {foodWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

/**
 * html       js
 * class----> className
 * style---->takes an object instead
 */
