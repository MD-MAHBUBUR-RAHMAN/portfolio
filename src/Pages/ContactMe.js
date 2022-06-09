import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_e7ov7oj",
        "template_u5f1s86",
        form.current,
        "gnYumDzqPTNf-tGJC"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="md:w-3/4 mx-auto">
      <h3 className="text-center font-bold md:text-3xl mt-5">Contact Me</h3>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col mt-5 px-5 md:w-3/4 mx-auto"
      >
        <label>Name</label>
        <input className="border" required type="text" name="user_name " />
        <br />
        <label>Email</label>
        <input className="border" required type="email" name="user_email" />
        <br />
        <label>Message</label>
        <textarea className="border h-56" required name="message" />
        <br />
        <div className="inline-block">
          <button
            className="bg-slate-800 text-white cursor-pointer text-2xl py-2 px-10 rounded"
            type="submit"
            value="Send"
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactMe;
