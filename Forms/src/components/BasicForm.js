import useInput from "../hooks/use-input";

const BasicForm = () => {
  const isNotEmpty = (value) => value.trim() !== "";
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: enteredFirstNameHasError,
    valueChangeHandler: firstNameChangedHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: fnReset,
  } = useInput(isNotEmpty);

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: enteredLastNameHasError,
    valueChangeHandler: lastNameChangedHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: lnReset,
  } = useInput(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: enteredEmailHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: eReset,
  } = useInput(isNotEmpty);

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    fnReset();
    lnReset();
    eReset();

    console.log("Name: " + enteredFirstName + " " + enteredLastName);
    console.log("Email: " + enteredEmail);
  };

  let formIsValid = false;
  if (
    enteredFirstNameIsValid &&
    enteredEmailIsValid &&
    enteredLastNameIsValid
  ) {
    formIsValid = true;
  }
  const firstNameInputClasses = enteredFirstNameHasError
    ? "form-control invalid"
    : "form-control";

  const lastNameInputClasses = enteredLastNameHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = enteredEmailHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredFirstName}
            onChange={firstNameChangedHandler}
            onBlur={firstNameBlurHandler}
          />
          {enteredFirstNameHasError && (
            <p className="error-text">First name must not be empty</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={enteredLastName}
            onChange={lastNameChangedHandler}
            onBlur={lastNameBlurHandler}
          />
          {enteredLastNameHasError && (
            <p className="error-text">Last name must not be empty</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={enteredEmail}
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
        />
        {enteredEmailHasError && (
          <p className="error-text">Email must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
