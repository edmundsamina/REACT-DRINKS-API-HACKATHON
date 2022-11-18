import React from "react";
import './styles.css';

export default function Button(props) {
  return (
    <button className="randomButton" onClick={props.onClick}>{props.text}</button>
  )
}
