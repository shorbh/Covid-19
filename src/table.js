import React from 'react'
import Table from 'react-bootstrap/Table'

const TableComp = (props) => {
  // const {provinceCountry,citiesProvince} = props;
  console.log(props.citiesProvince);
  const header = ['Province','Confirmed','Deaths','Reccovered','New Cases','New Deaths','New Recovered','Active','New Active','Fatality Rate'];
  return (
    <>
    <Table responsive="sm">
    <thead>
      <tr>
        { header.map((head) => (
          <th>{head}</th>
        ))}
      </tr>
    </thead>
    <tbody>
    {props.provinceCountry.map(data =>(
      <tr>
        {Object.values(data).map(res =>{
          return(<td>{res}</td>);
         })
        }
      </tr>
    ))}
    </tbody>
  </Table>
    </>
  )
}

export default TableComp
