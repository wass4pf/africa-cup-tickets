import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { createPageUrl } from '@/utils';

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleNext = () => {
    navigate(createPageUrl('EnterPassword'));
  };

  return (
    <div className="min-h-screen bg-white px-6 pt-20">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Sign in</h1>
        <p className="text-gray-600 mb-8">Sign in to your account.</p>

        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-semibold text-gray-900">
              Email address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="nome@host.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-12 rounded-lg border-gray-300 focus:border-[#8B1A1A] focus:ring-[#8B1A1A]"
            />
          </div>

          <Button
            onClick={handleNext}
            className="w-full h-12 bg-[#5C1A1A] hover:bg-[#4A1515] text-white font-semibold rounded-lg"
          >
            Next
          </Button>

          <p className="text-center text-sm text-gray-600">
            New user?{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Create an account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}