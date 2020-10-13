import React, { Component } from 'react'
import './App.css'
import Formulaire from './components/Formulaire'
import Message from './components/Message'
import Chat from './models/Chat'

class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    chats: [
      new Chat(0, 'Bonjour', 'Antoine'),
      new Chat(1, 'Salut', 'Karine')
    ]
  }


  createNewChat = (msg) => {
    const chats = [...this.state.chats]
    chats.push({ timestamp: Date.now(), msg: msg, pseudo: this.state.pseudo })
    this.setState({ chats: chats })
  }
  render() {
    return (
      <div className='box'>
        <div>
          <div className="messages">
            {this.state.chats.map(chat => {
              return <Message key={chat.timestamp} chat={chat} />
            })}
          </div>
        </div>
        <Formulaire length = {140} createNewChat={this.createNewChat} />
      </div>
    )
  }
}

export default App
