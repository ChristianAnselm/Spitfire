import React from 'react';
import { Link } from 'react-router-dom';
import SessionFormContainer from '../session_form/session_form_container';

class Home extends React.Component   {
  constructor(props){
    super(props);
  }

  render(){
    if (this.props.currentUser) {
      return (
        <div className='home'>
          <div className='username'>
          <p> {this.props.currentUser.username} </p>
          <div>

          <button className='logout' onClick={this.props.logout}>Log Out</button>
        </div>
        </div>

        <footer className='playbar'>
          <h1>play</h1>
        </footer>
      </div>

      );
    } else {
      return (
        <div>

        </div>
      );
    }
  }
}

export default Home;
