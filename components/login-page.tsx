"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Chrome, Pizza, Zap } from "lucide-react";
import { useState } from "react";

export function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async () => {
    setIsLoading(true);
    try {
      await signIn("google", { callbackUrl: "/dashboard" });
    } catch (error) {
      console.error("Sign in error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4">
      <div className="absolute inset-0 cyber-grid opacity-20" />

      <div className="absolute top-20 left-20 w-4 h-4 bg-purple-500 rounded-full blur-sm float-animation" />
      <div className="absolute top-40 right-32 w-6 h-6 bg-cyan-500 rounded-full blur-sm float-animation delay-1000" />
      <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-pink-500 rounded-full blur-sm float-animation delay-2000" />

      <Card className="glass-card neon-border p-8 w-full max-w-md relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full blur-xl" />
        <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-xl" />

        <div className="relative z-10 text-center space-y-6">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="relative">
              <Pizza className="w-8 h-8 text-purple-400 glow-animation" />
              <Zap className="w-4 h-4 text-cyan-400 absolute -top-1 -right-1" />
            </div>
            <h1 className="text-2xl font-bold neon-text bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              PUNK PIZZA
            </h1>
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-white">
              Welcome to the Future
            </h2>
            <p className="text-gray-400">
              Access your cyberpunk pizza dashboard
            </p>
          </div>

          <Button
            onClick={handleSignIn}
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 glow-animation"
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Connecting...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Chrome className="w-5 h-5" />
                <span>Sign in with Google</span>
              </div>
            )}
          </Button>

          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-purple-500/20">
            <div className="text-center">
              <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <Zap className="w-4 h-4 text-purple-400" />
              </div>
              <p className="text-xs text-gray-400">Fast</p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <Pizza className="w-4 h-4 text-cyan-400" />
              </div>
              <p className="text-xs text-gray-400">Delicious</p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <Chrome className="w-4 h-4 text-pink-400" />
              </div>
              <p className="text-xs text-gray-400">Secure</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
