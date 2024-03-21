import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaGoodreads } from 'react-icons/fa';
import { SiGooglescholar } from "react-icons/si";
import './Contact.css'; // Make sure this path is correct

const ICON_SIZE = 50;
const ICON_COLOR = "white"; // Define the color for the icons

function Contact() {
  return (
    <div className="container">
      <h1 className="title">Let's Connect!</h1>
      <div className="icons-container">
        <a href="https://scholar.google.com/citations?user=nEJaToQAAAAJ&hl=en&oi=ao" target="_blank" rel="noopener noreferrer">
          <SiGooglescholar size={ICON_SIZE} color={ICON_COLOR} />
        </a>
        <a href="https://github.com/aLehav" target="_blank" rel="noopener noreferrer">
          <FaGithub size={ICON_SIZE} color={ICON_COLOR} />
        </a>
        <a href="https://www.linkedin.com/in/adam-lehavi/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={ICON_SIZE} color={ICON_COLOR} />
        </a>
        <a href="mailto:alehavi@usc.edu">
          <FaEnvelope size={ICON_SIZE} color={ICON_COLOR} />
        </a>
        <a href="https://www.goodreads.com/user/show/170343228-adam-lehavi" target="_blank" rel="noopener noreferrer">
          <FaGoodreads size={ICON_SIZE} color={ICON_COLOR} />
        </a>
      </div>
    </div>
  );
}

export default Contact;
