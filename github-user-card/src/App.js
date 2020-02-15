import React, {Component} from 'react'
import axios from 'axios'

import './App.css' 


class App extends React {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: {},
      follower: []
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
        console.log("Error: ", err);
      })
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/tatyanadz')
      .then(response => {
        this.setState({
          user: response.data
        })
        this.getMyFollowers(response.data.followers_url)
      })
      .catch(err => {
        console.log("Error", err)
      })
  }

  render() {
    <div className="App">
      <h1>React Github User Card</h1>
      <Container className="user">
        <Card.Group centered>
          <User userData={this.state.user} />
        </Card.Group>
      </Container>
      <h2>Followers:</h2>
      <Container className="followers">
        <Card.Group>
          <FollowersList followers={this.state.followers} />
        </Card.Group>
      </Container>
    </div>
  }


}

export default App;