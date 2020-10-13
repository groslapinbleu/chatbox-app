import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Connexion extends Component {
    state = {
        pseudo: '',
        goChat: false

    }

    handleChange = (e) => {
        const pseudo = e.target.value
        console.log(`handleChange : pseudo = ${pseudo}`)

        this.setState({ pseudo })
    }

    handleSubmit = (e) => {
        console.log(`handleSubmit : pseudo = ${this.state.pseudo}`)
        if (this.state.pseudo) {
            e.preventDefault() // nécessaire pour laisser React gérer le routage
            this.setState({ goChat: true })
        }
    }

    render() {

        if (this.state.goChat) {
            return (
                // push permet de garder la page d'où l'on vient dans l'historique
                // de navigation
                <Redirect push to={`/pseudo/${this.state.pseudo}`} />)
        } else
            return (
                <div className="connexionBox">
                    <form className='connexion' onSubmit={this.handleSubmit}>
                        <input
                            placeholder='pseudo'
                            type="text"
                            required
                            value={this.state.pseudo}
                            onChange={this.handleChange}
                            
                        />

                        <button type='submit' >GO</button>
                    </form>
                </div>
            );
    }
}

export default Connexion;