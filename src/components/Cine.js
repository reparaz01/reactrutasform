import React, { Component } from 'react'
import cine from './../assets/cine.png';
export default class Cine extends Component {
    render() {
    return (
    <div>
    <h1>Cine Component</h1>
    <img src={cine} style={{width: "250px", height: "250px"}}/>
        </div>
)}

}