import React, { useState, useEffect, useRef } from 'react';
import './FAQ.css'; // Optional: for styling
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqItemsRef = useRef([]);

  const questions = [
    {
      question: "Who is eligible to become a part of Decodecafe Community?",
      answer: "Anyone with a passion for technology, coding, and community-driven initiatives is welcome to join the Decodecafe Community."
    },
    {
      question: "What are the benefits?",
      answer: "As a member of the Decodecafe Community, you gain access to exclusive events, workshops, and resources. You'll also have the opportunity to collaborate on open-source projects and network with like-minded individuals."
    },
    {
      question: "How do I become an Community Member?",
      answer: "To become a Community Member, be active in our community, as recruitment forms are out for new members every 6 months. Once approved, you'll receive an email with further instructions."
    },
    {
      question: "Work of Events Management, Opensouce Contribution and much more",
      answer: "Community members can participate in events management, open-source contributions, and various tech initiatives. There's always something exciting to work on!"
    },
    // Add more questions as needed
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    if (activeIndex !== null) {
      const activeItem = faqItemsRef.current[activeIndex];
      const container = activeItem.parentElement;
      const containerBottom = container.getBoundingClientRect().bottom;
      const itemBottom = activeItem.getBoundingClientRect().bottom;
      const border = activeItem.querySelector('::after');

      if (border) {
        border.style.height = `${containerBottom - itemBottom + 10}px`;
      }
    }
  }, [activeIndex]);

  return (
    <div className="faq">
      <h1>FAQs</h1>
      <div className="faq-container">
        <div className="faq-items">
          {questions.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              style={{ '--index': index }} // Set CSS variable
              ref={(el) => faqItemsRef.current[index] = el}
            >
              <div className="faq-question" onClick={() => toggleAnswer(index)}>
                {item.question}
                <span className="faq-arrow">
                  <i className={`fas fa-chevron-${activeIndex === index ? 'down' : 'up'}`}></i>
                </span>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="faq-image">
          <div className="image-container">
            <img src="/faq-img-4.png" alt="tech" className="faq-image-main" />
            <img src="/faq-img-2.png" alt="tech-alt" className="faq-image-alt" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
