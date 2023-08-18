"use client"
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <>
      <button
        className="w-100px h-30px leading-30px text-center"
        onClick={() => signIn("google",{callbackUrl:"/mine"})}
      >
        使用google登录
      </button>
    </>
  );
}
