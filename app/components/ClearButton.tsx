"use client";

export default function ClearButton() {
  async function increment() {
    await fetch("/api/counter/clear", {
      credentials: "include",
      method: "POST",
    });
    location.reload();
  }
  return <button onClick={increment}>Clear</button>;
}
