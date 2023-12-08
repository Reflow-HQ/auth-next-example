import IncrementButton from "@/app/components/IncrementButton";
import ClearButton from "@/app/components/ClearButton";
import getAuth from "@/auth";

export default async function Page() {
  const auth = getAuth();

  return (
    <>
      <p>Counter value is: {await auth.get("counter", 0)}</p>
      <IncrementButton />
      <br />
      <ClearButton />
    </>
  );
}
