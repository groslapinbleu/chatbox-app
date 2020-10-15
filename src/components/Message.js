






import React, { Component } from 'react';

class Message extends Component {

    formatTime(timestamp) {
        const d = new Date(timestamp);
        const time = `${d.getDate()}/${(d.getMonth() + 1)}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;
        return time;
    }

    render() {        const { chat, currentUser } = this.props
        if (currentUser===chat.pseudo) {
            return (<p className="user-message">{chat.msg}</p>)
        } else {
            return (<p className="not-user-message"><strong>{chat.pseudo}: </strong>{chat.msg}</p>)
        }
    }
}

export default Message;