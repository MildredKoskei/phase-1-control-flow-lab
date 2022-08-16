function scuberGreetingForFeet(feet){
  if(feet <= 400){
     return "This one is on me!"
   }
  else if(feet > 2000 && feet < 2500)
  return 'I will gladly take your thirty bucks.';
  return 'No can do.';
   }
  
 

function ternaryCheckCity(city){
  return city === 'NYC'? 'Ok, sounds good.' : "No go."
  
}
 if(ternaryCheckCity(Pittsburgh)){
   console.log("No go");}



   function switchOnCharmFromTip(generous){
  switchOnCharmFromTip = generous;
  switch (switchOnCharmFromTip){
    case "generous":
      return('Thank you so much.');
      break
      case "not as generous":
        return('Thank you.');
        break
        default:
          return('Bye.')
  }
}