import React from 'react';

import { Card, CardContent } from '@material-ui/core'



const User = (props) => {
  const { avatar_url, bio, login, created_at, followers, html_url } = props.userData;
  return (
    <Card className="user-card" variant="outlined">
      <CardContent>
        <img src={avatar_url} wrapped ui={false} alt="user-img" />
        <div className="content">
            <div className="header">{login}</div>
            <div className="join">
            <span className='date'>Joined on {created_at}</span>
            </div>
            <div className="description">
            {bio}
            </div>
        </div>
        <div extra>
            <a href={html_url}>
            Followed by:{followers}
            </a>
        </div>
      </CardContent>
    </Card>
  )
}


export default User;