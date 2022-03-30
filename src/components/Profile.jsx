import { getUser, updateProfile } from "features/Auth/LoginSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const userInfo = useSelector(getUser);
  console.log("userInfo from userProfile", userInfo);
  const dispatch = useDispatch();
  const [Flag, setFlag] = useState(false);
  const [userData, setuserData] = useState(userInfo ?? {});

  useEffect(() => {
    setuserData(userData);
  }, [Flag]);

  const save = () => {
    setFlag(false);
    dispatch(updateProfile(userData));
  };

  const edit = () => {
    setFlag(true);
  };

  const handleChange = (e) => {
    setuserData({ ...userInfo, username: e.target.value });
    // return { ...userInfo, username: e.target.value };
    console.log("sfsf");
  };
  return (
    <div className="d-flex justify-content-center flex-column">
      {!Flag && (
        <>
          <img
            src={
              "https://s3.ap-south-1.amazonaws.com/pip.innovation/" +
              userInfo?.image
            }
            height={50}
            width={50}
          />
          <h3>{userInfo?.username}</h3>
          <button className="btn btn-info" onClick={edit}>
            Edit Profile
          </button>
        </>
      )}

      {Flag && (
        <>
          <img
            src={
              "https://s3.ap-south-1.amazonaws.com/pip.innovation/" +
              userInfo?.image
            }
            height={50}
            width={50}
          />
          {/* <h3>{userInfo?.username}</h3> */}
          <input value={userData?.username} onChange={handleChange} />
          <button className="btn btn-info" onClick={save}>
            save Profile
          </button>
        </>
      )}
    </div>
  );
};

export default Profile;
