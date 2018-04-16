import React, { Component } from 'react';
import MiaCard from "./components/MiaCard";
import Wrapper from "./components/Wrapper";
import './App.css';
import mias from "./mias.json";

function shuffleMias(arr) {
  console.log("shuffle funct");
  let i = arr.length-1;
  //Loop thru minus 1 length of arr, as long as i >0 and each time decrease i by 1
  for (; i>0; i--){
    //generate a random #between 1 and length of arr
    const j = Math.floor(Math.random()*(i+1));
    //switch i's position with j's position in order to shuffle order
    const temp = arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
    console.log("later in shuff funct");
  };    return arr;
}



class App extends Component {

  state = {
    mias: mias,
    score: 0,
    clickedMias: []
  };

  removeMia = (id) => {
    console.log(`Mia with this id was clicked: ${id}`);

    //If duplicate click:
    if (this.state.clickedMias.includes(id)) {
      //reset score to 0
      this.setState({ score: 0 });
      //empty array of clicked mias
      this.setState({
        clickedMias: []
      });
      shuffleMias(this.state.mias)

    //If good click:
    } else {
      this.setState({ score: this.state.score + 1 });
      this.setState({
        clickedMias: [...this.state.clickedMias, id]
      });
    };
  };

  render() {
    
    return (
    
      <div className="App">
        <div className="row">
          <h1> Click on a Mia, but don't click the same one twice! </h1>
          <h2> Score: {this.state.score} </h2>

          <Wrapper>
            {this.state.mias.map(mia => (
              <MiaCard
                id={mia.id}
                key={mia.id}
                image={mia.image}
                removeMia={this.removeMia} />
            ))
            }
          </Wrapper>


        </div>
      </div>
    );
  }
}

export default App;
