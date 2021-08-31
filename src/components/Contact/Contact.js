import React, { useState } from 'react';
import './Contact.css';

import { Button } from '../Button/Button';
import SendIcon from '@material-ui/icons/Send';
import emailjs from 'emailjs-com';


const Contact = () => {
  const [click, setClick] = useState(true);

  const handleClick = () => setClick(!click);
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_g9uwc3g', 'template_rci670h', e.target, 'user_ZDwBobbI1kwHVXohZwLgU')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      alert('Thanks! I will be in touch!');
  }

  return (
    <div className="contact-container" >
      <section className='contact-section'>
        <p className='contact-section-heading'>
          Interested in working together? Let's connect!
        </p>
        <fieldset className='fieldset'> 
            <form className='contact-form' onSubmit={sendEmail}>
              <input className='contact-input' type="text" name="subject" placeholder= 'Subject' required />
              <input className='contact-input' type="text" name="name" placeholder= 'Name' required />
              <input
                className='contact-input'
                name='email'
                type='email'
                placeholder='Your Email'
                required
              />
              <textarea className='contact-input' name="message" placeholder='Message' required/>
              <Button buttonStyle='btn--outline' onClick={handleClick}><SendIcon /></Button>
            </form>
        </fieldset>
      </section>
    </div>
  );
}

export default Contact;