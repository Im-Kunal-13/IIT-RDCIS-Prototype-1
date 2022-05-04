import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import AdminList from "./AdminList";
import UsersTab from "./UsersTab";
import Tilt from "react-parallax-tilt";

export default function Users() {
  const { admin } = useSelector((state) => state.auth);
  useEffect(() => {
    // console.log(columns.state);
  }, []);
  return (
    <div className="bg-bgGray px-4 pt-3 min-h-screen">
      {/* HEADER  */}
      <UsersTab admin={admin} />
      {/* USERS  */}
      <Tilt>
        <div className="items-start mt-4 sm:px-4 py-4 px-4 bg-white rounded-lg shadow border">
          <AdminList />
        </div>
      </Tilt>
    </div>
  );
}
