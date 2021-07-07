import React from 'react';
const [formState, setFormState] = useState({ name: '', email: '', message: ''});

function ContactForm() {

    const { name,email,message } = formState;

    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })
    }
    console.log(formstate);
    
    return (
        <section>
            <h1>Contact me</h1>
            <form id="contact-form">
            <div>
  <label htmlFor="name">Name:</label>
  <input type="text" defaultValue={name} onChange={handleChange} name="name" />
</div>
<div>
  <label htmlFor="email">Email address:</label>
  <input type="email" defaultValue={emai} name="email" onChange={handleChange} />
</div>
<div>
  <label htmlFor="message">Message:</label>
  <textarea name="message" defaultValue={message} onChange={handleChange} rows="5" />
</div>
<button type="submit">Submit</button>
            </form>
        </section>
    )

}

export default ContactForm 
