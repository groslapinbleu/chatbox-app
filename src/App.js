import React, { Component, createRef } from 'react'
import './App.css'
import './animation.css'
import Formulaire from './components/Formulaire'
import Message from './components/Message'
import Chat from './models/Chat'
import base from './services/firebase'
import {
  CSSTransition, 
  TransitionGroup
} from 'react-transition-group'

class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    chats: {},
  }
  chatsRef = createRef()

  componentDidUpdate() {
    const ref = this.chatsRef.current
    ref.scrollTop = ref.scrollHeight
  }

  componentDidMount() {
    base.syncState('/', {
      context: this,
      state: 'chats'
    })
  }

  createNewChat = (msg) => {
    const chats = { ...this.state.chats }
    const now = Date.now()
    chats[now] = new Chat(now, msg, this.state.pseudo)

    // on ne veut garder que 10 messages en mémoire et en bdd : 
    // on élimine tout ce qui dépasse
    Object.keys(chats)
    .slice(0, -10)
    .forEach(key => chats[key] = null)
    
    this.setState({ chats: chats })
  }

  render() {
    const chats = Object.keys(this.state.chats).map(key => (
      <CSSTransition  key={key} timeout={200} classNames='fade'>
      <Message chat={this.state.chats[key]} currentUser={this.state.pseudo} />
      </CSSTransition>
    ))

    return (
      <div className='box'>
        <div>
          <div className="messages" ref={this.chatsRef}>
            <TransitionGroup className="message">
            {chats}
            </TransitionGroup>
          </div>
        </div>
        <Formulaire length={140} createNewChat={this.createNewChat} />
      </div>
    )
  }
}

export default App
