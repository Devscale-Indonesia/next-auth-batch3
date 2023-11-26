"use client";

import { Button, Input } from "@nextui-org/react";
import React from "react";
import Link from "next/link";
import { useRegister } from "../hooks/useRegister";

export const Register = () => {
  const { loading, handleChange, handleSubmitRegister } = useRegister();

  return (
    <main className="space-y-3">
      <Input name="name" placeholder="name" onChange={handleChange} />
      <Input name="email" placeholder="email@domain.com" onChange={handleChange} />
      <Input name="password" placeholder="password" type="password" onChange={handleChange} />
      <Button isDisabled={loading} color="primary" onClick={handleSubmitRegister}>
        Register
      </Button>
      <div className="flex gap-1">
        <div>Have an account ?</div>
        <Link href="/login">Login</Link>
      </div>
    </main>
  );
};
