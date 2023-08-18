"use client"
import { useSession } from "next-auth/react"

export default function Mine(){
  const session = useSession()
  console.log(session)
  return (<>
  
  my account name:{session.data}
  </>)
} 