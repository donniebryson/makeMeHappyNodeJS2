var myThoughts;
var use_watson = false;

function myTellMe() {
  var myState = makeGuessOnLine();
  if (myState == "happy") {
    document.getElementById("myImage").src = "smile.gif";
    console.log("smile");
  } else if (myState == "sad" ) {
    document.getElementById("myImage").src = "frown.gif";
    console.log("sad");
  } else {
    document.getElementById("myImage").src = "unknown.gif";
    console.log("unknown");
  }
}

function getThoughts() {
  myThoughts = prompt("Please tell me what you think of me", "I like you");
  if ( myThoughts == null ) {
    myThoughts = "unknown";
  }
}

function makeGuessOnLine() {
  getThoughts();
  return makeGuess();
}

function makeGuessRemote(s) {
  myThoughts = s;
  return makeGuess();
}

function makeGuess() {
 if ( use_watson ) {
    return makeGuessWatson();
  }  else {
      return makeGuessNonWatson();
  }   
}

function makeGuessNonWatson() {
  if ( myThoughts === "I like you") {
    return "happy";
  } else if ( myThoughts === "I don't like you") {
    return "sad";
  } else {
    return "uknown";
  }
}
  
function makeGuessWatson() {
    return "uknown";
}