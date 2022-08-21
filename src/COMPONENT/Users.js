import classes from "./Users.module.css";
const Users = function (props) {
  return (
    <div className={classes["user-container"]}>
      <h2 className={classes["detail-header"]}>Personal Details</h2>
      <div className={classes.details}>
        <li>
          <span className={classes.title}>Name:</span>
          {props.name}
        </li>
        <li>
          <span className={classes.title}>Date of Birth:</span>
          {props.date}
        </li>
        <li>
          <span className={classes.title}>Sex:</span>
          {props.sex}
        </li>
        <li>
          <span className={classes.title}>Mobile Number:</span>
          {props.Mobile}
        </li>
        <li>
          <span className={classes.title}>Govt ID:</span>
          {props.GovtID}
        </li>
      </div>
      <h2 className={classes["detail-header"]}>Contact Details</h2>
      <div className={classes.details}>
        <li>
          <span className={classes.title}>Gurdian Details:</span>
          {props.GDetails}
        </li>
        <li>
          <span className={classes.title}>Email:</span>
          {props.email}
        </li>
        <li>
          <span className={classes.title}>EmergencyNumber:</span>
          {props.emergencyNumber}
        </li>
      </div>
      <h2 className={classes["detail-header"]}>Address Details</h2>
      <div className={classes.details}>
        <li>
          <span className={classes.title}>Address:</span>
          {props.Address}
        </li>
        <li>
          <span className={classes.title}>State:</span>
          {props.state}
        </li>
        <li>
          <span className={classes.title}>City:</span>
          {props.city}
        </li>
        <li>
          <span className={classes.title}>Pincode:</span>
          {props.pincode}
        </li>
      </div>
      <h2 className={classes["detail-header"]}>Other Details</h2>
      <div className={classes.details}>
        <li>
          <span className={classes.title}>Occupation:</span>
          {props.occupation}
        </li>
        <li>
          <span className={classes.title}>Religion:</span>
          {props.religion}
        </li>
        <li>
          <span className={classes.title}>MaritalStatus:</span>
          {props.maritalStatus}
        </li>
        <li>
          <span className={classes.title}>BloodGroup:</span>
          {props.bloodGroup}
        </li>
        <li>
          <span className={classes.title}>Nationality:</span>
          {props.nationality}
        </li>
      </div>
    </div>
  );
};
export default Users;
