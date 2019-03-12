 import React, { Component } from 'react';
 import Confirmation from './Confirmation';



 export class UserForm extends Component {

    state = {
        step: 1,
        firstName: '',
        email: ''
    }

    // proceed to the next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    // go back to previous step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    // handles field changes
    handleChange = input => event => {
        this.setState({[input]: event.target.value});
    }

     render () {
         const { step } = this.state;
         const {firstName, email} = this.state;
         const values = {firstName, email}
        
        switch (step) {
            case 1:
               return (
                   <Confirmation 
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    value={values}
                   />
               );
            case 2: 
                    return <h1>Success</h1>
           }
        }
    }
    

export default UserForm