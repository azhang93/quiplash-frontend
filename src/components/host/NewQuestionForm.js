import React, { Component } from 'react';
import { ActionCableConsumer } from 'react-actioncable-provider';
import axios from 'axios';
import { API_ROOT } from '../../constants';

export default class NewQuestionForm extends React.Component {

    state = {
        defaultQuestions: [],
        customQuestions: [],

    }
    componentDidMount(){
        console.log("mounted")
        
    }

    defaultQuestions = () => {
        console.log("Default question button clicked")
        const res = axios.get( `${API_ROOT}/questions`)
        .then(res => {
            console.log('fetched default questions',res)
            
        });
    }

    render() {

        return(
            <div>
                <h1>Pick your questions:</h1>
                <button onClick = {this.defaultQuestions}className ="btn btn-outline-secondary" >Default Questions</button>
                <button className ="btn btn-outline-secondary" >Custom Questions</button>
            </div>

        )
    };



}

