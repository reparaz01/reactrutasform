import React, { Component } from 'react'
import casa from './../assets/home.png';
export default class Home extends Component {
    render() {
    return (
    <div>
    <h1>Home Component</h1>
    <img src={casa} style={{width: "250px", height: "250px"}}/>
        </div>
)}

}