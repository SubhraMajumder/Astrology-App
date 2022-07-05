import React, { Component } from 'react'
import Asztro from './Asztro';
//import { Link } from "react-router-dom";


class Main extends Component {
  constructor(props){
      super(props);
      this.state = {
        json: {},
        zodiac: "",
        day: "",
        showAstro: false
      }
  }

  handleZodiac = (e) => {
    let sz = e.target.innerText.toLowerCase()
    this.setState({
      zodiac: sz
    })
    e.target.classList.add("actv")

    var siblings = n => [...n.parentElement.children].filter(c=>c!==n)
    var c = e.target
    var brothers_n_sisters = siblings(c)

    brothers_n_sisters.map(function(ell){
      return console.log(ell.classList.remove("actv"))
    })

    

  }

  handleDay = (e) => {
    let dt = e.target.innerText.toLowerCase()
    this.setState({
      day: dt
    })
    e.target.classList.add("actv")
  }  

  asyncCode(){
    const URL = `https://aztro.sameerkumar.website/?sign=${this.state.zodiac}&day=${this.state.day}`;
    fetch(URL, {method: 'POST'})
    .then(response => response.json())
    .then(json => { this.setState({json}); });
  }

  submitNow = async () => {
    this.asyncCode()
    this.setState({showAstro: true})
  }
  

    render(){
      return (
        <>
          <div className="container zodiacs my-3">
            <h1 className="text-center mb-3">Select your Zodiac sign</h1>
            <div className="zodiacsInne text-center">
                <button className="btn btn-primary mx-2 my-2" onClick={this.handleZodiac}>Aries</button>
                <button className="btn btn-primary mx-2 my-2" onClick={this.handleZodiac}>Taurus</button>
                <button className="btn btn-primary mx-2 my-2" onClick={this.handleZodiac}>Gemini</button>
                <button className="btn btn-primary mx-2 my-2" onClick={this.handleZodiac}>Cancer</button>
                <button className="btn btn-primary mx-2 my-2" onClick={this.handleZodiac}>Leo</button>
                <button className="btn btn-primary mx-2 my-2" onClick={this.handleZodiac}>Virgo</button>
                <button className="btn btn-primary mx-2 my-2" onClick={this.handleZodiac}>Libra</button>
                <button className="btn btn-primary mx-2 my-2" onClick={this.handleZodiac}>Scorpio</button>
                <button className="btn btn-primary mx-2 my-2" onClick={this.handleZodiac}>Sagittarius</button>
                <button className="btn btn-primary mx-2 my-2" onClick={this.handleZodiac}>Capricorn</button>
                <button className="btn btn-primary mx-2 my-2" onClick={this.handleZodiac}>Aquarius</button>
                <button className="btn btn-primary mx-2 my-2" onClick={this.handleZodiac}>Pisces</button>
            </div>
            <h1 className="text-center mb-3">Select day</h1>
            <div className="zodiacsInne text-center">
                <button className="btn btn-primary mx-2 my-2" onClick={this.handleDay}>Yesterday</button>
                <button className="btn btn-primary mx-2 my-2" onClick={this.handleDay}>Today</button>
                <button className="btn btn-primary mx-2 my-2" onClick={this.handleDay}>Tomorrow</button>
            </div>
            <div className="text-center">
              <button className="btn btn-primary mx-2 my-5" onClick={this.submitNow}>Submit</button>
            </div>
          </div>

          {this.state.showAstro && <Asztro current_date={this.state.json.current_date} compatibility={this.state.json.compatibility} lucky_time={this.state.json.lucky_time} lucky_number={this.state.json.lucky_number} color={this.state.json.color} date_range={this.state.json.date_range} mood={this.state.json.mood} description={this.state.json.description} />}

        </>
      )
    }
}

export default Main