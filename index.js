function scuberGreetingForFeet(num) {
  let result
  if (num <= 400) {
    result = 'This one is on me!';
  }
  if (num > 2000) {
    result = 'I will gladly take your thirty bucks.';
  }
  if (num > 2500) {
    result = 'No can do.';
  }
  return result
}

let city = NYC
function ternaryCheckCity(city) {
  return (city === "NYC" ? 'Ok, sounds good.' : 'No go.');
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.'
  }
}