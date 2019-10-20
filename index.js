// Code your solution here
function findMatching(drivers, name){
    const match = drivers.filter(d => d.toUpperCase() === name.toUpperCase())

    if(match !== undefined){
      return match
    }

    return [];
  };




function fuzzyMatch(){

}

function matchName(){

}
