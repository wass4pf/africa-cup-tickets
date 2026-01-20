import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { createPageUrl } from '@/utils';

export default function EnterPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleContinue = () => {
    navigate(createPageUrl('Home'));
  };

  const handleBack = () => {
    navigate(createPageUrl('SignIn'));
  };

  return (
    <div className="min-h-screen bg-white px-6 pt-20">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Enter your password</h1>

        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-semibold text-gray-900">
              Password
            </Label>
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-12 rounded-lg border-gray-300 focus:border-[#8B1A1A] focus:ring-[#8B1A1A]"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Checkbox
                id="show-password"
                checked={showPassword}
                onCheckedChange={setShowPassword}
              />
              <label
                htmlFor="show-password"
                className="text-sm text-gray-900 cursor-pointer"
              >
                Show password
              </label>
            </div>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot your password?
            </a>
          </div>

          <div className="space-y-3 pt-2">
            <Button
              onClick={handleContinue}
              className="w-full h-12 bg-[#5C1A1A] hover:bg-[#4A1515] text-white font-semibold rounded-lg"
            >
              Continue
            </Button>

            <Button
              onClick={handleBack}
              variant="outline"
              className="w-full h-12 bg-[#5C1A1A] hover:bg-[#4A1515] text-white border-[#5C1A1A] font-semibold rounded-lg"
            >
              Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}