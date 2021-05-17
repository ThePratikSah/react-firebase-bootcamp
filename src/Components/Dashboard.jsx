import React, {useContext} from "react";
import UserStore from "../Store";

function Dashboard() {

  const { userData } = useContext(UserStore);

  return (
    <div>
      <h1>
        Welcome <span className="text-primary">{userData.data.email}</span>
      </h1>
    </div>
  );
}

export default Dashboard;
