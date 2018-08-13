import React, { Component } from "react";
import Screening from "./Screening";

const ScreeningList = (props) =>{
  const commentNodes = props.data.map(screening => {
    return(
      <Screening screening={screening} key={screening.id}/>

    )
  })
  return <div className="screening-list">{commentNodes}</div>

}
export default ScreeningList
