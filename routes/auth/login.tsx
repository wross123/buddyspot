import { Handlers } from "$fresh/server.ts";
import Layout from "../../components/Layout.tsx";
import LoginForm from "../../islands/LoginForm.tsx";
import { getCookies } from "../../utils/cookies.ts";

export const handler: Handlers = {
  GET(req, ctx) {
    const cookie = getCookies(req.headers)["user"] || null;
    if (cookie) {
      const domain = req.headers.get("host");
      if (domain === "localhost:8000") {
        return Response.redirect("http://localhost:8000/home");
      }
      return Response.redirect(`https://${domain}/home`);
    }
    return ctx.render(null);
  },
};
export default function login() {
  return (
    <Layout centered>
      <div className="bg-gray-800 dark:bg-gray-800 dark:text-white px-5 py-10 rounded-xl text-center shadow-lg text-white ">
        <h1 className=" text-2xl font-bold">Login</h1>
        <p className="max-w-[30ch] m-auto my-3">
          Hey, enter your details to continue to your account
        </p>
        <LoginForm />
      </div>
    </Layout>
  );
}
