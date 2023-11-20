"use client";

import { modifySubscription } from "@reflowhq/auth-next/client";
import Button from "@/app/components/Button";

export default function ModifySubscriptionButton() {
  return (
    <Button onClick={() => modifySubscription()}>Modify Subscription</Button>
  );
}
