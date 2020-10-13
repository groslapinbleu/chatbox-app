import React, { Component } from 'react';

class Formulaire extends Component {
    state = {
        message: '',
        textRemainingSize: this.props.length,
    }

    handleSubmit = (e) => {
        const msg = this.state.message
        console.log(`handleSubmit: submitting msg ${msg}`)
        e.preventDefault()
        const {createNewChat} = this.props
        createNewChat(msg)
        this.setState({
            message: '',
            textRemainingSize: this.props.length,
        })
    }

    handleChange = (e) => {
        console.log('handleChange')
        const message = e.target.value
        const remainingSize = this.props.length - message.length
        
        this.setState(
            {
                message: message,
                textRemainingSize: remainingSize,
            }
        )
    }

    handleKeyUp = (e) => {
        if (e.keyCode === 13) { // alternativement on peut tester e.key === 'Enter'

            console.log('Enter key has been pressed')
            this.handleSubmit(e)
          }
          
    }

        render() {

            return (
                <form className="form"
                    onSubmit={this.handleSubmit}
                >
                    <textarea
                        required
                        maxLength='140'
                        value={this.state.message}
                        onChange={this.handleChange}
                        onKeyUp={this.handleKeyUp}
                        />
                    <div className='info'>
                        {this.state.textRemainingSize}
                    </div>
                    <button type='submit'>Envoyer</button>
                </form>
            );
        }
    }

export default Formulaire;