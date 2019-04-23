import React from "react";
import styled from "styled-components";
import { Logos } from "./images";

const ScContainer = styled.div`
  display: flex;
`;

const ScCol = styled.div`
  width: 50%;
  text-align: center;
`;

const ScLogo = styled.img`
  height: 150px;
`;

class Scoreboard extends React.Component {
  constructor(props){
    super(props);
   
    this.state = {
      score: {
        "awayTeam": {
          name: props.teams[0],
          runs: 0
        },
        "homeTeam": {
          name: props.teams[1],
          runs: 0
        }
      }
    };
  }

  addRun = (team, curr) => {
    const awayTeam = this.state.score.awayTeam;
    const homeTeam = this.state.score.homeTeam;
    
    const runsAdded = 2;

    if (team === "awayTeam") {
      awayTeam.runs += runsAdded;

      this.setState({
        score: {
          awayTeam: awayTeam,
          homeTeam: homeTeam
        }
      });
    } else if(team === "homeTeam") {
      homeTeam.runs += runsAdded;

      this.setState({
        score: {
          homeTeam: homeTeam,
          awayTeam: awayTeam
        }
      });
    }
  };

  render() {
    return (
      <ScContainer>
        <ScCol>
          <h2><ScLogo src={Logos[this.state.score.awayTeam.name]} /></h2>
          <button onClick={() => this.addRun("awayTeam", this.state.score.awayTeam.runs)} id="buttonAway">Add a Run</button>
          <p id="scoreAway">{this.state.score.awayTeam.runs}</p>
        </ScCol>
        <ScCol>
          <h2><ScLogo src={Logos[this.state.score.homeTeam.name]} /></h2>
          <button onClick={() => this.addRun("homeTeam", this.state.score.homeTeam.runs)} id="buttonHome">Add a Run</button>
          <p id="scoreHome">{this.state.score.homeTeam.runs}</p>
        </ScCol>
      </ScContainer>
    );
  }
}

export default Scoreboard;
