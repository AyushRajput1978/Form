import { useState } from "react";
import TaskForm from "./COMPONENT/Form";
import "./App.css";
import Users from "./COMPONENT/Users";

function App() {
  const [user, setUser] = useState([]);
  const submitHandlerfn = function (event) {
    console.log(event);
    setUser((prevUsers) => [...prevUsers, event]);
  };
  const useritems = user;
  console.log(useritems);
  const useritem = useritems.map((item) => {
    return (
      <ul>
        <Users
          key={item.Mobile}
          name={item.name}
          sex={item.sex}
          date={item.date}
          Mobile={item.Mobile}
          GovtID={item.EnterID}
          GDetails={item.GName}
          email={item.email}
          emargencyNumber={item.emergencyNumber}
          Address={item.Address}
          state={item.state}
          city={item.city}
          pincode={item.pincode}
          occupation={item.occupation}
          religion={item.religion}
          maritalStatus={item.maritalStatus}
          bloodGroup={item.bloodGroup}
          nationality={item.nationality}
        />
      </ul>
    );
  });
  return (
    <div>
      <h2 className="task-header">TASKS</h2>
      <TaskForm submitHandler={submitHandlerfn} />
      {useritem}
    </div>
  );
}

export default App;
