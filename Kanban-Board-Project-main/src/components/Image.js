import React from "react";

const ProfileImage = ({ name }) => {
  const hereName = name.split(" ");
  const name_First = hereName[0] ? hereName[0][0] : "";
  const name_Last = hereName[1] ? hereName[1][0] : "";

  return (
    <div>
        <span style={{color:'#f2ebeb'}} className="profile-image">
            {name_First}
            {name_Last}
        </span>    
    </div>
  );
};

export default ProfileImage;