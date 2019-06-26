/* FULLSTACK OPEN - Phonebook */

import React from 'react'

const Notification = ({ message, type}) => {

    const notificationStyle = {
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    }

    if (type === 'error') {
        notificationStyle.color = 'red';
    } else {
        notificationStyle.color = 'green'
    }

    if (message === null) {
        return null
    }

    return (
        <div style={notificationStyle}>
            {message}
        </div>
    )
}

export default Notification