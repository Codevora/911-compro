"use client";

import React from "react";
import {useForm, ValidationError} from "@formspree/react";

function ContactForm() {
 const [state, handleSubmit] = useForm("xkggkvvo");
 if (state.succeeded) {
  return <p>Thanks for joining!</p>;
 }
 return (
  <div className="bg-white h-screen py-24 px-24">
   <div className=" bg-gradient-to-br from-zinc-900 to-zinc-600 rounded-lg h-auto max-w-sm px-3 py-3 text-white">
    <form onSubmit={handleSubmit}>
     <label
      htmlFor="Name"
      className="font-semibold">
      Name
     </label>
     <br />
     <input
      required
      id="Name"
      type="text"
      name="Name"
      className="bg-white text-black w-full py-1 px-2 rounded-lg my-2"
      placeholder="Your name"
     />
     <ValidationError
      prefix="Name"
      field="Name"
      errors={state.errors}
     />{" "}
     <br />
     <label
      htmlFor="Email"
      className="font-semibold">
      Email Address
     </label>
     <br />
     <input
      required
      id="Email"
      type="Email"
      name="Email"
      className="bg-white text-black w-full py-1 px-2 rounded-lg my-2"
      placeholder="Your email address"
     />
     <ValidationError
      prefix="Email"
      field="Email"
      errors={state.errors}
     />{" "}
     <br />
     <label
      htmlFor="Phone Number"
      className="font-semibold">
      Phone Number
     </label>
     <br />
     <input
      required
      id="telephone"
      type="tel"
      name="Phone Number"
      className="bg-white text-black w-full py-1 px-2 rounded-lg my-2"
      placeholder="Your phone number"
     />
     <ValidationError
      prefix="Phone Number"
      field="Phone Number"
      errors={state.errors}
     />{" "}
     <br />
     <label
      htmlFor="Message"
      className="font-semibold">
      Message
     </label>{" "}
     <br />
     <textarea
      required
      id="Message"
      name="Message"
      rows={4}
      className="w-full bg-white text-black py-1 px-2 rounded-lg my-2"
      placeholder="Your message here"
     />{" "}
     <br />
     <ValidationError
      prefix="Message"
      field="Message"
      errors={state.errors}
     />
     <button
      type="submit"
      disabled={state.submitting}
      className="bg-slate-900 text-white px-2 py-1 rounded-lg mt-1 mx-[82%]">
      Submit
     </button>
    </form>
   </div>
  </div>
 );
}

function App() {
 return <ContactForm />;
}

export default App;
