import React, {Component} from 'react';

import './Contact.css';

class Contact extends Component {
    state = {

    }

    render(){
        return (
            <div style={{marginTop: '56px', marginBottom: '74px'}}>
                <div className='image-container' style={{backgroundImage: `url('https://res.cloudinary.com/nexticus-cloud/image/upload/o_60/v1573067027/OBtrio.jpg')`}}><h1 className='contact--header'>CONTACT US</h1></div>
                
                <form>
                    <label>
                        Name:
                        <input type='text' name='name'/>
                    </label>
                    <input type='submit' value='Submit'/>
                </form>
            </div>
        )
    }
}

export default Contact;