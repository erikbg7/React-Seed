import React, { Component } from 'react';
import Slider from "react-slick";


import "../../../styles/App.css"

import Hero from "../components/Home.js"

import ReactDOM from "react-dom";

export default class App extends Component {
    state = {
        searchTerm:"",
        searchUrl:""
    }

    handleKeyUp = ({key}) => {
        if(key === 'Enter' && this.state.searchTerm !== ""){
            var searchUrl =  `search/multi?query=${this.state.searchTerm}&api_key=166624c030b91c943c397020f20525b4`;
            this.setState({
                searchUrl
            })
        }
    }

    handleChange = (event) => {
        const searchTerm = event.target.value
        this.setState({
            searchTerm
        })
    }

    render() {
        return(
            <div>
                <Hero />
            </div>
        )
    }
}