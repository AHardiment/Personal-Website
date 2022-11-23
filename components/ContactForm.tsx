import { useRef } from "react";
import emailjs from "@emailjs/browser";

const dotenv = require("dotenv");
dotenv.config();

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
          console.log(PUBLIC_KEY);
          console.log(error.text);
        }
      );
  };
  return (
    <div className="md:mt-30 flex items-center justify-center pt-28 lg:mt-5 ">
      <form
        className="w-full max-w-sm md:max-w-lg "
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
              placeholder="Jane"
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
              placeholder="Doe"
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