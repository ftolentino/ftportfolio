import React from 'react';
import './Contact.css';

import { Button } from '../Button/Button';
import emailjs from 'emailjs-com';


const Contact = () => {
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_g9uwc3g', 'template_rci670h', e.target, 'user_ZDwBobbI1kwHVXohZwLgU')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  return (
    <div className="contact-container" >
      <section className='contact-section'>
        <p className='contact-section-heading'>
          Interested in working together? Let's connect!
        </p>
        <div className='input-areas'>
          <form className='contact-form' onSubmit={sendEmail}>
            <input className='contact-input' type="text" name="subject" placeholder= 'Subject' />
            <input className='contact-input' type="text" name="name" placeholder= 'Name' />
            <input
              className='contact-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <textarea className='contact-input' name="message" placeholder='Message'/>
            <Button buttonStyle='btn--outline'>Submit</Button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;