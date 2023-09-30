'use client';

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import Profile from "@components/Profile";

const page = () => {
  return (
    <Profile
    name='MY'
    decs='Welcome to your personalized profile page'
    data={[]}
    handleEdit={[]}
    handleDelete={[]} />
  )
}

export default page