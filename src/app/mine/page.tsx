"use client";
import { useSession, signOut } from "next-auth/react";

export default function Mine() {
  const session = useSession();
  console.log(session);
  return (
    <div className="flex flex-col justify-center items-center h-50vh">
      <div>my account name:{session.data?.user?.name}</div>
      <button
        className="mt-40px px-60px h-40px leading-40px text-500 rounded-8px bg-white text-center text-green-800"
        onClick={() => {
          signOut({ callbackUrl: "/login" });
        }}
      >
        logout
      </button>
    </div>
  );
}
