import React, { useEffect, useState } from "react";
// Basically useSelector is used to select something from the state so it want to bring state.isLoagin or admin then we use that one. If we want to use a function like register or reset from our reducer then we would use useDispatch.
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset} from "../../../features/auth/authSlice";

export default function RegisterAdmin(props) {
  // Form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "Steel Authority of India",
    timezone: "Cairo",
    password: "",
    confirmPassword: "",
    administrator: false,
  });

  // setting form input values on form change 
  const onFormDataChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      administrator: !formData.administrator,
    });
  };

  // EYE VISIBILITY TOGGLE
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] =
    useState(false);

  // For Navigation
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Destructuring data.
  const {
    admin,
    registerIsLoading,
    registerError,
    registerSuccess,
    registerMessage,
  } = useSelector((state) => state.auth);

  useEffect(() => {
    if (registerError) {
      toast.error(registerMessage, {
        position: toast.POSITION.BOTTOM_RIGHT,
        toastId: "registerErrror1",
      });
    }

    else if (registerSuccess) {
      dispatch(reset())
      toast.success("Admin registered.", {
        position: toast.POSITION.BOTTOM_RIGHT,
        toastId: "registerSucces1",
      });
      
      setTimeout(() => {
        navigate("/dashboard/administration/adminList");
        window.location.reload();
      }, 2800);
    }

    // if (isSuccess || admin) {
    //   navigate("/dashboard");
    // }

    // dispatch(reset());
  }, [
    admin,
    registerError,
    registerSuccess,
    registerMessage,
    navigate,
    dispatch,
  ]);

  const onSubmit = async (e) => {
    e.preventDefault();

    const adminData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      organization: formData.organization,
      timezone: formData.timezone,
      administrator: formData.administrator,
      password: formData.password,
    };
    await dispatch(register(adminData));
    console.log("awaiting done");

    
  };
  return (
    <form onSubmit={onSubmit}>
      {/* <h1 className="font-semibold text-4xl pb-3">Register New User</h1> */}
      {/* Full Name Input Section */}
      <div className="mb-3">
        <label htmlFor="exampleInputName1" className="form-label font-semibold">
          Full Name
        </label>
        <input
          type="text"
          className="form-control shadow shadow-transparent border border-black"
          id="exampleInputName1"
          placeholder="Enter your full name"
          name="name"
          value={formData.name}
          onChange={onFormDataChange}
        />
      </div>
      {/* Email Input Section */}
      <div className="mb-3">
        <label
          htmlFor="exampleInputEmail1"
          className="form-label font-semibold"
        >
          Email *
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
        />
      </div>
      {/* Phone Input Section */}
      <div className="mb-3">
        <label
          htmlFor="exampleInputPhone1"
          className="form-label font-semibold"
        >
          Phone Number
        </label>
        <input
          type="number"
          className="form-control shadow shadow-transparent border border-black"
          id="exampleInputPhone1"
          aria-describedby="emailHelp"
          placeholder="Enter phone number"
          name="phone"
          value={formData.phone}
          onChange={onFormDataChange}
        />
      </div>
      {/* Organization Input Section */}
      <div className="mb-3">
        <label
          htmlFor="exampleInputOrganization1"
          className="form-label font-semibold"
        >
          Organization *
        </label>
        <select
          name="organization"
          id="exampleInputOrganization1"
          className="form-control shadow shadow-transparent border border-black"
          value={formData.organization}
          onChange={onFormDataChange}
        >
          <option value="Steel Authority of India">
            Steel Authority of India
          </option>
        </select>
      </div>
      {/* Timezone Input Section */}
      <div className="mb-3">
        <label
          htmlFor="exampleInputTimeZone1"
          className="form-label font-semibold"
        >
          Timezone *
        </label>
        <select
          name="timezone"
          id="exampleInputTimeZone1"
          className="form-control shadow shadow-transparent border border-black"
          value={formData.timezone}
          onChange={onFormDataChange}
        >
          <option value="Etc/GMT+12">
            (GMT-12:00) International Date Line West
          </option>
          <option value="Pacific/Midway">
            (GMT-11:00) Midway Island, Samoa
          </option>
          <option value="Pacific/Honolulu">(GMT-10:00) Hawaii</option>
          <option value="US/Alaska">(GMT-09:00) Alaska</option>
          <option value="America/Los_Angeles">
            (GMT-08:00) Pacific Time (US & Canada)
          </option>
          <option value="America/Tijuana">
            (GMT-08:00) Tijuana, Baja California
          </option>
          <option value="US/Arizona">(GMT-07:00) Arizona</option>
          <option value="America/Chihuahua">
            (GMT-07:00) Chihuahua, La Paz, Mazatlan
          </option>
          <option value="US/Mountain">
            (GMT-07:00) Mountain Time (US & Canada)
          </option>
          <option value="America/Managua">(GMT-06:00) Central America</option>
          <option value="US/Central">
            (GMT-06:00) Central Time (US & Canada)
          </option>
          <option value="America/Mexico_City">
            (GMT-06:00) Guadalajara, Mexico City, Monterrey
          </option>
          <option value="Canada/Saskatchewan">(GMT-06:00) Saskatchewan</option>
          <option value="America/Bogota">
            (GMT-05:00) Bogota, Lima, Quito, Rio Branco
          </option>
          <option value="US/Eastern">
            (GMT-05:00) Eastern Time (US & Canada)
          </option>
          <option value="US/East-Indiana">(GMT-05:00) Indiana (East)</option>
          <option value="Canada/Atlantic">
            (GMT-04:00) Atlantic Time (Canada)
          </option>
          <option value="America/Caracas">(GMT-04:00) Caracas, La Paz</option>
          <option value="America/Manaus">(GMT-04:00) Manaus</option>
          <option value="America/Santiago">(GMT-04:00) Santiago</option>
          <option value="Canada/Newfoundland">(GMT-03:30) Newfoundland</option>
          <option value="America/Sao_Paulo">(GMT-03:00) Brasilia</option>
          <option value="America/Argentina/Buenos_Aires">
            (GMT-03:00) Buenos Aires, Georgetown
          </option>
          <option value="America/Godthab">(GMT-03:00) Greenland</option>
          <option value="America/Montevideo">(GMT-03:00) Montevideo</option>
          <option value="America/Noronha">(GMT-02:00) Mid-Atlantic</option>
          <option value="Atlantic/Cape_Verde">
            (GMT-01:00) Cape Verde Is.
          </option>
          <option value="Atlantic/Azores">(GMT-01:00) Azores</option>
          <option value="Africa/Casablanca">
            (GMT+00:00) Casablanca, Monrovia, Reykjavik
          </option>
          <option value="Etc/Greenwich">
            (GMT+00:00) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London
          </option>
          <option value="Europe/Amsterdam">
            (GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna
          </option>
          <option value="Europe/Belgrade">
            (GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague
          </option>
          <option value="Europe/Brussels">
            (GMT+01:00) Brussels, Copenhagen, Madrid, Paris
          </option>
          <option value="Europe/Sarajevo">
            (GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb
          </option>
          <option value="Africa/Lagos">(GMT+01:00) West Central Africa</option>
          <option value="Asia/Amman">(GMT+02:00) Amman</option>
          <option value="Europe/Athens">
            (GMT+02:00) Athens, Bucharest, Istanbul
          </option>
          <option value="Asia/Beirut">(GMT+02:00) Beirut</option>
          <option value="Africa/Cairo">(GMT+02:00) Cairo</option>
          <option value="Africa/Harare">(GMT+02:00) Harare, Pretoria</option>
          <option value="Europe/Helsinki">
            (GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius
          </option>
          <option value="Asia/Jerusalem">(GMT+02:00) Jerusalem</option>
          <option value="Europe/Minsk">(GMT+02:00) Minsk</option>
          <option value="Africa/Windhoek">(GMT+02:00) Windhoek</option>
          <option value="Asia/Kuwait">
            (GMT+03:00) Kuwait, Riyadh, Baghdad
          </option>
          <option value="Europe/Moscow">
            (GMT+03:00) Moscow, St. Petersburg, Volgograd
          </option>
          <option value="Africa/Nairobi">(GMT+03:00) Nairobi</option>
          <option value="Asia/Tbilisi">(GMT+03:00) Tbilisi</option>
          <option value="Asia/Tehran">(GMT+03:30) Tehran</option>
          <option value="Asia/Muscat">(GMT+04:00) Abu Dhabi, Muscat</option>
          <option value="Asia/Baku">(GMT+04:00) Baku</option>
          <option value="Asia/Yerevan">(GMT+04:00) Yerevan</option>
          <option value="Asia/Kabul">(GMT+04:30) Kabul</option>
          <option value="Asia/Yekaterinburg">(GMT+05:00) Yekaterinburg</option>
          <option value="Asia/Karachi">
            (GMT+05:00) Islamabad, Karachi, Tashkent
          </option>
          <option value="Asia/Calcutta">
            (GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi
          </option>
          <option value="Asia/Calcutta">(GMT+05:30) Sri Jayawardenapura</option>
          <option value="Asia/Katmandu">(GMT+05:45) Kathmandu</option>
          <option value="Asia/Almaty">(GMT+06:00) Almaty, Novosibirsk</option>
          <option value="Asia/Dhaka">(GMT+06:00) Astana, Dhaka</option>
          <option value="Asia/Rangoon">(GMT+06:30) Yangon (Rangoon)</option>
          <option value="Asia/Bangkok">
            (GMT+07:00) Bangkok, Hanoi, Jakarta
          </option>
          <option value="Asia/Krasnoyarsk">(GMT+07:00) Krasnoyarsk</option>
          <option value="Asia/Hong_Kong">
            (GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi
          </option>
          <option value="Asia/Kuala_Lumpur">
            (GMT+08:00) Kuala Lumpur, Singapore
          </option>
          <option value="Asia/Irkutsk">
            (GMT+08:00) Irkutsk, Ulaan Bataar
          </option>
          <option value="Australia/Perth">(GMT+08:00) Perth</option>
          <option value="Asia/Taipei">(GMT+08:00) Taipei</option>
          <option value="Asia/Tokyo">(GMT+09:00) Osaka, Sapporo, Tokyo</option>
          <option value="Asia/Seoul">(GMT+09:00) Seoul</option>
          <option value="Asia/Yakutsk">(GMT+09:00) Yakutsk</option>
          <option value="Australia/Adelaide">(GMT+09:30) Adelaide</option>
          <option value="Australia/Darwin">(GMT+09:30) Darwin</option>
          <option value="Australia/Brisbane">(GMT+10:00) Brisbane</option>
          <option value="Australia/Canberra">
            (GMT+10:00) Canberra, Melbourne, Sydney
          </option>
          <option value="Australia/Hobart">(GMT+10:00) Hobart</option>
          <option value="Pacific/Guam">(GMT+10:00) Guam, Port Moresby</option>
          <option value="Asia/Vladivostok">(GMT+10:00) Vladivostok</option>
          <option value="Asia/Magadan">
            (GMT+11:00) Magadan, Solomon Is., New Caledonia
          </option>
          <option value="Pacific/Auckland">
            (GMT+12:00) Auckland, Wellington
          </option>
          <option value="Pacific/Fiji">
            (GMT+12:00) Fiji, Kamchatka, Marshall Is.
          </option>
          <option value="Pacific/Tongatapu">(GMT+13:00) Nuku'alofa</option>
        </select>
      </div>
      {/* Password Input Section  */}
      <div className="mb-3 pb-3">
        <label
          htmlFor="exampleInputPassword1"
          className="form-label font-semibold"
        >
          Password *
        </label>
        <div className="flex items-center border border-black rounded-md shadow">
          <input
            type={passwordVisibility ? `text` : `password`}
            className="form-control border-0 shadow-none"
            id="exampleInputPassword1"
            placeholder="Enter your password"
            name="password"
            value={formData.password}
            onChange={onFormDataChange}
          />
          <div className="pr-5 text-gray-500 text-xl">
            <i
              className={
                passwordVisibility ? `bi bi-eye-fill` : `bi bi-eye-slash-fill`
              }
              onClick={() => {
                setPasswordVisibility(!passwordVisibility);
              }}
            ></i>
          </div>
        </div>
      </div>
      {/* Confirm Password Input Section  */}
      <div className="mb-3 pb-3">
        <label
          htmlFor="exampleInputConfirmPassword1"
          className="form-label font-semibold"
        >
          Confirm Password *
        </label>
        <div className="flex items-center border border-black rounded-md shadow">
          <input
            type={confirmPasswordVisibility ? `text` : `password`}
            className="form-control border-0 shadow-none"
            id="exampleInputConfirmPassword1"
            placeholder="Confirm your password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={onFormDataChange}
          />
          <div className="pr-5 text-gray-500 text-xl">
            <i
              className={
                confirmPasswordVisibility
                  ? `bi bi-eye-fill`
                  : `bi bi-eye-slash-fill`
              }
              onClick={() => {
                setConfirmPasswordVisibility(!confirmPasswordVisibility);
              }}
            ></i>
          </div>
        </div>
      </div>
      <div className="mb-3 form-check flex justify-between">
        <span>
          <input
            type="checkbox"
            className="form-check-input"
            name="administrator"
            value={formData.administrator}
            onChange={onFormDataChange}
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Administrator?
          </label>
        </span>
      </div>
      <button
        type="submit"
        className="sign-in-button bg-gray-400 text-white  w-full py-2 rounded-md"
      >
        {registerIsLoading ? (
          <>
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Loading...</span>
          </>
        ) : (
          "Sign Up"
        )}
      </button>

      {/* Copyright  */}
      {/* <div className="block md:hidden text-gray-500 text-base mt-16 pb-4">
          © Untitled UI 2022
        </div> */}
    </form>
  );
}
