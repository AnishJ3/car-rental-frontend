import React, { useState } from 'react';
import './FAQ.css'; // Make sure to create a CSS file for styles

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What services do you provide?",
      answer: "We provide a range of roadside assistance services, including towing, tire changes, fuel delivery, and lockout services."
    },
    {
      question: "How can I request assistance?",
      answer: "You can request assistance by calling our hotline or using our mobile app to submit a service request."
    },
    {
      question: "What are your hours of operation?",
      answer: "Our services are available 24/7 to assist you whenever you need help."
    },
    {
      question: "Do you cover all areas?",
      answer: "We cover a wide range of areas, but please check our service map or contact us for more details."
    },
    {
      question: "How do I track my service request?",
      answer: "Once you submit a request, you will receive a confirmation message with a tracking link to monitor the status of your service."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div className="faq-item" key={index}>
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            <h4>{faq.question}</h4>
            <span className={`faq-icon ${activeIndex === index ? 'active' : ''}`}>▼</span>
          </div>
          {activeIndex === index && (
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default FAQ;
