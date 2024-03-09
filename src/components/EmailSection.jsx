import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import GithubIcon from "../assets/icons/github.svg";
import LinkedInIcon from "../assets/icons/linkedin.svg";

const EmailSection = () => {
  const formRef = useRef(null);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pt7i6fe",
        "template_0o2a1qk",
        formRef.current,
        "7fofTmxSDml9Na1_A"
      )
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <div>
      <h2
        className="text-center text-4xl font-bold text-white mt-20 mb-8 md:mb-12"
        id="contact"
      >
        Contact Me
      </h2>

      <section className="grid md:grid-cols-2 my-12 md:my-12 py-20 gap-4">
        <div>
          <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
          <p className="text-[#ADB7BE] mb-4 max-w-md">
            I'm currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I'll try
            my best to get back to you!
          </p>
          <div className="socials flex flex-row gap-2">
            <a href="https://github.com/sas-7">
              <img src={GithubIcon} alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/saurabh-singh-5255a3195/">
              <img src={LinkedInIcon} alt="LinkedIn" />
            </a>
          </div>
        </div>
        <div>
          <form ref={formRef} onSubmit={sendEmail} className="flex flex-col ">
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="text-white block mb-2 text-sm font-medium"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Your Name"
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
    </div>
  );
};

export default EmailSection;
