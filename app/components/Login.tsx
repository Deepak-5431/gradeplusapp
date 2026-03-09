'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { AlertCircle, Smartphone, Eye, EyeOff, Mail, Lock } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const loginSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const Login = () => {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    setServerError(null);
    try {
      const response = await fetch('/api/v1/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Invalid email or password');
      }

      router.push('/dashboard');

    } catch (error: any) {
      setServerError(error.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center bg-linear-to-br from-[#0BA0C8] via-[#0BA0C8] to-[#01CB89] p-4 md:p-8 relative overflow-hidden"
      style={{
        backgroundImage: 'url(/AI/bglogin.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      
      {/* Animated Background Circles */}
      

      <div className="w-full max-w-5xl bg-white/45 backdrop-blur-md rounded-3xl md:rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row relative z-10">

        {/* Left Side - App Download Section (Hidden on mobile) */}
        <div className="hidden md:flex md:w-1/2 bg-linear-to-br from-[#0BA0C8] to-[#01CB89] p-8 lg:p-12 flex-col items-center justify-between relative overflow-hidden">
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -mr-24 -mt-24"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"></div>
          
          <div className="relative z-10 w-full flex flex-col items-center">
            {/* Header */}
            <div className="text-center text-white mb-8">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Smartphone className="w-7 h-7" />
                <h3 className="text-2xl lg:text-3xl font-bold">Get Our Mobile App</h3>
              </div>
              <p className="text-base lg:text-lg opacity-90">Experience GradePlus on the go!</p>
            </div>
            
            {/* QR Code and Play Store Cards */}
            <div className="flex gap-6 mb-8">
              {/* QR Code Card */}
              <div className=" p-6 rounded-2xl shadow-xl flex-col content-center items-center">
                <Image
                  src="/AI/GradePlusApp.png"
                  alt="Scan to Download"
                  width={140}
                  height={140}
                  className="object-contain mb-3"
                />
                <p>Scan to download</p>
              </div>

              {/* Play Store Card */}
              <div className=" p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center object-fill">
                <Image
                  src="/AI/logins.png"
                  alt="Available on Play Store"
                  width={140}
                  height={100}
                  className="object-contain mb-3"
                />
              </div>
            </div>

          
          
          </div>

          
        </div>

        <div className="w-full md:w-1/2 flex flex-col bg-white p-8 md:p-10 lg:p-12">
          
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16  rounded-2xl mb-4 ">
              <span className="text-white text-3xl font-bold"><Image 
                src="/favicon.ico" 
                alt="GradePlus Logo" 
                width={48} 
                height={48} 
                className="object-contain"
              /></span>
            </div>
            <h1 className="text-2xl font-bold text-slate-800 mb-1">GradePlus</h1>
            <p className="text-sm text-slate-500">Sign in to continue your journey</p>
          </div>

          <h2 className="text-2xl font-bold text-slate-800 mb-6">Login</h2>

          {/* Global Error Message */}
          {serverError && (
            <div className="mb-6 p-3 bg-red-50 border-l-4 border-red-500 text-red-700 rounded text-sm flex items-start gap-2">
              <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
              <span>{serverError}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            
            {/* Email Input */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2" htmlFor="email">
                Email Address
              </label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  {...register('email')}
                  className={`w-full pl-11 pr-4 py-3 border-2 rounded-xl text-sm focus:outline-none focus:ring-2 transition-all ${
                    errors.email 
                      ? 'border-red-400 bg-red-50 focus:ring-red-400' 
                      : 'border-slate-200 bg-slate-50 focus:ring-[#0BA0C8] focus:border-[#0BA0C8] focus:bg-white'
                  }`}
                  placeholder="your.email@example.com"
                />
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Mail className={`h-5 w-5 ${errors.email ? 'text-red-400' : 'text-slate-400'}`} />
                </div>
                {errors.email && (
                  <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none">
                    <AlertCircle className="h-5 w-5 text-red-500" />
                  </div>
                )}
              </div>
              {errors.email && (
                <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  {...register('password')}
                  className={`w-full pl-11 pr-12 py-3 border-2 rounded-xl text-sm focus:outline-none focus:ring-2 transition-all ${
                    errors.password 
                      ? 'border-red-400 bg-red-50 focus:ring-red-400' 
                      : 'border-slate-200 bg-slate-50 focus:ring-[#0BA0C8] focus:border-[#0BA0C8] focus:bg-white'
                  }`}
                  placeholder="Enter your password"
                />
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Lock className={`h-5 w-5 ${errors.password ? 'text-red-400' : 'text-slate-400'}`} />
                </div>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Forgot Password Link */}
            <div className="text-right">
              <Link 
                href="/forgot-password" 
                className="text-sm font-semibold text-[#0BA0C8] hover:text-[#01CB89] transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#0BA0C8] hover:bg-[#0195B5] text-white font-bold py-3.5 rounded-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-[#0BA0C8]/30 hover:shadow-xl hover:shadow-[#0BA0C8]/40"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Signing in...
                </>
              ) : (
                <>
                  Sign In
                  <span className="text-lg">→</span>
                </>
              )}
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="text-center mt-6 text-sm text-slate-600">
            Don't have an account?{' '}
            <Link href="/signup" className="font-bold text-[#0BA0C8] hover:text-[#01CB89] transition-colors">
              Create one now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;