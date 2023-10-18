import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import validator from "validator";
import thinking from "../assets/ponder2.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const form = useRef();
  const [send, setSend] = useState(" ");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_13dyv5m",
        "template_pm32gyh",
        form.current,
        "_57-Wl47HHwkO3oR5"
      )
      .then(
        (result) => {
          setSend("I got your message! I'll get back to you as soon as I can.");
          e.target.reset();
        },
        (error) => {
          setSend(
            "We are unable to send your message, please try again later."
          );
        }
      );
  };

  // eslint-disable-next-line
  const [email, setEmail] = useState("");
  const [emailMessage, setEmailMessage] = useState("");

  function handleEmail(event) {
    let new_Email = event.target.value;
    setEmail(new_Email);
    if (!validator.isEmail(new_Email)) {
      setEmailMessage("Please enter a valid email");
      document.getElementById("button").disabled = true;
    } else {
      setEmailMessage("");
      document.getElementById("button").disabled = false;
    }
  }

  function emptyText() {
    if (
      document.getElementById("name").value === "" ||
      document.getElementById("message").value === ""
    ) {
      document.getElementById("button").disabled = true;
    } else {
      document.getElementById("button").disabled = false;
    }
  }

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div
      name="contact"
      className="h-[700px] md:h-full w-full pt-[110px] bg-almost-black text-light-grey"
    >
      <div className="max-w-screen-lg p-6 mx-auto flex flex-col justify-center h-auto">
        <div className="">
          <h2
            className="font-signature text-4xl font-bold inline "
            data-aos="fade-up"
          >
            contact
          </h2>
          <p className="pt-4" data-aos="fade-up">
            Get in touch if you have any questions or want to chat!
          </p>
        </div>
        <div className="flex flex-row" data-aos="fade-up">
          <div className=" h-full hidden md:block">
            <img
              src={thinking}
              alt="me pondering"
              className="rounded-2xl mr-8 md:h-[450px] "
            />
          </div>

          <div className="w-full md:w-2/3 ml-8 mr-8 md:mr-0 p-8 flex justify-center items-center">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col w-full"
            >
              <input
                type="text"
                name="user_name"
                id="name"
                placeholder="Name"
                className="p-2 bg-transparent border-2 rounded-md text-light-grey focus:outline-none"
              />
              <input
                type="text"
                name="user_email"
                placeholder="Email"
                onChange={handleEmail}
                className="mt-4 mb-1 p-2 bg-transparent border-2 rounded-md text-light-grey focus:outline-none"
              />
              <div className="text-red-400 pb-3">{emailMessage}</div>
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                rows="10"
                className="p-2 bg-transparent border-2 rounded-md text-light-grey focus:outline-none"
              ></textarea>
              <button
                type="submit"
                id="button"
                value="Send"
                onClick={emptyText}
                disabled
                className=" text-light-blue border border-light-blue w-fit px-6 py-3 my-3 flex items-center rounded-md transition ease-in-out duration-500 hover:text-white hover:bg-light-blue cursor-pointer"
              >
                Let's Connect!
              </button>
              <div className="text-medium-blue ">{send}</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
