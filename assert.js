

var assert = {
    isTrue: function(assertionToCheck) {
      if (!assertionToCheck) {
        throw new Error("❌ Assertion failed: " + assertionToCheck + " is not truthy");
      } else {
        console.log("✅ Assertion passed: ");
      }
    },

    isEqual: function(a, b) {
      if ( a !== b ) {
        throw new Error("❌ Assertion failed: " + a + " is not equal to" + b);
        } else {
          console.log("✅ Assertion passed: " );
        }
    }

  };

  function it(label, callback) {
    console.log(`Test: ${label}`)
    callback()
  }