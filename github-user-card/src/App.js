import React from 'react';
import axios from 'axios';

import User from './components/User';
import FollowerList from './components/FollowerList';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: [],
      follower: {}
    };
  }

  getMyFollowers = url => {
    axios.get(url)
      .then(response => {
        this.setState({
          followers: response.data
        })
      })
      .catch(err => {
        console.log("Error", err);
      })
  }


  componentDidMount() {
    axios.get('https://api.github.com/users/tatyanadz')
      .then(response => {
        this.setState({
          user: response.data
        })
        this.getMyFollowers(response.data.followers_url);
      })
      .catch(err => {
        console.log("Error", err);
      })
  }

  render() {
    return (
      <div className="App">
        <h1>Github User Card</h1>
        <div className="user">
          <User userData={this.state.user} />
        </div>
        <h2>Followers: </h2>
        <div className="followers">
         <FollowerList followers={this.state.followers} />
        </div>
      </div>
    );
  }
}

export default App;
