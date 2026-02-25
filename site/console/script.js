console.log("\u001b[31mpassword_db: WARNING: no privileges could be revoked for 'public'")
console.log("--------------------------")
console.log("You found the console! Congratulations!")
console.log("--------------------------")
console.log("Warning messages and errors will be found here. Do you see any above?")
console.log("--------------------------")
console.log("Here is your first flag: lovelace")
console.log("--------------------------")
console.log("Now, let's play around! Go to the prompt below, next to the > arrow, and type in 'ghost()'. Don't forget to include the parenthesis!")
console.log("--------------------------")
console.log("Ok, now try 'getFunky()'")
console.log("--------------------------")
console.log("Lastly, I've hidden another flag in an object called info. Type in 'window.info' to find it!")

function ghost() {
  console.log('BOO!');
}

let x = document.getElementById("myAudio"); 

function getFunky() { 
  x.play(); 
  console.log("â™ª â™« â™ª");
} 

window.info = {
  flag: 'prince',
  was_this_fun: 'yes',
  codeHS: 'rocks!',
  password: 'enter1234'
}