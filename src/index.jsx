import React, { Component } from 'react';
import ReactDOM from "react-dom"
import faker from 'faker';
import Clients from "./components/Clients"
import 'bootstrap/dist/css/bootstrap.min.css';
import SimpleMap from "./components/googleMap"
    
const rand_id = faker.datatype.uuid()
const api = process.env.REACT_APP_API_KEY



const App = () => {
    return <div className="container ">
    <div className="d-flex justify-content-center mt-3">
    <button onClick={() => window.location.reload()} className="btn btn-outline-success">👤  Générer un nouveau profil</button>
    </div>
    <div id="main">
    <Clients key ={rand_id}/>
    </div>
    </div>
}





ReactDOM.render(<App/>,document.getElementById('root'))


