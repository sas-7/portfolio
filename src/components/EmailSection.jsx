import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import GithubIcon from "../../public/github.svg";
import LinkedInIcon from "../../public/linkedin.svg";

const EmailSection = () => {
  const formRef = useRef(null); // Reference to the form element
  const [error, setError] = useState(false); // State to track error
  const [success, setSuccess] = useState(false); // State to track success

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        formRef.current, // Reference to the form
        "YOUR_USER_ID" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          setSuccess(true); // Set success state to true
        },
        (error) => {
          setError(true); // Set error state to true
        }
      );
  };

  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <a href="https://github.com">
            <img src={GithubIcon} alt="GitHub" />
          </a>
          <a href="https://linkedin.com">
            <img src={LinkedInIcon} alt="LinkedIn" />
          </a>
        </div>
      </div>
      <div>
        <form
          ref={formRef} // Assign formRef to the form element
          onSubmit={sendEmail} // Call sendEmail function on form submission
          className="flex flex-col "
        >
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="niklaus@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block mb-2 text-sm font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </div>
          {error && <p>Error sending message</p>}
          {/* Display error message if error state is true */}
          {success && <p>Message sent successfully!</p>}
          {/* Display success message if success state is true */}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
