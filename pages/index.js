import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome young Hobbits! Where may Gandalf the Grey guide you to?</h1>
      <Link href="/volumes">
        <button>Start your journey!</button>
      </Link>
    </div>
  );
}
