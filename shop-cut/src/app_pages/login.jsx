import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { RiErrorWarningLine, RiCheckboxCircleLine, RiLockLine, RiEyeOffLine, RiEyeLine, RiLoader4Line } from "@remixicon/react";

import gsap from "gsap";
gsap.registerPlugin(useGSAP);

export default function LoginPage() {

  // 1. State Management for Form Fields (Two-Way Binding)
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  })

  // 2. UI Status Management
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)

  // 3. GSAP Animation Refs
  const cardRef = useRef(null)
  const formElementsRef = useRef([])
  const errorBannerRef = useRef(null)
  const successBannerRef = useRef(null)

  // Clear previous element array elements on re-render to avoid memory leaks
  formElementsRef.current = []
  const addToRefs = (el) => {
    if (el && !formElementsRef.current.includes(el)) {
      formElementsRef.current.push(el)
    }
  }

  // 4. GSAP Entrance Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in and lift the main card container
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      )

      // Stagger cascade entry for inner form elements
      gsap.fromTo(
        formElementsRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out", delay: 0.2 }
      )
    })

    return () => ctx.revert() // Cleanup context on component unmount
  }, [])

  // 5. GSAP Alert Banners Animation Hooks
  useEffect(() => {
    if (errorMessage && errorBannerRef.current) {
      gsap.fromTo(
        errorBannerRef.current,
        { opacity: 0, scale: 0.95, y: -10 },
        { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "back.out(1.7)" }
      )
    }
  }, [errorMessage])

  useEffect(() => {
    if (successMessage && successBannerRef.current) {
      gsap.fromTo(
        successBannerRef.current,
        { opacity: 0, scale: 0.95, y: -10 },
        { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "back.out(1.7)" }
      )
    }
  }, [successMessage])

  // 6. Two-Way Data Binding Handler
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
    
    if (errorMessage) setErrorMessage(null)
  }

  // 7. Axios POST Method on Submit
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setErrorMessage(null)
    setSuccessMessage(null)

    try {
      const response = await axios.post("https://example.com", {
        email: formData.email,
        password: formData.password,
      })

      setSuccessMessage("Login successful! Preparing your dashboard...")
      
      const token = response.data.token
      if (token) {
        localStorage.setItem("authToken", token)
      }
      
      setFormData({ email: "", password: "" })
      
    } catch (error) {
      // Shake the card container using GSAP to signal validation failure
      gsap.to(cardRef.current, {
        x: 6,
        duration: 0.1,
        repeat: 3,
        yoyo: true,
        ease: "power1.inOut",
        onComplete: () => gsap.set(cardRef.current, { x: 0 })
      })

      if (error.response && error.response.data && error.response.data.message) {
        setErrorMessage(error.response.data.message)
      } else {
        setErrorMessage("Invalid credentials or server connection failed.")
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-4 py-12 dark:bg-zinc-950 sm:px-6 lg:px-8">
      {/* Main Login Card Container */}
      <div 
        ref={cardRef}
        className="w-full max-w-md space-y-8 rounded-2xl border border-zinc-200 bg-white p-8 shadow-xl dark:border-zinc-800 dark:bg-zinc-900"
      >
        
        {/* Header Branding Panel */}
        <div ref={addToRefs} className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Welcome back
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Enter your details to securely sign in to your workspace.
          </p>
        </div>

        {/* Global Error Banner */}
        {errorMessage && (
          <div 
            ref={errorBannerRef}
            className="flex items-center gap-3 rounded-xl bg-red-50 p-4 text-sm text-red-600 dark:bg-red-950/40 dark:text-red-400 border border-red-200/60 dark:border-red-900/40"
          >
            <RiErrorWarningLine className="text-lg shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Global Success Banner */}
        {successMessage && (
          <div 
            ref={successBannerRef}
            className="flex items-center gap-3 rounded-xl bg-emerald-50 p-4 text-sm text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-900/40"
          >
            <RiCheckboxCircleLine className="text-lg shrink-0"/>
            <span>{successMessage}</span>
          </div>
        )}

        {/* Form Element Wrapper */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          
          {/* Email Input Node */}
          <div ref={addToRefs} className="space-y-2">
            <label 
              htmlFor="email" 
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Email address
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-400">
                <RiMailLine className="text-lg"/>
              </span>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-zinc-200 bg-zinc-50 py-2.5 pl-10 pr-4 text-sm text-zinc-900 transition-all placeholder-zinc-400 focus:border-zinc-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:border-zinc-800 dark:bg-zinc-800/50 dark:text-zinc-50 dark:placeholder-zinc-500 dark:focus:border-zinc-100 dark:focus:bg-zinc-900 dark:focus:ring-zinc-100"
              />
            </div>
          </div>

          {/* Password Input Node */}
          <div ref={addToRefs} className="space-y-2">
            <div className="flex items-center justify-between">
              <label 
                htmlFor="password" 
                className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                Password
              </label>
              <a 
                href="#" 
                className="text-xs font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors"
              >
                Forgot password?
              </a>
            </div>
            
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-400">
                <RiLockLine className="text-lg"/>
              </span>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                autoComplete="current-password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="••••••••"
                className="w-full rounded-xl border border-zinc-200 bg-zinc-50 py-2.5 pl-10 pr-10 text-sm text-zinc-900 transition-all placeholder-zinc-400 focus:border-zinc-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:border-zinc-800 dark:bg-zinc-800/50 dark:text-zinc-50 dark:placeholder-zinc-500 dark:focus:border-zinc-100 dark:focus:bg-zinc-900 dark:focus:ring-zinc-100"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors"
              >
                {showPassword ? (
                  <RiEyeOffLine className="text-lg"/>
                ) : (
                  <RiEyeLine className="text-lg" />
                )}
              </button>
            </div>
          </div>

          {/* Action Trigger Node */}
          <div ref={addToRefs} className="pt-2">
            <button
              type="submit"
              disabled={isLoading}
              className="flex w-full items-center justify-center rounded-xl bg-zinc-900 py-2.5 px-4 text-sm font-medium text-zinc-50 shadow-md transition-all hover:bg-zinc-900/90 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 dark:focus:ring-zinc-300 dark:focus:ring-offset-zinc-950"
            >
              {isLoading ? (
                <>
                  <RiLoader4Line className="ri-spin mr-2 text-lg"/>
                  Authenticating...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
