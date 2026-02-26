'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Must use 'next/navigation' in App Router
import { Mail, Lock, ArrowRight, AlertCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// 1. Zod Schema (DTO)
const loginSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const Login = () => {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);

  // 2. React Hook Form Setup
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  // 3. The Actual API Submission
  const onSubmit = async (data: LoginFormValues) => {
    setServerError(null); // Clear previous errors

    try {
      // Replace this URL with your actual backend endpoint
      const response = await fetch('/api/v1/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        // If Spring Boot sends back a 401 Unauthorized
        const errorData = await response.json();
        throw new Error(errorData.message || 'Invalid email or password');
      }

      // 4. Success! The backend set the HttpOnly cookie.
      // Now we redirect the user to the protected dashboard.
      router.push('/dashboard');
      
    } catch (error: any) {
      // Catch network errors or backend 401s and display them to the user
      setServerError(error.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-linear-to-r from-[#016DAB] to-[#01CB89] p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
        
        <div className="px-8 pt-10 pb-6 text-center">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-[#016DAB] mb-4">
            <span className="text-2xl font-bold">G</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-800">Welcome Back</h2>
          <p className="text-slate-500 mt-2">Please sign in to your GradePlus account</p>
        </div>

        <div className="px-8 pb-10">
          
          {/* Backend Error Alert */}
          {serverError && (
            <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg flex items-center gap-2 text-sm">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <span>{serverError}</span>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            
            {/* Email Input */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700" htmlFor="email">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  id="email"
                  type="email"
                  {...register('email')}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all ${
                    errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:ring-[#01CB89]'
                  }`}
                  placeholder="name@example.com"
                />
              </div>
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-semibold text-slate-700" htmlFor="password">
                  Password
                </label>
                <Link href="/forgot-password" className="text-sm font-medium text-[#016DAB] hover:text-[#01CB89] transition-colors">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  id="password"
                  type="password"
                  {...register('password')}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all ${
                    errors.password ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:ring-[#01CB89]'
                  }`}
                  placeholder="••••••••"
                />
              </div>
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 bg-linear-to-r from-[#016DAB] to-[#01CB89] text-white font-semibold py-3 px-4 rounded-lg hover:opacity-90 disabled:opacity-70 disabled:cursor-not-allowed transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#016DAB] shadow-lg"
            >
              {isSubmitting ? 'Verifying...' : 'Sign In'}
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-slate-600">
            Don't have an account?{' '}
            <Link href="/signup" className="font-semibold text-[#016DAB] hover:text-[#01CB89] transition-colors">
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;