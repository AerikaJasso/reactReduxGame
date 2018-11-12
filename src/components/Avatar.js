import React from 'react'

const Avatar = (props)=> {
  return (
    <div className='avatar-container'>
      <img className="fit-picture"
        src={props.avatar}
        alt={`Avatar of ${props.name}`}/>
    </div>
  )
}
export default Avatar