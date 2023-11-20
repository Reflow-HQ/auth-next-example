import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import SubscribeButton from "./components/SubscribeButton";
import ModifySubscriptionButton from "./components/ModifySubscriptionButton";
import SessionBanner from "./components/SessionBanner";
import getAuth from "@/auth";

export default async function Page() {
  const auth = getAuth();
  const user = await auth.user();

  if (await auth.isSignedIn()) {
    const sub = await auth.subscription();

    return (
      <>
        <SessionBanner />
        <h1>Hello, {user?.name}</h1>
        {(await auth.isNew()) ? <p>This is your brand new account!</p> : <></>}
        {sub ? (
          <>
            <p>Name of your plan: {sub.plan.name}</p>
            <p>
              Price: {sub.price.price_formatted} per {sub.price.billing_period}
            </p>
            <ModifySubscriptionButton />
          </>
        ) : (
          <SubscribeButton />
        )}
        <br />
        <hr />
        <br />
        <p>Here is your session info:</p>
        <code>{JSON.stringify(await auth.all())}</code>
        <LogoutButton />
      </>
    );
  }

  return (
    <>
      <SessionBanner />
      <h1>Sign in</h1>
      <LoginButton />
      <SubscribeButton />
    </>
  );
}
