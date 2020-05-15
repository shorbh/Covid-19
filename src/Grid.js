import React,{Component} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Loader from './common/loader';
import Chart from './chart';
import Short from './Short';
import {Link} from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import Header from './common/header/Header';

class Grid extends Component {
  constructor() {
    super();
    this.state = {
      data : [],
      isLoad : false,
      selectedCountries: []
    }
    console.log("constructor");
    // this.state = localStorage.getItem("appState") ? JSON.parse(localStorage.getItem("appState")) : InitialState;
  }
  componentDidMount(){
    //
    const myinit = {
      method : 'GET',
      headers: {
        "x-rapidapi-host": "covid-193.p.rapidapi.com",
        "x-rapidapi-key": "fec722748amshbf643e20e7fa970p1521a7jsnd6ff9ab749f5"
      },
      mode : 'cors'
    }
    fetch("https://covid-193.p.rapidapi.com/statistics", myinit)
    .then(res => res.json())
    .then(response =>{
      const data= [];
      (response.response).map(mydata =>(
        data.push({
          country: mydata.country,
          totalCases: mydata.cases.total,
          newCases: mydata.cases.new,
          active: mydata.cases.active,
          totalDeaths: mydata.deaths.total,
          newDeaths: mydata.deaths.new,
          critical: mydata.cases.critical,
          recovered: mydata.cases.recovered,
          totalTests: mydata.tests.total
        })
      ))
      console.log("mount");
      this.setState({data: data,isLoad: true});
      //localStorage.setItem('appState', JSON.stringify({data:data,isLoad:true,selectedCountries: []}));
    })

    // const request = new Date().toJSON().substring(0,10);
    // fetch("https://covid-193.p.rapidapi.com/history?day="+request, myinit)
    // .then(res => res.json())
    // .then(response => {
    //   this.setState({data: response,isLoad: true});
    //   console.log(response);
    // })
    // .catch(err => {
    //   console.log(err);
    // });
  }

  onSort = (event,i)=>{
    event.preventDefault();
    let data = [...this.state.data];
    console.log(data);
     console.log(i);
    const a = Short(data,i);
    console.log(a);
    this.setState({data: a});
  }
  onRowSelected = (row)=>{
    const data = [...this.state.data];
    const countryIndex = data.findIndex(
      c => c.country === row.country
    );
    //const country = Object.assign({}, row, {selected: !row.selected});
    row.selected = !row.selected;
    data[countryIndex] = row;
    this.setState({
      data: data,
      selectedCountries: data.filter( c => (c.selected))
    });
  }


      render(){
      const {data,isLoad,selectedCountries} = this.state;
      if(isLoad){
        const header = ['Country','Total Cases','New Cases','Active','Total Deaths','New Deaths','Critical','Recovered','Total Tests'];

      return(
            <>

            <Chart countryInformation= {selectedCountries} />
            <Header />
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead style={{position: "sticky",top: 0}}>
                <TableRow>
                {header.map( (result,i) =>(
                  <TableCell align={i>0? 'right' : 'left'}><a href='/' onClick={(e)=>this.onSort(e,i)}>{result}</a></TableCell>
                ))}
                </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((result,i) => {
                    const style= {
                      backgroundColor: 'lightgrey',
                    }
                    return(
                    <TableRow style={result.selected? style : null} onClick={() =>this.onRowSelected(result)}>
                      <TableCell align="left"><Link to={{pathname:`/country/${result.country}`,state:{result}}}>{result.country}</Link></TableCell>
                      <TableCell align="right">{result.totalCases}</TableCell>
                      <TableCell align="right"><Alert variant={result.newCases? "danger": null}>{result.newCases}</Alert></TableCell>
                      <TableCell align="right">{result.active}</TableCell>
                      <TableCell align="right">{result.totalDeaths}</TableCell>
                      <TableCell align="right"><Alert variant={result.newDeaths? "danger": null}>{result.newDeaths}</Alert></TableCell>
                      <TableCell align="right">{result.critical}</TableCell>
                      <TableCell align="right">{result.recovered}</TableCell>
                      <TableCell align="right">{result.totalTests}</TableCell>
                    </TableRow>
                  );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </>
      );
      }
      else{
       return(
         <Loader />
       );
      }
    }
}
export default Grid;
