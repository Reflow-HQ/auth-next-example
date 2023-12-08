import getAuth from "@/auth";

export async function POST() {
  const auth = getAuth();
  await auth.forget("counter");
  return Response.json({ success: true });
}
