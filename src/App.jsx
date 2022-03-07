import React from "react";
import AppRouter from './router/AppRouter';
import Header from './pages/Header/Header';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <Header />
            <AppRouter />

        </div>



    )
}

export default App;

