import React from 'react';

const Contact = () => {
    return ( 
    <div className='contentdiv-contact'>
        <div className="contact-title"><h1>Contact</h1></div>
        <div className="form-center">
            <form action="https://formsubmit.co/d6ad12ca96405dd6344caaf752f31ef5" method="POST">
                <input type="text" name="_honey" style={{"display": "none"}} ></input>

                <input type="hidden" name="_captcha" value="false" ></input>

                <input type="hidden" name="_next" value="http://localhost:3000/Contact" ></input>
                First Name:<br/>
                <input type="text" size="19" name="Contact-First-Name" required minLength="1"></input><br/><br/>
                Last Name:<br/>
                <input type="text" size="19" name="Contact-Last-Name" required minLength="1"></input><br/><br/>
                Email:<br/>
                <input type="email" name="Contact-Email" required minLength="1"></input><br/><br/> 
                Message:<br/> 
                <textarea name="Contact-Message" rows="6" cols="20" required minLength="1">
                </textarea><br/><br/> 
                <button type="submit" value="Submit">Send</button>
            </form> 
        </div>
    </div>
    )
}

export default Contact;
