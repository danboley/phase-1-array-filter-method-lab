function findMatching(drivers, string) {
    return drivers.filter(
        function(driver) {
            return driver.toLowerCase() === string.toLowerCase()
        }
    )
}

 //   for (const user of collection) {
 //       if (drivers.name === drivers.name) {
 //           console.log(drivers.name)
  //      }
 //   }
//}


function fuzzyMatch(drivers, string) {
    return drivers.filter(
        function(driver) {
            return driver.toLowerCase().substring(0, string.length) === string.toLowerCase()
        }
    )
};

//function(driver) {
//    return driver.firstInitial[0] === string.firstInitial[0]
//}


function matchName(drivers, hometown) {
    return drivers.filter(
        function(driver) {
            return driver.name === hometown
        }
    )
};
