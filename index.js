// Code your solution here
function findMatching(drivers, name){
    const match = drivers.filter(drivers => drivers.toUpperCase() === name.toUpperCase())

    if(match === name){
      return match  
    }

    return [];
  };




function fuzzyMatch(){

}

function matchName(){

}
