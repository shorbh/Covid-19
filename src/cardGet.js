import React from 'react'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import './cardGet.css'

class CardGet extends React.Component {


  render () {
    const {country,totalCases,newCases,active,totalDeaths,newDeaths,critical,recovered,totalTests} = this.props.countryData;
    const group = [`Total Cases: ${totalCases}`,`New Cases: ${newCases}`,`Total Deaths: ${totalDeaths}`];
    return(
      <CardDeck>
      {group.map(data => (
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>{country}</Card.Title>
            <Card.Text>
              {data}{' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
    ))}
    </CardDeck>
    )
  }
}

export default CardGet;
