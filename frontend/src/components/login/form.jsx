import { useState } from "react";
import styles from "./style.css";

const Login = props => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onUpdateField = e => {
    const nextFormState = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextFormState);
  };

  const onSubmitForm = e => {
    e.preventDefault();
    alert(JSON.stringify(form, null, 2));
  };

  return (
    <form className={'form'} onSubmit={onSubmitForm}>
      <div className={'formGroup'}>
        <label className={'formLabel'}>Email</label>
        <input
          className={'formField'}
          type="text"
          aria-label="Email field"
          name="email"
          value={form.email}
          onChange={onUpdateField}
        />
      </div>
      <div className={'formGroup'}>
        <label className={'formLabel'}>Password</label>
        <input
          className={'formField'}
          type="password"
          aria-label="Password field"
          name="password"
          value={form.password}
          onChange={onUpdateField}
        />
      </div>
      <div className={'formActions'}>
        <button className={'formSubmitBtn'} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Login;