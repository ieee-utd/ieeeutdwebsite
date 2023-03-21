import { useState } from "react";
import styles from "@/styles/WhoWeAre.module.css";

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
    <div className={styles.Signup__container}>
      <div className={styles.inner_left}>
        <div>
          <p className={styles.Signup__message}>
            Sign up to receive our weekly newsletter!
          </p>

          <form
            className="tw-flex tw-flex-col"
            action="/subscribe"
            method="post"
            onSubmit={submitForm}
          >
            <input
              className="tw-border-white tw-rounded-full tw-border-solid tw-border-2 tw-mt-8 tw-w-1/2 tw-h-12 tw-ml-10 tw-text-black tw-p-4"
              type="text"
              id="email"
              name="email"
              onChange={handleInput}
            />
            {formSuccess ? (
              <div className="tw-ml-10 tw-mt-6 tw-text-lg ">
                Check your email for an invite to the mailing list!
              </div>
            ) : (
              <button
                className="tw-ml-10 tw-transition tw-ease-in-out tw-delay-150 tw-border-white tw-rounded-full tw-border-solid tw-border-2 tw-mt-6 tw-w-1/4 tw-h-12 hover:tw-bg-white hover:tw-text-ieeeblue"
                type="submit"
              >
                <span className={styles.Signup__text}>Sign Up</span>
              </button>
            )}
          </form>
        </div>
      </div>
      <div className={styles.inner_right}>
        <p className={styles.inner_right_message}>
          Stay up to date with weekly events, tips, guides and all things
          pertaining to IEEE UTD!
        </p>
      </div>
    </div>
  );
}
