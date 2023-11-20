"use client";

import { signIn } from "@reflowhq/auth-next/client";
import Button from "@/app/components/Button";

export default function LoginButton() {
  return (
    <Button onClick={() => signIn({ onSuccess: () => location.reload() })}>
      Sign-in to your account
    </Button>
  );
}
