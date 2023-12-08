"use client";

export default function IncrementButton() {
  async function increment() {
    await fetch("/api/counter/increment", {
      credentials: "include",
      method: "POST",
    });
    location.reload();
  }
  return <button onClick={increment}>Increment counter</button>;
}
