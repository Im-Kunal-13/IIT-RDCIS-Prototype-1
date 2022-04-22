import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAdmins, reset } from "../../../features/admin/adminSlice";
import AdminListItem from "./AdminListItem";

export default function AdminList() {
  // For Navigation
  const navigate = useNavigate();
  // For Dispatching.
  const dispatch = useDispatch();

  // Taking out variables from the state.
  const { admin } = useSelector((state) => state.auth);
  const { admins, isLoading, isError, message } = useSelector(
    (state) => state.admins
  );

  // Loading the admins on useEffect.
  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    // if (!admin) {
    //   navigate('/')
    // }

    dispatch(getAdmins());

    return () => {
      dispatch(reset());
    };
  }, [admin, navigate, isError, message, dispatch]);

  return (
    <div className="accordion" id="accordionExample">
      {admins.length > 0 ? (
        <div className="admins">
          {admins.map((admin, index) => (
            <AdminListItem key={index} admin={admin} index={index + 1} />
          ))}
        </div>
      ) : (
        <h3>You have not set any admins</h3>
      )}
    </div>
  );
}
