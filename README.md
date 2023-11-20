This is a Next.js 13 example that demonstrates integrating Reflow's Auth and Subscriptions with the help of the [auth-next library](https://github.com/Reflow-HQ/libs/tree/master/auth-next).

# Getting Started

To run the example, follow these steps

1. `npm install` the dependencies in this folder
2. Edit the auth.ts file and enter your Reflow store ID and paste a secret 32 char string. One way to generate a random string on unix-like systems is with this command:
   `tr -dc A-Za-z0-9 </dev/urandom | head -c 32`
3. Start the development server with `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the app running.
