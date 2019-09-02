
import React from 'react';
import Header from '../../components/Header'

const Home = () => {
    return (
        <div>
            <Header/>
            <div> hello home</div>
            <button onClick={() => {alert('click')}}>click</button>
        </div>
    )
}

export default Home;