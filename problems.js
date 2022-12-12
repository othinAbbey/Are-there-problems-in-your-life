"use strict";

const response = prompt(`Is there a problem in your life? "yes" or "no" `);

if (response === "yes") {
  const can = prompt(`Can you do something about it?`);
  if (can === "yes") {
    alert("Do what you can");
  } else if (can === "no") {
    alert("Don't Worry");
  }
  const followUp = prompt("Is there more to do?");
  if (followUp === "yes") {
    alert("Do what you can.");
  } else if (followUp === "no") {
    alert("Don't worry.");
  } else {
    alert("Please enter 'yes' or 'no'");
  }
} else if (response === "no") {
  alert("Don't worry.");
} else {
  alert("Please enter 'yes' or 'no'");
}
