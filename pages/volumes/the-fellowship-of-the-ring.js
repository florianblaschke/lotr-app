import { volumes } from "../../public/resources/lib/data";
import Link from "next/link";

const fellowship = volumes.find(
  ({ slug }) => slug === "the-fellowship-of-the-ring"
);

export default function Fellowship() {
  return (
    <div>
      <Link href="/volumes">
        <button>Go back</button>
      </Link>
      <h1>{fellowship.title}</h1>
      <p>{fellowship.description}</p>
      <ul>
        {fellowship.books.map((book) => (
          <li>
            {book.ordinal} {book.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
