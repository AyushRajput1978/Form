import { ErrorMessage } from "formik";
import classes from "./Error.module.css";

const ErrorMsg = function () {
  return (
    <div className={classes["error-msg"]}>
      <ErrorMessage name="name" />
    </div>
  );
};
export default ErrorMsg;
