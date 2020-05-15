import React from 'react';
const Call = (props) => {
  if(props.error){
    return(
      <div>Not Found</div>
    )
  }
  if(props.loading){
    let b = props.description.description.en;
    props.a = b.replace(/"/g, "'");

  return(
    <div className="desc" style={{display: 'block'}}>
    <div className="desc-head">
      <a className ="title" href={props.description.links.homepage[0]}>{props.description.name} - {props.description.symbol}</a>
    </div>

    <div className="desc-body-left">
      <div className="image"><img src={props.description.image.large}/>
      <hr/>
        Country of origin - {props.description.Country_origin}<br/>
        Date of Appearance - <br/>
        {props.description.genesis_date}<br/>
        Market Cap Rank -
        {props.description.market_cap_rank}<br/>
        Coin Gecko-<br/>
        Rank - {props.description.coingecko_rank}<br/>
        Score - {props.description.coingecko_score}<br/>
        Developer Score - {props.description.developer_score}<br/>
        Community Score - {props.description.community_score}<br/>
        Liquidity Score - {props.description.liquidity_score}<br/>
        Public Interest Score - {props.description.public_interest_score}<br/>
      </div>

    <div className="desc-body-right">

    </div>
    </div>
    </div>
  )

}
else{
  return(<div></div>)
}
}
export default Call;
