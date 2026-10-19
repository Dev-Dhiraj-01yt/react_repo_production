import { useState, useRef, useEffect } from "react";

export const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phoneNo: "",
    password: "",
  });

  const [loginForm, setLoginForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  // varibles
  const [Mode, setMode] = useState("");
  const [user, setUser] = useState("");
  const [phone, setPhone] = useState("");
  const [eMail, setEmail] = useState("");
  const [pass, setPass] = useState("");
  // const [Isloading, setIsLoading] = useState(false);
  // const [successMessage, setSuccessMessage] = useState(null);
  // const [errorMessage, setErrorMessage] = useState(null);
  const [isLoginMode, setIsLoginMode] = useState(false);

  // dom elements
  // const registerMod = useRef(null);
  // const backToggleBar = useRef(null);
  // const username = useRef(null);
  // const email = useRef(null);
  // const password = useRef(null);

  // registering porocess
  const reisterORlogin = ({ user, eMail, pass, phone }) => {
    if (Mode === "login") {
      if (this.eMail)
        setLoginForm({
          email: this.eMail,
          password: this.pass,
        });
      if (this.user) {
        setLoginForm({
          username: this.user,
          password: this.pass,
        });
      }
    }
    if ((this.user, this.eMail, this.pass, this.phone)) {
      setFormData({
        username: this.user,
        phoneNo: this.phone,
        email: this.eMail,
        password: this.pass,
      });
    }
  };

  // useEffect automode set
  useEffect(() => {
    isLoginMode ? setMode("Login") : setMode("registration");
  }, [Mode]);

  return (
    <div
      id="login"
      className="bg-(--page) min-h-dvh w-dvw flex flex-col justify-center items-center overflow-hidden"
    >
      <section className="header flex flex-col justify-start items-center gap-2">
        <span
          id="logo"
          className="font-fraunces normal text-xl font-bold text-spicios-green md:text-2xl text-shadow-lg"
        >
          {" "}
          Spicios'{" "}
        </span>
        <span id="tagline" className="font-Inter italic text-sm opacity-55">
          <p>Secure registration system</p>
        </span>
      </section>
      <section
        id="loginToggle"
        className="min-h-4 w-full bg-(--cream-light) p-2 mt-4 flex justify-center items-center"
      >
        <div
          id="toggle"
          className="min-h-2 w-[55%] max-w-145 bg-(--input-bg) rounded-full relative overflow-hidden z-1 flex justify-between items-center gap-5"
        >
          {/* toggle background bar */}
          <div
            id="toggle_board"
            className={`absolute w-[50%] h-full bg-(--forest) z-0 rounded-full ${isLoginMode ? `right-0` : `left-0`}`}
          ></div>

          <button
            type="button"
            className="text-sm h-full w-[49%] pt-2 pb-2 pl-5 pr-5 z-1 text-lg text-(--saffron)"
            onClick={() => {
              setIsLoginMode(false);
            }}
          >
            Register
          </button>
          <button
            type="button"
            className="text-sm h-full w-[49%] pt-2 pb-2 pl-4 pr-4 z-1 text-lg text-(--saffron)"
            onClick={() => {
              setIsLoginMode(true);
            }}
          >
            Login
          </button>
        </div>
      </section>
      <div
        id="registarion"
        className={`h-full w-full ${isLoginMode ? "opacity-0 hidden" : "opacity-100 flex justify-center items-center flex-col"}`}
      >
        <section className="progressBar w-full bg-(--cream-light) pl-5 pr-5  border-t border-b border-(--input-border) flex nowrap shrink-0 justify-between items-center pt-2 pb-2 shadow-lg">
          <span className="level1 flex nowrap shrink-0 justify-center items-center gap-0.5">
            <div className="h-1.5 w-1.5 border border-yellow-500 rounded-full bg-yellow-500"></div>
            <p className="text-[7px] font-Inter weight-300">1.Details</p>
          </span>

          {/* bg empty here */}

          <div className="h-1 w-10 bg-() rounded-full border-[0.1px] border-(--forest)"></div>
          <span className="level2 flex nowrap shrink-0 justify-center items-center gap-0.5">
            {/* bg empty here */}
            <div className="h-1.5 w-1.5 border border-(--saffron) rounded-full bg-()"></div>
            <p className="text-[7px] font-Inter weight-300">2.Verification</p>
          </span>
          {/* bg empty here */}
          <div className="h-1 w-10 bg-() rounded-full border-[0.1px] border-(--forest)"></div>

          <span className="level3 flex nowrap shrink-0 justify-center items-center gap-0.5">
            {/* bg empty here */}
            <div className="h-1.5 w-1.5 border border-yellow-500 rounded-full bg-()"></div>
            <p className="text-[7px] font-Inter weight-300">3.Verified</p>
          </span>
        </section>
        <section id="form">
          <form
            action="submit"
            className="w-full min-h-10 bg-(--page) flex flex-col justify-center items-center nowrap gap-4 mt-5"
            onSubmit={(Sub_event) => {
              Sub_event.preventDefault();
              // setFormData({})
            }}
          >
            <h1
              id="Title"
              className="text-lg text-(--forest) font-fraunces weight-500 text-shadow-lg"
            >
              Create Account
            </h1>
            {/* name */}
            <input
              type="text"
              value={user}
              className="text-sm w-[90%] max-w-145 text-(--forest) weight-300 font-Inter pb-3 pt-3 pr-5 pl-5 bg-(--input-bg) border border-(--input-border) rounded-lg placeholder-(--placeholder) focus:outline-none"
              id="Name"
              placeholder="Enter your name"
              required
              onChange={(e) => {
                setUser(e.target.value);
              }}
            />

            {/* phone number */}
            <input
              value={phone}
              type="text"
              className="text-sm w-[90%] max-w-145 text-(--forest) weight-300 font-Inter pb-3 pt-3 pr-5 pl-5 bg-(--input-bg) border border-(--input-border) rounded-lg placeholder-(--placeholder) focus:outline-none"
              id="phoneNo"
              placeholder="Enter your phone number"
              required
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />

            {/* email */}
            <input
              value={eMail}
              type="text"
              className="text-sm w-[90%] max-w-145 text-(--forest) weight-300 font-Inter pb-3 pt-3 pr-5 pl-5 bg-(--input-bg) border border-(--input-border) rounded-lg placeholder-(--placeholder) focus:outline-none"
              id="email"
              placeholder="Enter you email"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            {/* password */}
            <input
              value={pass}
              type="text"
              className="text-sm w-[90%] max-w-145 text-(--forest) weight-300 font-Inter pb-3 pt-3 pr-5 pl-5 bg-(--input-bg) border border-(--input-border) rounded-lg placeholder-(--placeholder) focus:outline-none"
              id="Password"
              placeholder="Think something strong as password"
              required
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />
            {/* submit button */}
            <button
              type="submit"
              className="w-[90%] max-w-145 font-Inter pb-3 pt-3 pr-5 pl-5 bg-(--saffron) rounded-full text-(--cream-light) weight-600"
              onClick={() => {
                reisterORlogin(user, eMail, pass, phone);
              }}
            >
              Continue
            </button>
          </form>
        </section>
      </div>

      {/* login boox starts here */}

      <div
        id="Login"
        className={`h-full w-full ${isLoginMode ? "opacity-100 flex justify-center items-center flex-col" : "opacity-0 hidden"}`}
      >
        <section id="Login-form">
          <form
            action="submit"
            className="w-full min-h-10 bg-(--page) flex flex-col justify-center items-center nowrap gap-4 mt-5"
            onSubmit={(Sub_event) => {
              Sub_event.preventDefault();
              // setFormData({})
            }}
          >
            <h1
              id="Title"
              className="text-lg text-(--forest) font-fraunces weight-500 text-shadow-lg"
            >
              Login Account
            </h1>
            {/* name */}
            <input
              value={user}
              type="text"
              className="text-sm w-[90%] max-w-145 text-(--forest) weight-300 font-Inter pb-3 pt-3 pr-5 pl-5 bg-(--input-bg) border border-(--input-border) rounded-lg placeholder-(--placeholder) focus:outline-none"
              id="Name"
              placeholder="Enter your Username"
              onChange={(e) => {
                setUser(e.target.value);
              }}
            />
            {/* email */}
            <input
              value={eMail}
              type="text"
              className="text-sm w-[90%] max-w-145 text-(--forest) weight-300 font-Inter pb-3 pt-3 pr-5 pl-5 bg-(--input-bg) border border-(--input-border) rounded-lg placeholder-(--placeholder) focus:outline-none"
              id="email"
              placeholder="Enter you email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            {/* password */}
            <input
              value={pass}
              type="text"
              className="text-sm w-[90%] max-w-145 text-(--forest) weight-300 font-Inter pb-3 pt-3 pr-5 pl-5 bg-(--input-bg) border border-(--input-border) rounded-lg placeholder-(--placeholder) focus:outline-none"
              id="Password"
              placeholder="Enter the password"
              required
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />
            {/* submit button */}
            <button
              type="submit"
              className="w-[90%] max-w-145 font-Inter pb-3 pt-3 pr-5 pl-5 bg-(--saffron) rounded-full text-(--cream-light) weight-600"
              onClick={() => {
                reisterORlogin(user, eMail, pass);
              }}
            >
              Continue
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};
