"use client";
import { useRouter } from "next/navigation";

const LoginButton = () => {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/dashboard"); // Navigate to /dashboard
  };

  return (
    <button className="w-40 p-3 rounded-full bg-white font-bold text-black hover:bg-gray-200 hover:scale-105 transition-all duration-300 ease-in-out" onClick={handleLoginClick}>LOG IN</button>
  );
};

export default LoginButton;
