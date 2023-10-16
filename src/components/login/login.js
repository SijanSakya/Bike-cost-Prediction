"use client";
import { useState } from "react";

import { Formik, Form, Field } from "formik";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useRouter } from 'next/navigation'
// import logo from 'assets/img/logo.png'
import { BsPhone } from 'react-icons/bs'
import { RiLockPasswordLine } from 'react-icons/ri'
import * as Yup from 'yup'
import Image from "next/image";
import Link from "next/link";



const initialValues = {
    Email: undefined,
    Password: '',
    remember : true,
};

const validationSchema = Yup.object({
    Email: Yup.mixed().typeError("Please enter a valid email").required("Your Email Required"),
    Password: Yup.mixed().required("Password required")
});

const onSubmit = (values) => {

    const router = useRouter();
    console.log(values);
    const _static_creds = { uid:'sijan@gmail.com', pw: "1111", uname: "PVE" };
    if (
        values.Email == _static_creds.uid &&
        values.Password == _static_creds.pw
    ) {
        if (values.remember) {
            localStorage.setItem(
                "save_browser_id",
                _static_creds.uname
            );
        }
         router.push("/");
    } else {
        alert("Wrong username or password!! ");
    }
};


const Login = () => {


    // const router = useRouter();
    
    const _static_creds = { uid: 'sijan@gmail.com', pw: "123456789", uname: "PVE" };
    
    const [showPassword, setShowPassword] = useState(false);

    function handleTogglePassword() {
        setShowPassword(!showPassword);
    }
    return (
        <div>

            <div className="flex justify-center items-center h-screen bg-white">
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        console.log(values);
                        if (
                            values.Email == _static_creds.uid &&
                            values.Password == _static_creds.pw
                        ) {
                            if (values.remember) {
                                localStorage.setItem(
                                    "save_browser_id",
                                    _static_creds.uname
                                );
                            }
                            router.push("/");
                        } else {
                            alert("Wrong username or password!! ");
                        }
                    }}
                >
                    {({ errors, touched ,values ,  isValid, dirty}) => (
                        <Form >
                            <div className="flex flex-col justify-center items-center gap-4 bg-opacity-10 rounded-sm  shadow-2xl bg-slate-100 py-8 ">
                                <div className="flex flex-col justify-center items-center text-xs gap-2 text-black">
                                    {/* <Image
                                        src={logo}
                                        height={100}
                                        width={100}
                                        alt="logo"
                                    /> */}
                                    <h1>Bike Price Prediction</h1>
                                    <h1 className="text-lg font-bold md:pt-2 text-black">Login into your account </h1>
                                </div>

                                <div className="flex flex-col relative " >
                                    <label htmlFor="name" className="text-gray-600 text-xs">Email</label>
                                    <div className=" relative flex">
                                        <Field id="texy" name="email" className="relative border h-7 w-56 px-2 bg-blue-100" />
                                        <div className=" flex items-center justify-center px-2 border rounded-sm bg-blue-500 text-white text-sm font-bold z-3">
                                            <BsPhone />
                                        </div>
                                    </div>
                                    <div className="flex w-60 ">
                                        {touched.PhoneNo && errors.PhoneNo ? <div className="text-red-800 text-xs ">{errors.PhoneNo}</div> : null}
                                    </div>
                                </div>

                                <div className="flex flex-col" >
                                    <label htmlFor="name" className="text-gray-600 text-xs">Password</label>
                                    <div className="relative flex">
                                        <Field id="Password" name="Password" type={showPassword ? 'text' : 'password'} className="relative border h-7 w-56 px-2 bg-blue-100" />
                                        <div className="absolute right-10 top-1 flex items-center" onClick={handleTogglePassword}>
                                            {showPassword ? (
                                                <AiOutlineEye
                                                    className="h-5 w-5 text-gray-500"
                                                    aria-hidden="true"
                                                />
                                            ) : (
                                                <AiOutlineEyeInvisible
                                                    className="h-5 w-5 text-gray-500"
                                                    aria-hidden="true"
                                                />
                                            )}
                                        </div>

                                        <div className=" flex items-center justify-center px-2 border rounded-sm bg-blue-500 text-white text-sm font-bold z-3">
                                            <RiLockPasswordLine />
                                        </div>

                                    </div>
                                    {touched.Password && errors.Password ? <div className="text-red-800 text-xs ">{errors.Password}</div> : null}
                                    <div className="text-xs text-red-600 pt-2">
                                        <Link href="">
                                            <button>Forget Password ?</button>
                                        </Link>

                                    </div>
                                </div>


                                <div className="flex items-center justify-center w-[400px] gap-3 ">
                                    {/* <Field type="checkbox" name="remember" id="remember" /> */}
                                    <div>
                                        {/* <button
                                            type="submit"
                                            disabled={!isValid || !dirty } 
                                            className="py-2 px-20 cursor-pointer bg-blue-200 text-black text-sm  rounded-sm "
                                        >
                                            Login Now
                                        </button> */}
                                         <Link href="/">
                                            <button
                                            className="py-2 px-20 cursor-pointer bg-blue-200 text-black text-sm  rounded-sm ">Login Now</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Form>

                    )}
                </Formik>
            </div>
        </div>

    );
};

export default Login;
