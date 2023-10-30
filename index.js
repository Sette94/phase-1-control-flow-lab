
function scuberGreetingForFeet(ride) {
  // Write your code here!
  let response = ''

  if (ride < 400) {
    response = 'This one is on me!';
  }
  else if (ride > 400 && ride < 2000) {
    response = 'That will be twenty bucks.'
  }
  else if (ride > 2000 && ride < 2500) {
    response = 'I will gladly take your thirty bucks.'
  }
  else if (ride > 2500) {
    response = 'No can do.'
  }
  console.log(response)
  return (response)



}

function ternaryCheckCity(city) {
  // Write your code here!

  const response = city == 'NYC' ? "Ok, sounds good." : "No go.";
  return (response)
}

function switchOnCharmFromTip(tip) {
  let response = ''

  switch (tip) {
    case 'generous':
      response = "Thank you so much.";
      return (response)
    case 'not as generous':
      response = "Thank you.";
      return (response)
    default:
      response = "Bye.";
      return (response)
  }

}

