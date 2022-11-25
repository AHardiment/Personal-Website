import { useRef } from "react";
import emailjs from "@emailjs/browser";

const dotenv = require("dotenv");

const ContactForm = () => {
  const form = useRef(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    const currentForm = form.current;
    if (currentForm == null) return;

    emailjs
      .sendForm(
        "service_493r7jf",
        "template_dxrj9db",
        currentForm,
        "RF0mbXinFcqPPz7zF"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact-me md:mt-30 flex items-center justify-around pt-5 md:px-5 md:pt-32 lg:pt-24 ">
      <div className="hidden sm:flex">
        <h1 className=" font-bold md:text-6xl ">Get in touch!</h1>
      </div>
      <form
        className="w-full max-w-sm px-10 md:max-w-lg md:px-0 "
        onSubmit={sendEmail}
        ref={form}
      >
        <div className="-mx-3 mb-6 flex flex-wrap">
          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
            <label
              className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700 dark:text-white"
              htmlFor="grid-first-name"
            >
              First Name
            </label>
            <input
              className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="grid-first-name"
              type="text"
              name="first_name"
            />
          </div>
          <div className="w-full px-3 md:w-1/2">
            <label
              className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700 dark:text-white"
              htmlFor="grid-last-name"
            >
              Last Name
            </label>
            <input
              className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="grid-last-name"
              type="text"
              name="last_name"
            />
          </div>
        </div>
        <div className="-mx-3 mb-6 flex flex-wrap">
          <div className="w-full px-3">
            <label
              className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700 dark:text-white"
              htmlFor="grid-password"
            >
              E-mail
            </label>
            <input
              className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="email"
              type="email"
              name="email"
            />
          </div>
        </div>
        <div className="-mx-3 mb-6 flex flex-wrap">
          <div className="w-full px-3">
            <label
              className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700 dark:text-white"
              htmlFor="grid-password"
            >
              Message
            </label>
            <textarea
              className=" no-resize mb-3 block h-48 w-full resize-none appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="message"
              name="message"
            ></textarea>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            <input
              className="focus:shadow-outline rounded bg-teal-400 py-2 px-4 font-bold text-white shadow hover:bg-teal-400 focus:outline-none"
              type="submit"
              value="Send"
            />
          </div>
          <div className="md:w-2/3"></div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
