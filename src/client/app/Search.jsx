import React from 'react';

class Search extends React.Component{
		
	constructor(props) {
    super(props);
    this.state= {query: ' '};
    this.onChange= this.onChange.bind(this);
    
  }

	 onChange(event){
	 	
	 	this.setState({query: event.target.value}, function () {
    console.log(this.state.query);
});
	 	
	 }

	


	render() {
		return(
			<div>
				<input type="search" placeholder="Search" onChange={this.onChange} />

			</div>

		);

	}
}

export default Search;