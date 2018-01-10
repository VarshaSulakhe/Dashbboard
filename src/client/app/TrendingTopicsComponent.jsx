import React from 'react';
import Flexbox from 'flexbox-react';

const TrendStyle= {
  backgroundColor: '#5F9ED5' ,
  padding: "20px",
  margin: "20px",
  
}

class TrendingTopicsComponent extends React.Component {
	render() {

		return (

			<Flexbox flexDirection="column" minHeight="100vh" >
        		<Flexbox element="header" flexGrow={1} height="60px" style={TrendStyle}>
          			Header
        		</Flexbox>

    		</Flexbox>

		);
	}
}

export default TrendingTopicsComponent;