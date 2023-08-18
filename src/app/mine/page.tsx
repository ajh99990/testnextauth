"use client";
import { useSession, signOut } from "next-auth/react";
import { Suspense } from "react";

export default function Mine() {
  const session = useSession();
  console.log(session);
  return (
    <>
      <Suspense fallback={<div>login loading...</div>}>
        <div>my account name:{session.data?.user?.name}</div>
      </Suspense>
      <button
        onClick={() => {
          signOut({ callbackUrl: "/login" });
        }}
      >
        logout
      </button>
    </>
  );
}
