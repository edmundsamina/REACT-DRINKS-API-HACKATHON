import React from "react";
import './styles.css';

export default function button(props) {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}
