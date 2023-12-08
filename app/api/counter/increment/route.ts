import getAuth from "@/auth";

export async function POST() {
  const auth = getAuth();
  await auth.set("counter", (await auth.get("counter", 0)) + 1);
  return Response.json({ success: true });
}
