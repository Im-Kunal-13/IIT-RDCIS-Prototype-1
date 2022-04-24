import React, { useState, useEffect, useContext } from "react";
// Basically useSelector is used to select something from the state so it want to bring state.isLoagin or admin then we use that one. If we want to use a function like register or reset from our reducer then we would use useDispatch.
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../features/auth/authSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.minimal.css";

export default function Authentication() {
  // For password visibility toggle
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  // function to change form data.
  const onFormDataChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEyeClick = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  // For Navigation
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Destructuring data.
  const { admin, loginIsLoading, loginError, loginSuccess, loginMessage } =
    useSelector((state) => state.auth);

  useEffect(() => {
    if (loginError) {
      // toast.error(message);
      console.log("something went wrong!");
    }

    if (loginSuccess || admin) {
      toast.success("You're logged in.", {
        position: toast.POSITION.BOTTOM_RIGHT,
        toastId: "loginSucces1",
      });
      setFormData({
        email: "",
        password: "",
      });
      navigate("/dashboard/administration/adminList");
    }

    // dispatch(reset());
  }, [
    admin,
    loginError,
    loginIsLoading,
    loginSuccess,
    loginMessage,
    navigate,
    dispatch,
  ]);

  const onSubmit = (e) => {
    e.preventDefault();

    const adminData = {
      email: formData.email,
      password: formData.password,
    };

    dispatch(login(adminData));
  };

  return (
    // Full Container.
    <div className="flex flex-col-reverse md:flex-row justify-between">
      {/* Authentication Part  */}
      <div className={`login md:w-1/2 md:mt-0 mt-24 md:h-screen flex justify-center items-center`}>
        <form onSubmit={onSubmit} className={``}>
          <div className="flex flex-col relative md:bottom-20 bottom-10">
            <div className="flex items-center">
              <img
                src={require(`./iit-logo-black.png`)}
                alt=""
                className="w-12 pr-2"
              />
              <h1 className="font-semibold text-3xl">EyeVib</h1>
            </div>
            <p className="text-base text-gray-500 pb-4 pl-2">
              Insight to Vibration Data.
            </p>
          </div>
          <h1 className="font-semibold text-4xl pb-3">Log In</h1>
          <p className="text-base text-gray-500 pb-4">
            Welcome back! Please enter your details.
          </p>
          {/* Email Input Section */}
          <div className="mb-3">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label font-semibold"
            >
              Email
            </label>
            <input
              type="email"
              className="form-control shadow shadow-transparent border border-black"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={onFormDataChange}
              required
            />
          </div>
          {/* Password Input Section  */}
          <div className="mb-3 pb-3">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label font-semibold"
            >
              Password
            </label>
            <div className="flex items-center border border-black rounded-md shadow">
              <input
                type={passwordVisibility ? `text` : `password`}
                className="form-control border-0 shadow-none"
                id="exampleInputPassword1"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={onFormDataChange}
                required
              />
              <div className="pr-5 text-gray-500 text-xl">
                <i
                  className={
                    passwordVisibility
                      ? `bi bi-eye-fill`
                      : `bi bi-eye-slash-fill`
                  }
                  onClick={handleEyeClick}
                ></i>
              </div>
            </div>
          </div>
          <div className="mb-3 form-check flex justify-between">
            <span>
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
                required
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </span>
            <a href="*" className={`text-blue-700`}>
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className={`sign-in-button2 text-white bg-gray-400 w-full py-2 rounded-md transition-all hover:scale-x-105`}
          >
            {loginIsLoading ? (
              <>
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Loading...</span>
              </>
            ) : (
              "Sign In"
            )}
          </button>
          <div className="text-right text-xs text-gray-500 pt-3">
            Version: 2.18.0
          </div>
          {/* Copyright  */}
          <div className="block md:hidden text-gray-500 text-base mt-16 pb-4">
            {/* © Centre of Excellence in Advanced Manufacturing Technology */}
            © IIT Kharagpur
          </div>
        </form>
      </div>
      {/* Dashboard Review Part  */}
      <div className="flex relative flex-col justify-center md:justify-around md:w-1/2 md:pt-0 md:pb-0 pb-10 pt-5 dashboard-review">
        {/* Dashboard Review Content  */}
        <div className="dashboard-review-content">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner h-full">
              <div className="carousel-item active h-60 text-center lg:px-14 xl:px-40">
                <img
                  className="w-48 mx-auto pb-3"
                  src={require("./strategy.png")}
                  alt=""
                />
                <h1 className="font-semibold text-2xl text-white">
                  Welcome to our new dashboard
                </h1>
                <p className="text-base text-gray-200 pt-1">
                  Get real-time and actionable insights on machine health and
                  factory performance in minutes.
                </p>
              </div>
              <div className="carousel-item h-60 text-center lg:px-14 xl:px-40">
                <img
                  className="w-40 pb-1 mx-auto"
                  src={require("./prediction.png")}
                  alt=""
                />
                <h1 className="font-semibold text-2xl text-white">
                  Keeping the Overview
                </h1>
                <p className="text-base text-gray-200 pt-1">
                  Owners receive a transparent presentation of all individual
                  relevant API property objects.
                </p>
              </div>
              <div className="carousel-item h-60 text-center lg:px-14 xl:px-40">
                <img
                  className="w-28 mx-auto pb-1"
                  src={require("./motor1.png")}
                  alt=""
                />
                <h1 className="font-semibold text-2xl text-white">
                  Maintenance Strategies
                </h1>
                <p className="text-base text-gray-200 pt-1">
                  Reduce maintenance downtime and maintenance cost in an
                  efficient manner.
                </p>
              </div>
            </div>
            <button
              className="carousel-control-prev mt-auto pb-10"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="border-2 bg-gray-200 text-gray-400 rounded-full py-1 px-2"
                aria-hidden="true"
              >
                <i className="bi bi-chevron-left  text-xl"></i>
              </span>
              <span className="visually-hidden">Previous</span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next mt-auto pb-10"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="border-2 bg-white rounded-full py-1 px-2"
                aria-hidden="true"
              >
                <i className="bi bi-chevron-right text-gray-400 text-xl"></i>
              </span>
            </button>
          </div>
        </div>
        {/* Blob SVG  */}
        <div className="custom-shape-divider-bottom-1648580266 md:hidden">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div
          className="md:hidden h-5 w-full bg-white relative"
          style={{ top: "3.7rem" }}
        />
      </div>
      {/* Whole Container Position Absolute  */}
      {/* Copyright  */}
      <span className="hidden md:block absolute bottom-5 left-5 text-gray-500 text-base font-semibold">
        {/* © Centre of Excellence in Advanced Manufacturing Technology */}
        <span className="text-lg">©</span> IIT Kharagpur
      </span>
    </div>
  );
}
