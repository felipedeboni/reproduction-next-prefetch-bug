import { GetStaticPaths, GetStaticProps } from "next";

import Link from "next/link";

type ContactProps = {
  data: {
    full_name: string;
  };
};

export default function Contact({ data }: ContactProps) {
  return (
    <>
      <h1>{data.full_name}</h1>
      <Link href="/" prefetch={false}>
        Home
      </Link>
    </>
  );
}

export const getStaticProps: GetStaticProps<
  any,
  { owner: string; repo: string }
> = async (context) => {
  const { owner, repo } = context.params;

  const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
  const data = await res.json();

  console.log(data);

  return {
    props: {
      data,
    },
    revalidate: 1 * 60, // 1 hour
  };
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
