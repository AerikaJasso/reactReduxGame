import React from 'react'
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
// import Avatar from '@material-ui/core/Avatar';

// const styles = {
//   row: {
//     display: 'flex',
//     justifyContent: 'center',
//   },
//   avatar: {
//     margin: 10,
//   },
//   bigAvatar: {
//     width: 60,
//     height: 60,
//   },
// };
const Avatar = (props)=> {
  return (
    <div className='avatar-container'>
      <img className="fit-picture"
        src={props.avatar}
        alt={`Avatar of ${props.name}`}
        style={{ borderRadius: 60 } }
        />
    </div>
  )
}
export default Avatar