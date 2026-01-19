"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import NavBar from "@/components/Layout/NavBar";
import { IRootState } from "@/types/redux";

export default function ProfilePage() {
  const router = useRouter();
  const user = useSelector((state: IRootState) => state.user);

  useEffect(() => {
    // Redirect to login if not authenticated
    if (user.id === "") {
      router.push("/auth/login");
    }
  }, [user, router]);

  if (user.id === "") {
    return null;
  }

  return (
    <main>
      <NavBar />
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <h1 className="text-4xl font-bold mb-8">User Profile</h1>
        
        <div className="bg-white shadow-lg rounded-lg p-6 space-y-6">
          <div className="border-b pb-4">
            <h2 className="text-2xl font-semibold mb-4">Account Information</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Name
                </label>
                <p className="text-lg font-semibold text-gray-900">{user.name}</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Email
                </label>
                <p className="text-lg text-gray-900">{user.email}</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  User ID
                </label>
                <p className="text-sm text-gray-600 font-mono">{user.id}</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Account Created
                </label>
                <p className="text-lg text-gray-900">
                  {new Date(user.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Stats</h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Account Status</p>
                <p className="text-xl font-semibold text-blue-600">Active</p>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <p className="text-sm text-gray-500">
              Need to update your information? Contact support for assistance.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
