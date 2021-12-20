import React, { useState, useRef } from "react";
import { formFields } from "../utils/constants";
import ErrorMessage from "../components/ErrorMessage";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { formAction } from "../actions/form-actions";

const FormScreen = () => {
  const formRef = useRef(null);
  const [skills, setSkills] = useState([]);
  const [skillsError, setSkillsError] = useState("");
  const [experienceError, setExperienceError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;

    if (skills.length === 0) {
      setSkillsError("Skills are required!");
      const titleElement = document.getElementById("skills");
      titleElement.scrollIntoView({ behavior: "smooth" });
      return;
    }
    if (form["experience"].value.trim() === "") {
      setExperienceError("Experience is required!");
      const titleElement = document.getElementById("experience");
      titleElement.scrollIntoView({ behavior: "smooth" });
      return;
    }

    const data = {
      firstName: form["firstName"].value,
      lastName: form["lastName"].value,
      email: form["email"].value,
      address1: form["address1"].value,
      city: form["city"].value,
      state: form["state"].value,
      zip: form["zip"].value,
      phone: form["phone"].value,
      jobTitle: form["jobTitle"].value,
      experience: form["experience"].value,
      skills: skills,
      reason: form["reason"].value,
    };
    dispatch(formAction(data));
    navigate("/thankyou");
  };

  const handleSkills = (e) => {
    if (skills.includes(e.target.value)) {
      skills.splice(skills.indexOf(e.target.value), 1);
      return;
    }
    setSkillsError("");

    let arr = [];
    arr.push(...skills, e.target.value);
    setSkills(arr);
  };

  return (
    <>
      <div className="container">
        <h1>Demo Form</h1>
        <div className="formItems">
          <form ref={formRef} onSubmit={handleFormSubmit}>
            {formFields.map((item) =>
              item.type === "text" ? (
                <input
                  type={item.type}
                  id={item.id}
                  onChange={(e) =>
                    setFormState({ ...formState, firstName: e.target.value })
                  }
                  placeholder={item.placeholder}
                  className="customInput"
                  required={item.required ? true : false}
                />
              ) : item.type === "select" ? (
                <select
                  id={item.id}
                  name={item.name}
                  className="customInput"
                  style={{ background: "white" }}
                >
                  <option value="" disabled selected>
                    Please select job title
                  </option>
                  {item.options.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              ) : item.type === "radio" ? (
                <div id={item.id} className="exerienceRadios">
                  <p>Please choose number of years you've been developing</p>
                  {item.options.map((item) => (
                    <div key={item.id}>
                      <input
                        type="radio"
                        value={item.value}
                        id={item.inputId}
                        onChange={() => setExperienceError("")}
                        name="experience"
                      />
                      <label htmlFor={item.inputId}>{item.value}</label>
                    </div>
                  ))}
                  {experienceError ? (
                    <ErrorMessage errorMessage={experienceError} />
                  ) : null}
                </div>
              ) : item.type === "checkbox" ? (
                <div
                  id={item.id}
                  onChange={handleSkills}
                  className="skillsCheckboxes"
                >
                  <p>Please select coding experience - select all that apply</p>

                  {item.options.map((item) => (
                    <div key={item.id}>
                      <input
                        type="checkbox"
                        id={item.inputId}
                        name={item.name}
                        value={item.value}
                      />
                      <label htmlFor={item.inputId}> {item.value}</label>
                    </div>
                  ))}
                  {skillsError ? (
                    <ErrorMessage errorMessage={skillsError} />
                  ) : null}
                </div>
              ) : item.type === "textarea" ? (
                <input
                  type="textarea"
                  id={item.id}
                  placeholder={item.placeholder}
                  className="customInput"
                  style={{ height: "100px" }}
                  required={item.required ? true : false}
                />
              ) : null
            )}
            <div>
              <input
                type="checkbox"
                id="acknowledge"
                name="acknowledge"
                value="acknowledge"
                required
              />
              <label htmlFor="acknowledge">
                I acknowledge that this is only a test
              </label>
            </div>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default FormScreen;
