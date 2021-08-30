import React from "react";
import "../styles/signin.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import TextField from "@material-ui/core/TextField";
import { useForm, Controller, useFormState } from "react-hook-form";

export default function Signin() {
  const { handleSubmit, control } = useForm({ mode: "onChange" });
  const { isValid } = useFormState({ control });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="login-form">
      <TwitterIcon className="twitter__logo" />
      <h1>Log in to Twitter</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-field-holder">
          <Controller
            name="username"
            control={control}
            defaultValue=""
            rules={{ required: "Username is required" }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                value={value}
                onChange={onChange}
                label="Phone, email, or username"
                variant="filled"
                className="tw_io"
              />
            )}
          />
        </div>
        <div className="form-field-holder">
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{ required: "Password is required" }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                value={value}
                onChange={onChange}
                label="Password"
                variant="filled"
                className="tw_io"
              />
            )}
          />
        </div>
        <button className="primary-btn" disabled={!isValid}>
          Log in
        </button>
      </form>
    </div>
  );
}
