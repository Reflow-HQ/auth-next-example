"use client";

import { useSessionSync } from "@reflowhq/auth-next/client";
import { useState } from "react";

export default function SessionBanner() {
  let [show, setShow] = useState(false);
  let [message, setMessage] = useState("");

  useSessionSync({
    onChange: (e) => {
      if (e == "signout") {
        setMessage("You've been signed out in another tab.");
      }
      if (e == "signin") {
        setMessage(
          "You've signed-in in another tab. Reload the page to see your profile."
        );
      }
      setShow(true);
    },
  });
  return (
    <div
      style={{
        padding: 20,
        color: "white",
        backgroundColor: "red",
        display: show ? "block" : "none",
      }}
    >
      {message}
    </div>
  );
}
