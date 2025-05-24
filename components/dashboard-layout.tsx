"use client";

import type React from "react";

import { signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home, Pizza, LogOut, User, Zap } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const { data: session } = useSession();
  const pathname = usePathname();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleSignOut = async () => {
    setIsLoggingOut(true);
    try {
      await signOut({ callbackUrl: "/" });
    } catch (error) {
      console.error("Sign out error:", error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  const navItems = [
    {
      href: "/dashboard",
      icon: Home,
      label: "Dashboard",
      active: pathname === "/dashboard",
    },
    {
      href: "/dashboard/orders",
      icon: Pizza,
      label: "Orders",
      active: pathname === "/dashboard/orders",
    },
  ];

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 cyber-grid opacity-10" />

      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <Card className="glass-card neon-border px-6 py-3">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Pizza className="w-6 h-6 text-purple-400" />
                <Zap className="w-3 h-3 text-cyan-400 absolute -top-1 -right-1" />
              </div>
              <span className="font-bold text-white">PUNK</span>
            </div>

            <div className="flex items-center space-x-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <Button
                    variant={item.active ? "default" : "ghost"}
                    size="sm"
                    className={`${
                      item.active
                        ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white glow-animation"
                        : "text-gray-300 hover:text-white hover:bg-white/10"
                    } transition-all duration-300`}
                  >
                    <item.icon className="w-4 h-4 mr-2" />
                    {item.label}
                  </Button>
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-3 border-l border-purple-500/20 pl-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm text-gray-300 hidden md:block">
                  {session?.user?.name?.split(" ")[0]}
                </span>
              </div>

              <Button
                onClick={handleSignOut}
                disabled={isLoggingOut}
                variant="ghost"
                size="sm"
                className="text-gray-300 hover:text-red-400 hover:bg-red-500/10"
              >
                {isLoggingOut ? (
                  <div className="w-4 h-4 border-2 border-gray-300/30 border-t-gray-300 rounded-full animate-spin" />
                ) : (
                  <LogOut className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>
        </Card>
      </nav>

      <main className="pt-24 pb-8 px-4">{children}</main>

      <div className="fixed top-1/4 left-8 w-2 h-2 bg-purple-500 rounded-full blur-sm float-animation opacity-60" />
      <div className="fixed top-1/3 right-12 w-3 h-3 bg-cyan-500 rounded-full blur-sm float-animation delay-1000 opacity-60" />
      <div className="fixed bottom-1/4 left-1/4 w-2 h-2 bg-pink-500 rounded-full blur-sm float-animation delay-2000 opacity-60" />
    </div>
  );
}
