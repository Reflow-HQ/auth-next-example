"use client";

import { createSubscription } from "@reflowhq/auth-next/client";
import Button from "@/app/components/Button";

export default function SubscribeButton() {
  return (
    <Button
      onClick={() => {
        alert("To test subscriptions, delete this alert.");

        // Make sure that you've created Subscription plans for your store. Then add
        // the ID of a plan_price below. You can obtain your store plans by calling
        // the api - https://reflowhq.com/docs/api/#get-all-subscription-plans

        // createSubscription({
        //   priceID: 123456,
        //   onSuccess: () => location.reload(),
        // })
      }}
    >
      Subscribe
    </Button>
  );
}
