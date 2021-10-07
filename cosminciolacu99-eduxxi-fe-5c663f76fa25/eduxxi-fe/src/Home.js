import React from 'react'
import './App.scss';
import Header from './components/header/Header'
const Home = (props) => {
    return (
        <div className="App">
            <Header/>
            {props.children}
        </div>
    )
}

export default Home;