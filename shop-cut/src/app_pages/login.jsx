import { useState, useRef, useEffect } from "react";

export const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    rememberMe: false,
  })

  // varibles 

  const [Isloading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoginMode, setIsLoginMode] = useState(false)

  // dom elements
  const registerMod = useRef(null);
  const backToggleBar = useRef(null);

  // registering registerMod 


  return (

    <div id="login" className="bg-(--page) min-h-dvh w-dvw flex flex-col justify-center items-center overflow-hidden">
    <section className="header flex flex-col justify-start items-center gap-2">
      <span id="logo" className="font-fraunces normal text-xl font-bold text-spicios-green md:text-2xl text-shadow-lg"> Spicios' </span>
      <span id="tagline" className="font-Inter italic text-sm opacity-55">
        <p>Secure registration system</p>
      </span>
    </section>
    <section id="loginToggle" className="min-h-4 w-full bg-(--cream-light) p-2 mt-4 flex justify-center items-center">
      <div id="toggle" className="min-h-2 w-[55%] max-w-140 bg-(--input-bg) rounded-full relative overflow-hidden z-1 flex justify-between items-center gap-5">

        {/* toggle background bar */}
        <div ref={backToggleBar} id="toggle_board" className={`absolute w-[50%] h-full bg-(--forest) z-0 rounded-full ${ isLoginMode ? "right-0" : "left-0"}`}></div>

        <button ref={registerMod} type="button" className="h-full w-[49%] pt-2 pb-2 pl-4 pr-4 z-1 text-lg text-amber-50"onClick={() => {
           setIsLoginMode(false);
        }}>register</button>
        <button ref={registerMod} type="button" className="h-full w-[49%] pt-2 pb-2 pl-4 pr-4 z-1 text-lg text-(--saffron)" onClick={() => {
          setIsLoginMode(true)
        }}>Login</button>
      </div>
    </section>
    <div id="registarion"className={` h-full w-full ${isLoginMode ? "opacity-0" : "opacity-100"}`}>
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
    </section>
    </div>
  </div >
  )
};
