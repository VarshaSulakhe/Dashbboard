import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';
import TrendingTopicsComponent from './TrendingTopicsComponent.jsx';


class App extends React.Component {
  render () {
    return (
    <div >
    <AwesomeComponent />
   	<TrendingTopicsComponent />
    </div>
    );

  }
}

render(<App/>, document.getElementById('app'));
