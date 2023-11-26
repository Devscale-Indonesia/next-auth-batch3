"use client";

import React from "react";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import { useLogin } from "../hooks/useLogin";

export const Login = () => {
  const { loading, handleChange, handleSubmitLogin } = useLogin();

  return (
    <main className="space-y-3">
      <Input name="email" placeholder="email@domain.com" onChange={handleChange} />
      <Input name="password" placeholder="password" onChange={handleChange} type="password" />
      <Button isDisabled={loading} color="primary" onClick={handleSubmitLogin}>
        Login
      </Button>
      <div className="flex gap-1">
        <div>Don't have an account ?</div>
        <Link href="/register">Register</Link>
      </div>
    </main>
  );
};
