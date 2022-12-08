import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link href="/vercel/next.js" prefetch={false}>
        Repo details
      </Link>
    </>
  );
}
