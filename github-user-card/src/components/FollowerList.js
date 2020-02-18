import React from 'react';

import Follower from './Follower';

const FollowerList = props => {

  return (
    <>
      {props.followers.map(follower => {
        return <Follower key={follower.id} follower={follower} />
      })}
    </>
  )
}

export default FollowerList;
