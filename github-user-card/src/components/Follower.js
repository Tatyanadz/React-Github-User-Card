import React, {Component} from 'react'
import axios from 'axios'

import User from './User'

class Follower extends React {
    constructor(props) {
        super(props);
        this.state = {
            follower: this.porps.follower
        }
    }

    componentDidMount() {
        axios.get(`https://api.github.com/users/${this.state.props.follower.login}`)
          .then((response => {
              this.setState({ follower: response.data})
          }))
    }

    render() {
        return <User userData={this.state.follower} />
    }
}

export default Follower