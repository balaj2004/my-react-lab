import React from "react";
import ProfileCard from "./component/profilecard";

const App = () => {
  return (
    <div>
      <h1>PROFILE CARD </h1>
      <ProfileCard 
        name= "Rafay" 
        age={20} 
        occupation= "Student" 
        location= "Pakistan " 
      />
    </div>
  );
};

export default App;
