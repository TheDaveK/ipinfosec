import { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    problem: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // Replace with your Google Apps Script URL
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyMomeaRkKdGmfi2M3GLzX-KIJJqrE_iKm2Mez3lSu-3_r1V9GQw8e2-qhJmo8Z9LVTtA/exec';
    
    try {
      // Create FormData object and append all fields
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('problem', formData.problem);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('timestamp', new Date().toISOString());

      const response = await fetch(scriptURL, {
        method: 'POST',
        body: formDataToSend,
        mode: 'no-cors' // Important for Google Apps Script
      });

      // Since we're using no-cors, we can't read the response
      // But we assume success if no error is thrown
      setSubmitStatus('success');
      alert('Success! Your message has been sent.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        problem: '',
        message: ''
      });

    } catch (error) {
      console.error('Error!', error);
      setSubmitStatus('error');
      alert('Error! Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <h2>Contact Us</h2>
        
        <div className="form-group">
          <label htmlFor="name">Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="form-group">
          <label htmlFor="problem">Problem Type & Service plan *</label>
          <select
            id="problem"
            name="problem"
            value={formData.problem}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          >
            <option value="">Select a problem type & Service plan</option>
            <option value="Technical">Technical Issue</option>
            <option value="Billing">Billing Issue</option>
            <option value="General">General Inquiry</option>
            <option value="Penetration Testing">Penetration Testing</option>
            <option value="Vulnerability Assessment">Vulnerability Assessment</option>
            <option value="Ransomware Data Recovery">Ransomware Data Recovery</option>
            <option value="Malware Analysis">Malware Analysis</option>
            <option value="Technical Support">Technical Support</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            placeholder="Please describe your issue in detail... "
          ></textarea>
        </div>

        <button 
          type="submit" 
          className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        {submitStatus === 'success' && (
          <div className="status-message success">
            Message sent successfully!
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="status-message error">
            Failed to send message. Please try again.
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;