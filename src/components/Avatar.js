import React from 'react'

const Avatar = (props)=> {
  console.log('These are the props in  AVATAR: ', props)
  return (
    <div className='avatar-container'>
      <img className="fit-picture"
     src={props.avatar}
     alt="adorableAvatar"/>
    </div>
  )
}
export default Avatar