import React, { Component } from 'react';
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';

import './App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            users: [],
            searchField: ''
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response =>response.json())
            .then(users => this.setState({ users }));
    }

    handleChange = e => {
        this.setState({ searchField: e.target.value})
    }

    render() {
        const { users, searchField } = this.state;
        const filteredUsers = users.filter(user => (
            user.name.toLowerCase().includes(searchField.toLowerCase())
        ))

        return (
            <div className='App'>
                <h1>Directory App</h1>
                <SearchBox
                    placeholder='Search Users'
                    handleChange={this.handleChange}
                />
                <CardList users={filteredUsers} />
            </div>
        );
    }
}

export default App;
