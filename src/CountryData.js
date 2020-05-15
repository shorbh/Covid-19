import React from 'react';
import {Line} from 'react-chartjs-2';
import Loader from './common/loader';
import CardGet from './cardGet';
import {fetchApi} from './api/api';
import TableComp from './table';

class CountryData extends React.Component {
  constructor(){
    super();
    this.state={
      data:[],
      countryName:"",
      countryData:{},
      provinceCountry:[],
      citiesProvince:[]
    }
  }

 async componentDidMount(){

    const countryName = this.props.match.params.id;
    const countryData = this.props.location.state.result;
    const promise1 = await fetchApi(countryName);
    // console.log(mydata);
    const myinit = {
      method : 'GET',
      headers: {
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "fec722748amshbf643e20e7fa970p1521a7jsnd6ff9ab749f5"
      }
    }
    const promise2 = fetch(`https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_particular_country.php?country=${countryName}`, myinit)
    .then(res => res.json())
    .then(response =>{
      var same = 0;
      const data = response.stat_by_country.filter(record => {
        if((new Date(record.record_date).toLocaleTimeString())>="00:00:02" && (new Date(record.record_date).toLocaleTimeString())<="00:15:02" && (new Date(record.record_date)).getDate() !== same  ){
          same = (new Date(record.record_date)).getDate();
          return (record);
        }
        return null
      });

      return(data);
    })

    Promise.all([promise1,promise2])
    .then(result => this.setState({data:result[1].reverse(),countryName,countryData,provinceCountry: result[0][0],citiesProvince: result[0][1]}))

  }
  render () {
    const {data,countryName,countryData,provinceCountry,citiesProvince} = this.state;
    return data.length? (<div>
      <CardGet countryData={countryData}/>
      <h2>Total Coronavirus cases in {countryName}</h2>
      <Line data={{
          labels: data.map(record => new Date(record.record_date).toDateString()),
          datasets:[
            {
              data: data.map(record => Number(record.total_cases.replace(/[^0-9]/g, ""))),
              fill: false,
              label: 'Total Cases',
              backgroundColor: "blue"
            }
          ]
        }}
        ></Line>
      <h2>Daily Coronavirus deaths in {countryName}</h2>
        <Line data={{
            labels: data.map(record => new Date(record.record_date).toDateString()),
            datasets:[
              {
                data: data.map(record => Number(record.new_deaths.replace(/[^0-9]/g, ""))),
                fill: false,
                label: 'Daily Deaths',
                backgroundColor: "black",
                borderColor: 'red'
              }
            ]
          }}
          ></Line>
        <h2>Daily Coronavirus cases in {countryName}</h2>
          <Line data={{
              labels: data.map(record => new Date(record.record_date).toDateString()),
              datasets:[
                {
                  data: data.map(record => Number(record.new_cases.replace(/[^0-9]/g, ""))),
                  fill: false,
                  label: 'Daily Cases',
                  backgroundColor: "black",
                  borderColor: 'blue'
                }
              ]
            }}
            ></Line>
          <TableComp provinceCountry={provinceCountry} citiesProvince={citiesProvince} />
  </div>
):( <Loader />);

  }
}

export default CountryData;
