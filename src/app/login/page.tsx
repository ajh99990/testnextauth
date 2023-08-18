"use client"
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div className="flex justify-center items-center h-50vh">
      <button
        className="px-60px h-40px leading-40px text-center bg-white text-green-800 text-500 rounded-8px"
        onClick={() => signIn("google",{callbackUrl:"/mine"})}
      >
        使用google登录
      </button>
    </div>
  );
}
