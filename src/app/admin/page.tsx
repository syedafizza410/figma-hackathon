"use client";

import { useSession} from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import AdminSidebar from "../../components/adminSidebar";

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg font-medium">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <AdminSidebar />
      <div className="mt-52 p-6 w-full text-center flex-grow">
        <h1 className="text-3xl md:text-5xl font-bold text-pink-500">Welcome to Admin Dashboard</h1>
        <p className="mt-2 font-semibold text-lg md:text-2xl text-purple-600">Hello😃 {session?.user?.email}</p>
        {/* <button
          onClick={() => signOut()}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Logout
        </button> */}
      </div>
    </div>
  );
}
