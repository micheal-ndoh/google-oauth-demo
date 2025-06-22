"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function HomePage() {
  const { data: session } = useSession();

  return (
    <main style={{ padding: "8rem" }}>
      {!session ? (
        <>
          <h1>Welcome To My Google-auth-App Demo </h1>
            <h3> Please login to continue </h3>
          <button style={{ backgroundColor: "green", color: "black", }} onClick={() => signIn("google")}>Login with Google</button>
        </>
      ) : ( 
        <>
          <h1>Welcome, {session.user?.name}</h1>
          <p>Email: {session.user?.email}</p>
          <img src={session.user?.image ?? ""} width={50} alt="Profile" />
          <br />
          <button onClick={() => signOut()}>Logout</button>
        </>
      )}
    </main>
  );
}
