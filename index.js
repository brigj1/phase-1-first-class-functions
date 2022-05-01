function receivesAFunction(aCallbackFunc) {
// The receivesAFunction function should:
// take a callback function as an argument
// call the callback function
// it doesn't matter what this function returns,
// so long as it calls the callback function
    return aCallbackFunc();
}


function returnsANamedFunction() {
// The returnsANamedFunction function should:
// take no arguments
// return a named function
    function addTwoNums (aa, bb) {
        return aa + bb;
    }

    return addTwoNums;
}


function returnsAnAnonymousFunction() {
// The returnsAnAnonymousFunction function should:
// take no arguments
// return an anonymous function
    return (aa, bb) => aa + bb;

    return function (aa, bb) {
        return aa + bb;
    }
}


// function Monday() {
//     console.log("Go for a five-mile run");
//     console.log("Pump iron");
//   }
  
  function Tuesday() {
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");
  }
  
  function Wednesday() {
    console.log("Go for a five-mile run");
    console.log("Go for a five-mile run");
  }
  
  function Thursday() {
    console.log("Go for a five-mile run");
    console.log("Pump iron");
  }
  
  function Friday() {
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");
  }

function runFiveMiles() {
    console.log("Go for a five-mile run");
  }

  function liftWeights() {
    console.log("Pump iron");
  }
  
  function swimFortyLaps() {
    console.log("Swim 40 laps");
  }

//   function Monday() {
//     runFiveMiles();
//     liftWeights();
//   }  

  function Monday() {
    exerciseRoutine(liftWeights);
  }

  function exerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
  }

  function morningRoutine(exercise) {
    let breakfast;
  
    if (exercise === liftWeights) {
      breakfast = "protein bar";
    } else if (exercise === swimFortyLaps) {
      breakfast = "kale smoothie";
    } else {
      breakfast = "granola";
    }
  
    exerciseRoutine(exercise);
  
    // we could give this function a name if we wanted to, but since
    // it's only available _inside_ morningRoutine(), we don't need to
    return function () {
      console.log(`Nom nom nom, this ${breakfast} is delicious!`);
    };
  }

/* morningRoutine(liftWeights) returns this in console:
Go for a five-mile run
Pump iron
ƒ () { console.log(`Nom nom nom, this ${breakfast} is delicious!`); }

const afterExercise = morningRoutine(liftWeights);
// LOG: Go for a five-mile run
// LOG: Pump iron

afterExercise;
//=> ƒ () { console.log(`Nom nom nom, this ${breakfast} is delicious!`); }
And we can call that function later:
*/
