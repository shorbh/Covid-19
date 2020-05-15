

const myinit = {
  method : 'GET',
  headers: {
    "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
    "x-rapidapi-key": "fec722748amshbf643e20e7fa970p1521a7jsnd6ff9ab749f5"
  }
}
export const fetchApi = async (countryName) =>{
  return await fetch("https://covid-19-statistics.p.rapidapi.com/reports?region_name="+(countryName==="USA"? "US":countryName), myinit)
    .then(response => response.json())
    .then(response => {
      const countryProvince=[];
      const provinceCity=[];
    response.data.map( record => {
      countryProvince.push({
        province: record.region.province,
        confirmed: record.confirmed,
        deaths: record.deaths,
        recovered: record.recovered,
        newCases: record.confirmed_diff,
        newDeaths: record.deaths_diff,
        newRecovered: record.recovered_diff,
        active: record.active,
        newActive: record.active_diff,
        fatalityRate: record.fatality_rate,
      })
      provinceCity.push({
        [record.region.province]: record.region.cities
      })
    })
    return (response = [countryProvince,provinceCity]);
  })
  }
