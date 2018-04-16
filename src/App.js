import React, { Component } from 'react';
import MiaCard from "./components/MiaCard";
import Wrapper from "./components/Wrapper";
import './App.css';
import mias from "./mias.json";

///////////Function to shuffle order of Mias 
function shuffleMias(arr) {
  console.log("shuffle funct");
  let i = arr.length - 1;
  //Loop thru minus 1 length of arr, as long as i >0 and each time decrease i by 1
  for (; i > 0; i--) {
    //generate a random #between 1 and length of arr
    const j = Math.floor(Math.random() * (i + 1));
    //switch i's position with j's position in order to shuffle order
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    console.log("later in shuff funct");
  }; return arr;
}


//Create App component
class App extends Component {

  state = {
    mias: mias,
    score: 0,
    clickedMias: []
  };

  clickMia = (id) => {
    shuffleMias(this.state.mias);
    console.log(`Mia with this id was clicked: ${id}`);

    //If duplicate click:
    if (this.state.clickedMias.includes(id)) {
      //reset score to 0
      this.setState({ score: 0 });
      //empty array of clicked mias
      this.setState({
        clickedMias: []
      });
   
      //If good click:
    } else {
      this.setState({ score: this.state.score + 1 });
      this.setState({
        clickedMias: [...this.state.clickedMias, id]
      });
      if (this.state.score > 1) {
        alert("You win!");
        this.setState({ score: 0 });
        this.setState({
          clickedMias: []
        });
      }
    };
  };

  render() {

    return (

      <div className="App">
        <div className="row">
          <h1> Don't click the same Mia twice! </h1>
          <h3> Score: {this.state.score} </h3>

          <Wrapper>
            {this.state.mias.map(mia => (
              <MiaCard
                id={mia.id}
                key={mia.id}
                image={mia.image}
                clickMia={this.clickMia} />
            ))
            }
          </Wrapper>


        </div>
      </div>
    );
  }
}

export default App;
