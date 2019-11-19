import React, {Component} from 'react';

import './Contact.css';

class Contact extends Component {
    state = {
        name: '',
        email: '',
        message: '',
        submitted: false,
    }

    handleNameChange = (e) =>{
        this.setState({name: e.target.value});
    }

    handleEmailChange= (e) => {
        this.setState({email: e.target.value});
    }

    handleMessageChange = (e) =>{
        this.setState({message: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState((prevState) => {
            return {submitted: !this.state.submitted}
        });
    }

    render(){
        const cardStyle = {
            height: '4vh',
            width: '60vw',
            margin: '15px auto',
            padding: '15px',
            textAlign: 'center',
            background: 'black',
            textShadow: '0px 10px 10px white',
            fontSize: '2.5vh',
            color: 'white',
            border: '2px dotted white',
        }
        return (
            <div style={{marginTop: '56px', marginBottom: '74px'}}>
                <div className='image-container' style={{backgroundImage: `url('https://res.cloudinary.com/nexticus-cloud/image/upload/o_60/v1573067027/OBtrio.jpg')`}}><h1 className='contact--header'>CONTACT US</h1></div>
                <hr/>
                <div style={cardStyle}>Please fill out the form below and we'll get back to you ASAP!</div>
                <hr/>
                <form>

                    <input className='contact-input' type='text' value={this.state.name} name='name' onChange={this.handleNameChange} placeholder='Full Name' />

                    <input className='contact-input' type='text' value={this.state.email} name='email' onChange={this.handleEmailChange}
                    placeholder='E-mail Address' />

                    <textarea type='text' value={this.state.message} name='message' onChange={this.handleMessageChange} placeholder='Type your message here...'/>


                    <button type='button' onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}

export default Contact;