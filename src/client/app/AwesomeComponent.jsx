import React from 'react';
import Flexbox from 'flexbox-react';
import Dropdown from './Dropdown.jsx';
import Search from "./Search.jsx";

var colours = [{
  name: "Red",
  hex: "#F21B1B"
}, {
  name: "Blue",
  hex: "#1B66F2"
}, {
  name: "Green",
  hex: "#07BA16"
}];


const SearchStyle= {
  backgroundColor: '#5F9ED5' ,
  padding: "20px",
  margin: "20px",
  
}
const DropdownStyle= {
  backgroundColor: '#5F9ED5' ,
  padding: "20px",
  margin: "20px",

}

class AwesomeComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {likesCount : 0};
    this.onLike = this.onLike.bind(this);
  }

  onLike () {
    let newLikesCount = this.state.likesCount + 1;
    this.setState({likesCount: newLikesCount});
  }

  render() {
    return (
    <Flexbox flexDirection="row" >
        <Flexbox element="header" flexGrow={1} height="60px" style={SearchStyle}>
          <Search />
        </Flexbox>
 
        <Flexbox flexGrow={1} style={DropdownStyle} height="60px">
          
        </Flexbox>

    </Flexbox>


    );
  }

}

export default AwesomeComponent;