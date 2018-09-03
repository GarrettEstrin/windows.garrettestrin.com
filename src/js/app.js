import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import StartUpScreen from './components/startUpScreen';
import Desktop from './components/desktop';
import reducers from './reducers/index';


class EntryApp extends Component {
  constructor(props){
    super(props)

    this.state = {
      startUpMounted: true
    }

    this.handleStartUpScreenUnmount = this.handleStartUpScreenUnmount.bind(this);
  }

  handleStartUpScreenUnmount(){
    this.setState({startUpMounted: false});
  }
  render() {
    return (
      
        <div class="main-container">
          { this.state.startUpMounted ? <StartUpScreen unmountMe={this.handleStartUpScreenUnmount}/> : null }
          <Provider store={createStore(reducers)}>
            <Desktop/>
          </Provider>
        </div>
    )
  }
}

ReactDOM.render(
  <EntryApp />,
  document.getElementById('app')
)