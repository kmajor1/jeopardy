import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

 export class Confirmation extends Component {
    continue = event => {
        event.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { handleChange } = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter Player Details" />
                    <TextField 
                    hintText = "Enter Your First Name"
                    floatingLabelText = "First Name"
                    onChange = {handleChange('firstName')}
                     />
                    <br/>

                    <TextField 
                    hintText = "Enter Your Email"
                    floatingLabelText = "Email"
                    onChange = {handleChange('email')}
                     />
                    <br/>

                    <RaisedButton
                    label="Continue"
                    primary={true}
                    styles={styles.button}
                    onClick={this.continue}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
 }


 const styles = {
     button: {
         margin: 20
     }
 }
export default Confirmation