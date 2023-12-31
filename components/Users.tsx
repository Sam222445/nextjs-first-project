"use client";

import React from "react"
import Image from "next/image"
import { User } from "@/types";
import Link from "next/link";

const Users = ({ users }: { users: User[] }) => {
  return (
    <ul>
      {users.map((user: User) => (
        <Link href={`/users/${user.id}`} key={user.id} className="bg-slate-600 mb-2 p-4 rounded-md text-black flex justify-between cursor-pointer">
          <div>
            <h5 className="font-bold">{user.id} {user.first_name} {user.last_name}</h5>
            <p className="text-slate-100">email: {user.email}</p>
          </div>
          <Image className="rounded-full" src={user.avatar} width={90} height={90} alt='User Avatar' />
        </Link>
      ))}
    </ul>
  )
}

export default Users;
