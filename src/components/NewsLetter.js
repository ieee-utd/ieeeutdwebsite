import { useState } from "react";

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

    const formURL = e.target.action;

    const data = new FormData();

    // turn the form data state into data we can use for form submission

    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    // post the data to the url of the form

    fetch(formURL, {
      method: "POST",
      body: data,
      headers: {
        accept: "application/json",
      },
    }).then(() => {
      // reset the data
      console.log(`name_field: ${data.name}`);
      setFormData({
        name: "",
        email: "",
      });
      setFormSuccess(true);
    });
  };

  return (
    <div className="flex text-white flex-col">
      {formSuccess ? (
        <div className="flex justify-center mt-8">Thank you!</div>
      ) : (
        <>
          <p>Sign up to receive our weekly newsletter</p>
          <form
            className="flex flex-col"
            action="/subscribe"
            method="post"
            onSubmit={submitForm}
          >
            <input
              className="text-black mt-4 h-10 w-3/4 p-4"
              type="text"
              id="email"
              name="email"
              onChange={handleInput}
            />
            <button
              className="transition ease-in-out delay-150 border-white rounded-full border-solid border-2 mt-4 w-1/2 h-12 hover:bg-white hover:text-ieeeorange"
              type="submit"
            >
              Sign Up
            </button>
          </form>
        </>
      )}
    </div>
  );
}
