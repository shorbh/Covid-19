import React,{Component} from 'react';

const SortData= ()=>{

  function sortByCountryName(dataA,dataB){
    if(dataA.country > dataB.country) return 1;
    else if(dataA.country < dataB.country) return -1;
    else return 0;
  }
  function sortByTotalCases(dataA,dataB){
    if(dataA.country > dataB.country) return 1;
    else if(dataA.country < dataB.country) return -1;
    else return 0;
  }
  function sortByNewCases(dataA,dataB){
    if(dataA.country > dataB.country) return 1;
    else if(dataA.country < dataB.country) return -1;
    else return 0;
  }
  function sortByActive(dataA,dataB){
    if(dataA.country > dataB.country) return 1;
    else if(dataA.country < dataB.country) return -1;
    else return 0;
  }
  function sortByTotalDeaths(dataA,dataB){
    if(dataA.country > dataB.country) return 1;
    else if(dataA.country < dataB.country) return -1;
    else return 0;
  }
  function sortByNewDeaths(dataA,dataB){
    if(dataA.country > dataB.country) return 1;
    else if(dataA.country < dataB.country) return -1;
    else return 0;
  }
  function sortByCritical(dataA,dataB){
    if(dataA.country > dataB.country) return 1;
    else if(dataA.country < dataB.country) return -1;
    else return 0;
  }
  function sortByRecovered(dataA,dataB){
    if(dataA.country > dataB.country) return 1;
    else if(dataA.country < dataB.country) return -1;
    else return 0;
  }
  function sortByTotalTests(dataA,dataB){
    if(dataA.country > dataB.country) return 1;
    else if(dataA.country < dataB.country) return -1;
    else return 0;
  }
  const {data,wrt} = this.props;
  console.log(wrt);
  if(wrt===0) data.sort(sortByCountryName);
  else if(wrt===1) data.sort(sortByTotalCases);
  else if(wrt===2) data.sort(sortByNewCases);
  else if(wrt===3) data.sort(sortByActive);
  else if(wrt===4) data.sort(sortByTotalDeaths);
  else if(wrt===5) data.sort(sortByNewDeaths);
  else if(wrt===6) data.sort(sortByCritical);
  else if(wrt===7) data.sort(sortByRecovered);
  else if(wrt===8) data.sort(sortByTotalTests);
  console.log(data);
    return data;
}
export default SortData;
