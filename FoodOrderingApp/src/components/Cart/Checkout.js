import { useRef, useState } from "react";

import style from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isNotFiveChars = (value) => value.trim().length !== 5;

export default function Checkout(props) {
  const [formInputValidity, setFormInputsValidty] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalCodeIsValid = !isNotFiveChars(enteredPostalCode);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormInputsValidty({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalCode,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalCodeIsValid &&
      enteredCityIsValid;

    if (!formIsValid) {
      return;
      //Submit Cart Data
    }
    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostalCode,
    });
  };

  const formControlName = `${style.control} ${
    formInputValidity.name ? "" : style.invalid
  }`;
  const formControlStreet = `${style.control} ${
    formInputValidity.street ? "" : style.invalid
  }`;
  const formControlPostalCode = `${style.control} ${
    formInputValidity.postalCode ? "" : style.invalid
  }`;
  const formControlCity = `${style.control} ${
    formInputValidity.city ? "" : style.invalid
  }`;

  return (
    <form className={style.form} onSubmit={confirmHandler}>
      <div className={formControlName}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputValidity.name && <p>Please enter a valid name.</p>}
      </div>
      <div className={formControlStreet}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputValidity.street && <p>Please enter a valid street</p>}
      </div>
      <div className={formControlPostalCode}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
        {!formInputValidity.postalCode && (
          <p>Please enter a valid postal code</p>
        )}
      </div>
      <div className={formControlCity}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputValidity.city && <p>Please enter a valid city</p>}
      </div>
      <div className={style.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={style.submit}>Confirm</button>
      </div>
    </form>
  );
}
