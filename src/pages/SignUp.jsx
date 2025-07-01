import React from 'react'
import { useForm } from 'react-hook-form'
import { BsGoogle } from 'react-icons/bs';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        // handle registration logic
        console.log(data);
    };
    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-[#fcfef7]">
            {/* Left Side */}
            <div className="flex-1 flex flex-col justify-center items-center px-6 py-10 bg-white">
                {/* Logo */}
                <div className="w-full flex justify-start items-center mb-8">
                    <img src="/assets/logo.png" alt="Profast Logo" className="h-8" />
                    <p>ProFast</p>
                </div>
                <div className="w-full max-w-md">
                    <h2 className="text-3xl font-bold mb-2">Create an Account</h2>
                    <p className="text-gray-500 mb-8">Register with Profast</p>
                    {/* Avatar */}
                    <div className="flex justify-start mb-6">
                        <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center relative">
                            <svg className="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 19.125a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21c-2.676 0-5.216-.584-7.499-1.875z" /></svg>
                            <span className="absolute bottom-0 right-0 w-5 h-5 bg-[#b6e11a] rounded-full flex items-center justify-center border-2 border-white">
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" /></svg>
                            </span>
                        </div>
                    </div>
                    {/* Form */}
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Name</label>
                            <input type="text" {...register('name', { required: true })} placeholder="Name" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:border-[#b6e11a] outline-none" />
                            {errors.name && <span className="text-red-500 text-xs">Name is required</span>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Email</label>
                            <input type="email" {...register('email', { required: true })} placeholder="Email" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:border-[#b6e11a] outline-none" />
                            {errors.email && <span className="text-red-500 text-xs">Email is required</span>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Password</label>
                            <input type="password" {...register('password', { required: true })} placeholder="Password" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:border-[#b6e11a] outline-none" />
                            {errors.password && <span className="text-red-500 text-xs">Password is required</span>}
                        </div>
                        <button type="submit" className="w-full bg-[#d6f57a] hover:bg-[#b6e11a] text-[#222] font-semibold rounded-md py-2 transition-colors">Register</button>
                    </form>
                    <div className="flex items-center gap-4 mt-4 text-sm">
                        <span className="text-gray-500">Already have an account?</span>
                        <a href="/signin" className="text-[#b6e11a] font-semibold hover:underline">Login</a>
                    </div>
                    <div className="flex items-center my-4">
                        <div className="flex-grow h-px bg-gray-200" />
                        <span className="mx-2 text-gray-400">Or</span>
                        <div className="flex-grow h-px bg-gray-200" />
                    </div>
                    <button className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-md py-2 transition-colors border border-gray-200">
                        <BsGoogle/>
                        Register with google
                    </button>
                </div>
            </div>
            {/* Right Side Illustration */}
            <div className="hidden md:flex flex-1 items-center justify-center bg-[#fcfef7]">
                <img src="/assets/authImage.png" alt="Delivery Illustration" className="max-w-xs w-full" />
            </div>
        </div>
    )
}

export default SignUp