import { volumes } from "../../public/resources/lib/data";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ReturnOfTheKing() {
  let index = -1;
  const router = useRouter();
  const { slug } = router.query;
  const fellowship = volumes.find((volume, idx) => {
    if (volume.slug === slug) {
      index = idx;
      return true;
    }
  });
  console.log("index", index);
  console.log("hello", fellowship);

  if (!fellowship) {
    return null;
  }
  return (
    <div>
      <Head>
        <title>{fellowship.title}</title>
      </Head>
      <Link href="/volumes">
        <button>Go back</button>
      </Link>
      <h1>{fellowship.title}</h1>
      <p>{fellowship.description}</p>
      <ul>
        {fellowship.books.map((book) => (
          <li key={book.ordinal}>
            {book.ordinal} {book.title}
          </li>
        ))}
      </ul>
      {index === 0 ? null : (
        <button
          onClick={() => {
            router.push(volumes[index - 1].slug);
          }}
        >
          Previous
        </button>
      )}
      {index === 2 ? null : (
        <button
          onClick={() => {
            router.push(volumes[index + 1].slug);
          }}
        >
          Next
        </button>
      )}
    </div>
  );
}
