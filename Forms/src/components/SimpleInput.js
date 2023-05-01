import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  //Checks Each Key Entered
  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
    console.log(e.target.value);
  };

  //Checks Form If Name Is Valid (Any Input That Is Not "")
  const formSubmissionHandler = (e) => {
    e.preventDefault();
    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }
    console.log("Name: " + enteredName);
    setEnteredName("");
    setEnteredNameTouched(false);
  };

  //Click Inside Input Box and Outside W/ Out Input Displays Error
  const nameInputBlurHandler = (e) => {
    setEnteredNameTouched(true);
    if (enteredName.trim() === "") {
      return;
    }
  };

  // Sets Style Based On Boolean
  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control ";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
