import { Formik, Form, Field } from "formik";
import classes from "./Form.module.css";
import * as yup from "yup";
import ErrorMsg from "./Error/ErrorMsg";

const validationSchema = yup.object({
  name: yup.string().required("*Required field!"),
});

const TaskForm = function (props) {
  return (
    <div className={classes.container}>
      <div className={classes["form-container"]}>
        <Formik
          validationSchema={validationSchema}
          onSubmit={props.submitHandler}
          initialValues={{
            name: "",
            date: "",
            sex: "",
            Mobile: "",
            GovtID: { IDType: "", EnterID: "" },
            GDetails: { Label: "", GName: "" },
            email: "",
            emargencyNumber: "",
            Address: "",
            state: "",
            city: "",
            pincode: "",
            occupation: "",
            religion: "",
            maritalStatus: "",
            bloodGroup: "",
            nationality: "",
          }}
        >
          <Form>
            <label className={classes.header}>Personal Details</label>
            <br /> <br />
            <div className={classes.personal}>
              <div>
                <label className={classes["sub-header"]}>
                  Name<span className={classes.required}>*</span>
                </label>
                <Field
                  className={classes.field}
                  name="name"
                  type="text"
                  placeholder="Enter Name"
                ></Field>
                <ErrorMsg name="name" />
              </div>
              <div>
                {" "}
                <label className={classes["sub-header"]}>
                  Date of birth<span className={classes.required}>*</span>
                </label>
                <Field
                  className={classes.field}
                  name="date"
                  type="date"
                ></Field>
                <ErrorMsg name="name" />
              </div>
              <div>
                <label className={classes["sub-header"]}>
                  Sex<span className={classes.required}>*</span>
                </label>
                <Field
                  className={classes["special-selector"]}
                  name="sex"
                  as="select"
                  defaultValue="default"
                >
                  <option hidden value="default">
                    Enter Sex
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Transgender">Transgender</option>
                </Field>
                <ErrorMsg name="name" />
              </div>
              <div>
                <label className={classes["sub-header"]}>Mobile</label>
                <Field
                  className={classes.field}
                  name="Mobile"
                  type="text"
                  placeholder="Enter Mobile Number"
                ></Field>
              </div>
              <div className={classes.id}>
                <label className={classes["sub-header"]}>Govt Issued ID</label>
                <Field
                  className={classes["special-selector"]}
                  name="GovtID.IdType"
                  as="select"
                  defaultValue="default"
                >
                  <option hidden value="default">
                    ID Type
                  </option>
                  <option value="ID-1">ID-1</option>
                  <option value="ID-2">ID-2</option>
                  <option value="ID-3">ID-3</option>
                  <option value="ID-4">ID-4</option>
                </Field>
                <Field
                  className={classes.field}
                  name="GovtID.EnterID"
                  type="text"
                ></Field>{" "}
              </div>
            </div>
            <br /> <br />
            <label className={classes.header}>Contact Details</label>
            <br /> <br />
            <div className={classes.contact}>
              <div className={classes.gurdian}>
                <label className={classes["sub-header"]}>Gurdian Details</label>
                <Field
                  className={classes["special-selector"]}
                  name="GDetails.Label"
                  as="select"
                  defaultValue="default"
                >
                  <option hidden value="default">
                    Enter Label
                  </option>
                  <option value="Label-1">Label-1</option>
                  <option value="Label-2">Label-2</option>
                </Field>

                <Field
                  className={classes.field}
                  name="GDetails.GName"
                  type="text"
                  placeholder="Enter Gurdian Name"
                ></Field>
              </div>
              <div>
                <label className={classes["sub-header"]}>Email</label>
                <Field
                  className={classes.field}
                  name="email"
                  type="text"
                  placeholder="Enter Email"
                ></Field>
              </div>
              <div className={classes.emergency}>
                <label className={classes["sub-header"]}>
                  Emergency Contact Number
                </label>
                <Field
                  className={classes.field}
                  name="emergencyNumber"
                  type="text"
                  placeholder="Enter Emergency number"
                ></Field>
              </div>
            </div>
            <br /> <br />
            <label className={classes.header}>Address Details</label>
            <br /> <br />
            <div className={classes.address}>
              <div>
                <label className={classes["sub-header"]}>Address</label>
                <Field
                  className={classes.field}
                  name="Address"
                  type="text"
                  placeholder="Enter Address"
                ></Field>
              </div>
              <div>
                <label className={classes["sub-header"]}>State</label>
                <Field
                  className={classes.field}
                  name="State"
                  as="select"
                  defaultValue="default"
                >
                  <option hidden value="default">
                    Enter State
                  </option>
                  <option value="Andhara Pradesh">Andhara Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telegram">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttarkhand">Uttrakhand</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="West Bengal">West Bengal</option>
                </Field>
              </div>
              <div>
                <label className={classes["sub-header"]}>City</label>
                <Field
                  className={classes.field}
                  name="City"
                  type="text"
                  placeholder="Enter city/village"
                ></Field>
              </div>
              <div>
                <label className={classes["sub-header"]}>Country</label>
                <Field
                  className={classes.field}
                  name="country"
                  as="select"
                  defaultValue="default"
                >
                  <option hidden value="default">
                    Country
                  </option>
                  <option value="Afghanistan">Afghanistan</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Bhutan">Bhutan</option>
                  <option value="China">China</option>
                  <option value="India">India</option>
                  <option value="Mayanmar">Mayanmar</option>
                  <option value="Nepal">Nepal</option>
                  <option value="Sri Lanka">Sri Lanka</option>
                </Field>
              </div>
              <div>
                <label className={classes["sub-header"]}>Pincode</label>
                <Field
                  className={classes.field}
                  name="pincode"
                  type="text"
                  placeholder="Enter Pin code"
                ></Field>
              </div>
            </div>
            <br /> <br />
            <label className={classes.header}>Other Details</label>
            <br /> <br />
            <div className={classes.other}>
              <div>
                <label className={classes["sub-header"]}>Occupation</label>
                <Field
                  className={classes.field}
                  name="occupation"
                  type="text"
                  placeholder="Enter Occupation"
                ></Field>
              </div>
              <div>
                <label className={classes["sub-header"]}>Religion</label>
                <Field
                  className={classes.field}
                  name="religion"
                  as="select"
                  defaultValue="default"
                >
                  <option hidden value="default">
                    Enter Religion
                  </option>
                  <option value="Hinduism">Hinduism</option>
                  <option value="Islam">Islam</option>
                  <option value="Sikhism">Sikhism</option>
                  <option value="Christianity">Christianity</option>
                  <option value="Jainism">Jainism</option>
                  <option value="Judaism">Judaism</option>
                </Field>
              </div>
              <div>
                <label className={classes["sub-header"]}>Marital Status</label>
                <Field
                  className={classes["special-selector"]}
                  name="maritalStatus"
                  as="select"
                  defaultValue="default"
                >
                  <option hidden value="default">
                    Enter Marital status
                  </option>
                  <option value="UnMarried">UnMarried</option>
                  <option value="Married">Married</option>
                  <option value="Divorce">Divorce</option>
                </Field>
              </div>
              <div>
                <label className={classes["sub-header"]}>Blood Group</label>
                <Field
                  className={classes.field}
                  name="bloodGroup"
                  as="select"
                  defaultValue="default"
                >
                  <option hidden value="default">
                    Blood Group
                  </option>
                  <option value="0+">O+</option>
                  <option value="0-">O-</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                </Field>
              </div>
              <div>
                <label className={classes["sub-header"]}>Nationality</label>
                <Field
                  className={classes.field}
                  name="nationality"
                  as="select"
                  defaultValue="default"
                >
                  <option hidden value="default">
                    Nationality
                  </option>
                  <option value="Indian">Indian</option>
                  <option value="Nepali">Nepali</option>
                  <option value="Afghanistan">Afghanistani</option>
                  <option value="Sri Lankan">Sri Lankan</option>
                  <option value="Chinese">Chinese</option>
                </Field>
              </div>
            </div>
            <br />
            <br />
            <div className={classes.btn}>
              <button className={classes.cancel} type="button">
                Cancel
              </button>
              <button className={classes.submit} type="submit">
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
export default TaskForm;
