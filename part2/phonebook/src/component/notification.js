import React from 'react'

const Setnotification = ({ message, error }) => {
    console.log(error);
    
    if (message === null) {
      return null
    }
    const notice = {
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    }
    let styleObj = {};
    if (error) {
        styleObj = {...notice, color:'red'}
    } else {
        styleObj = {...notice, color: 'green'}
    }
    return (
      <div style={styleObj}>
        {message}
      </div>
    )
  }

const Notification = ({notification, error}) => { 
    return (
        <div>
          <Setnotification message={notification}/>
          <Setnotification message={error} error/>
        </div> )
}

export default Notification;
