"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import NavBar from "@/components/Layout/NavBar";
import { IRootState } from "@/types/redux";
import axios from "@/utils/axios.util";

interface CallRecord {
  callId: string;
  userId: string;
  createdAt: string;
}

export default function CallHistoryPage() {
  const router = useRouter();
  const user = useSelector((state: IRootState) => state.user);
  const [calls, setCalls] = useState<CallRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Redirect to login if not authenticated
    if (user.id === "") {
      router.push("/auth/login");
      return;
    }

    // Fetch call history
    const fetchCallHistory = async () => {
      try {
        const response = await axios.get("/call/history");
        setCalls(response.data.data?.calls || []);
      } catch (error) {
        console.error("Failed to fetch call history:", error);
        setCalls([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCallHistory();
  }, [user, router]);

  if (user.id === "") {
    return null;
  }

  return (
    <main>
      <NavBar />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Call History</h1>
        
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
          </div>
        ) : calls.length === 0 ? (
          <div className="bg-white shadow-lg rounded-lg p-8 text-center">
            <p className="text-xl text-gray-600 mb-4">No call history found</p>
            <p className="text-gray-500 mb-6">
              Start your first video call to see your call history here.
            </p>
            <button
              onClick={() => router.push("/")}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full"
            >
              Start a Call
            </button>
          </div>
        ) : (
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Call ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date & Time
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {calls.map((call) => (
                    <tr key={call.callId} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm font-mono text-gray-900">
                          {call.callId}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-900">
                          {new Date(call.createdAt).toLocaleString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => router.push(`/${call.callId}`)}
                          className="text-blue-600 hover:text-blue-900 text-sm font-medium"
                        >
                          Rejoin
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
