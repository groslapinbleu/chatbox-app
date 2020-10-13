






import React, { Component } from 'react';

class Message extends Component {

    formatTime(timestamp) {
        const d = new Date(timestamp);
        const time = `${d.getDate()}/${(d.getMonth() + 1)}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;
        return time;
    }

    render() {
        const { chat } = this.props
        return (<p className="user-message">{chat.pseudo}: {chat.msg} {this.formatTime(chat.timestamp)}
        </p>
        );
    }
}

export default Message;