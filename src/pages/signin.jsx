import React, { useState } from "react";
import "../styles/signin.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import TextField from "@material-ui/core/TextField";
import { useForm, Controller, useFormState } from "react-hook-form";
import { auth } from "../db_core/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Alert } from "../components/Alert";
import { useDispatch } from "react-redux";
import { setUser } from "../store/actions/userActions";
import { useHistory } from "react-router";

export default function Signin() {
  const { handleSubmit, control } = useForm({ mode: "onChange" });
  const { isValid } = useFormState({ control });
  const dispatch = useDispatch();
  const [snackbar, toggleSnackbar] = useState(false);
  const history = useHistory();

  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(auth, data.username, data.password)
      .then((res) => {
        const userData = {
          uid: res.user.uid,
          name: "Subham Bhattacharya",
          phone: 7001459783,
          email: "subhambhattacharya700@gmail.com",
          username: "subx",
          profile_picture: "",
        };
        localStorage.setItem("tuser", JSON.stringify(userData));
        dispatch(setUser(userData));
        history.replace("/");
      })
      .catch((err) => toggleSnackbar(true));
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

      {snackbar && (
        <Alert
          message="The email and password you entered did not match our records. Please double-check and try again."
          autoCloseTimer={3000}
          closeAlert={toggleSnackbar}
        />
      )}
    </div>
  );
}
