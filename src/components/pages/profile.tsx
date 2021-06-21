import React from 'react';
import { useHistory } from "react-router-dom"
import Layout from "../Layout/index";
const Profile = () => {
  const History = useHistory()
  return (
    <>
      <Layout>
        <h2>Welcome to Profile</h2>
        <button onClick={async () => { await History.push("/updateProfile") }}>Update Profile</button>
      </Layout>
    </>);
};

export default Profile;
