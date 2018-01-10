import React from 'react';

class Dropdown extends React.Component{

	constructor(props) {
    super(props);
    this.state= {listVisible: false};
    
  }

	getInitialState() {
		return {
			listVisible: false
		};
	}

	select(item) {
		this.props.selected = item;
	}

	show(){
		this.setState({listVisible: true});
		document.addEventListener("click",this.hide);

	}

	hide() {
		this.setState({listVisible: false});
		document.removeEventListener("click",this.hide);
	}

	renderListItems() {
		var items= []; 
		for(var i=0; i< this.props.list.length; i++) {
			var item= this.props.list[i];
			items.push(<div onClick={this.select.bind(null,item)}>
				<span style={{color: item.hex}}>{item.name}</span>
				</div>

			);

		}

		return items;
	}


	render() {
		return(
		<div>
			<div className={"dropdown-container" + (this.state.listVisible ? "show" : "")}>
				<span style={{ color: this.props.selected.hex }}>{this.props.selected.name}</span>
        			<i className="fa fa-angle-down"></i>
      		</div>
      		<div className="dropdown-list">
        		<div>
          			{this.renderListItems()}
        		</div>
      		</div>
      	</div>
		);
	}

}



export default Dropdown;