import { useState } from "react";

import styles from "../styles/Footer.module.css";

export default function NewsLetter() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [formSuccess, setFormSuccess] = useState(false);

  const handleInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  const submitForm = (e) => {
    e.preventDefault(); // do not refresh page

    const data = {};

    // turn the form data state into data we can use for form submission

    Object.entries(formData).forEach(([key, value]) => {
      if (key == "email") data[key] = value;
    });

    // post the data to the url of the form

    console.log(data);

    fetch("/api/subscribe", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        accept: "application/json",
      },
    }).then(() => {
      // reset the data
      console.log(`email: ${data.email}`);
      setFormData({
        name: "",
        email: "",
      });
      setFormSuccess(true);
    });
  };

  return (
    <div className="tw-flex tw-text-white tw-flex-col">
      {formSuccess ? (
        <div className="tw-flex tw-justify-center tw-mt-8">Thank you!</div>
      ) : (
        <>
          <p className={styles.signup}>
            Sign up to receive our weekly newsletter
          </p>
          <form
            className="tw-flex tw-flex-col"
            action="/subscribe"
            method="post"
            onSubmit={submitForm}
          >
            <input
              className="tw-text-black tw-mt-4 tw-h-10 tw-w-3/4 tw-p-4"
              type="text"
              id="email"
              name="email"
              onChange={handleInput}
            />
            <button
              className="tw-transition tw-ease-in-out tw-delay-150 tw-border-white tw-rounded-full tw-border-solid tw-border-2 tw-mt-4 tw-w-1/2 tw-h-12 hover:tw-bg-white hover:tw-text-ieeeorange"
              type="submit"
            >
              <span className={styles.font__text}>Sign Up</span>
            </button>
          </form>
        </>
      )}
    </div>
  );
}
