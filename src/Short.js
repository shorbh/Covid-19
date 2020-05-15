const Short = (data,i)=>{
  function sortByCountryName(dataA,dataB){
    if(dataA.country > dataB.country) return 1;
    else if(dataA.country < dataB.country) return -1;
    else return 0;
  }
  function sortByTotalCases(dataA,dataB){
    if(dataA.totalCases < dataB.totalCases) return 1;
    else if(dataA.totalCases > dataB.totalCases) return -1;
    else return 0;
  }
  function sortByNewCases(dataA,dataB){
    if(dataA.newCases > dataB.newCases) return -1;
    else if(dataA.newCases < dataB.newCases) return 1;
    else return 0;
  }
  function sortByActive(dataA,dataB){
    if(dataA.active > dataB.active) return -1;
    else if(dataA.active < dataB.active) return 1;
    else return 0;
  }
  function sortByTotalDeaths(dataA,dataB){
    if(dataA.totalDeaths > dataB.totalDeaths) return -1;
    else if(dataA.totalDeaths < dataB.totalDeaths) return 1;
    else return 0;
  }
  function sortByNewDeaths(dataA,dataB){
    if(dataA.newDeaths > dataB.newDeaths) return -1;
    else if(dataA.newDeaths < dataB.newDeaths) return 1;
    else return 0;
  }
  function sortByCritical(dataA,dataB){
    if(dataA.critical > dataB.critical) return -1;
    else if(dataA.critical < dataB.critical) return 1;
    else return 0;
  }
  function sortByRecovered(dataA,dataB){
    if(dataA.recovered > dataB.recovered) return -1;
    else if(dataA.recovered < dataB.recovered) return 1;
    else return 0;
  }
  function sortByTotalTests(dataA,dataB){
    if(dataA.totalTests > dataB.totalTests) return -1;
    else if(dataA.totalTests < dataB.totalTests) return 1;
    else return 0;
  }
  if(i===0) data.sort(sortByCountryName);
  else if(i===1) data.sort(sortByTotalCases);
  else if(i===2) data.sort(sortByNewCases);
  else if(i===3) data.sort(sortByActive);
  else if(i===4) data.sort(sortByTotalDeaths);
  else if(i===5) data.sort(sortByNewDeaths);
  else if(i===6) data.sort(sortByCritical);
  else if(i===7) data.sort(sortByRecovered);
  else if(i===8) data.sort(sortByTotalTests);
  return data;
}
export default Short;
