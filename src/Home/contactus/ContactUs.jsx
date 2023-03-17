
import React,{useState } from 'react';
import "./contactUs.css";

const ContactUs = () => {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Full Name:", fullName);
        console.log("Email:", email);
        console.log("Subject:", subject);
        console.log("Description:", description);
        // reset the form values
        setFullName("");
        setEmail("");
        setSubject("");
        setDescription("");
      };

  return (
    <>
    <h2 className='contact-us-title'>Contact Us</h2>
    <div className="contact-us-container">
        
      <div className="contact-us-left">
        <img src="../assets/sales.gif" alt="Contact Us" />
      </div>
      <div  className="contact-us-right" onSubmit={handleSubmit}>
        {/* <h2>Contact Us</h2> */}
        <form>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" name="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} required/>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea id="description" rows = "5" name="description" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div >
    </div>
    </>
  );
};

export default ContactUs;