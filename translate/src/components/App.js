import React, {Component} from 'react';
import UserCreate from './UserCreate'
import LanguageContext from '../context/LanguageContext'

class App extends Component  {

    state = {language: 'english'}

    onLanguageChange = (language) => {
        this.setState({language})
    }


    render() {
        console.log(this.state)
        return (
            <div className="ui container">
                <div>
                    Select a language:
                    <i className="flag us" onClick={() => this.onLanguageChange('english')} />
                    <i className="flag es" onClick={() => this.onLanguageChange('spanish')} />
                </div>
                    <LanguageContext.Provider value={this.state.language}>
                        <UserCreate />
                    </LanguageContext.Provider>
            </div>   
        )
    }
    
}

export default App;
