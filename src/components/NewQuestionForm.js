import React, { Component } from 'react';

import axios from 'axios';
import { API_ROOT } from '../constants';

export default class NewQuestionForm extends React.Component {

    state = {
        new_question: '',
        answer: '',
        id: '',
        // id: ''
        // question2: "",
        // question3: "",
        // question4: "",
    }
    componentDidMount(){
        console.log(this.props.bankid)
        // this.setState({id: this.props.bankid})
        // this.setState({id: this.props.match.params.id})
    }

    handleInput = (e) => {

        this.setState({
            [e.target.name]: e.target.value 
        });
        console.log(this.state.name);
    }

    handleSubmit= async (e) =>{
        e.preventDefault()
        let token = "Bearer " + localStorage.getItem("jwt");
        console.log('submit clicked');
        try {
            const res = await axios.post(`${API_ROOT}/questionbanks/${this.props.bankid}/createquestions`, this.state,{headers: { 'Authorization' : token }})
            console.log('post newQuestionbank ', res.data);
        } catch (err) {
            console.log('Error making new question: ', err);
        }

    }
   
  
    render (){

        return (
            <form onSubmit={this.handleSubmit}>
              
                <div className="form-input-container">
                    <label>Question</label>
                    <input type="text" name="question" placeholder="Add your question" onChange={this.handleInput}/>
                </div>
                {/* <div className="form-input-container">
                    <label>Default Answer</label>
                    <input type="text" name="answer" placeholder="Add a Default Answer" onChange={this.handleInput}/>
                </div> */}
               
                <button>Create</button>
            
            </form>
        )
    }

}
