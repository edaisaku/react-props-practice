import React from "react"
import Avatar from "../components/Avatar"
import Detail from "../components/Detail"

function Card (props) {
return <div className="card">
<div className="top">
  <h2 className="name">{props.name}</h2>
  <p> {props.id}</p>
  <Avatar img={props.img}/>
</div>
<div className="bottom">
  <Detail detailInfo={props.number}/>
  <Detail detailInfo={props.mail}/>
</div>
</div>
}

export default Card