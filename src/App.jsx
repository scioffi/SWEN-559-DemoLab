import React from "react";
import styled from "styled-components";
import moment from "moment";

import Scoreboard from "./Scoreboard";

const ScBody = styled.div`
  margin: 0 auto;
  width: 500px;
`;

const ScHeader = styled.header`
  text-align: center;
`;

const ScTitle = styled.h1`
  font-family: "Verdona, sans-serif";
`;

const ScDate = styled.em`
`;

const App = () => {
	const today = new moment().format("dddd, MMMM Do");

	return (
		<ScBody>
        <ScHeader>
          <ScTitle>Baseball Score Tracker</ScTitle>
          <ScDate>{today}</ScDate>
        </ScHeader>
          <hr />
	    	<Scoreboard teams={["Phillies", "Mets"]} />
      </ScBody>
	);
};

export default App;