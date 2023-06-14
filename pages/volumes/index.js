import { volumes } from "../../public/resources/lib/data";
import { introduction } from "../../public/resources/lib/data";
import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Volumes() {
  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Gollum trollum</title>
      </Head>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <button
        onClick={() =>
          router.push(`/volumes/${getRandomElement(volumes).slug}`)
        }
      >
        Give me precious!
      </button>
      <ul>
        {volumes.map((volume) => (
          <Fragment key={volume.color}>
            <Link href={`/volumes/${volume.slug}`}>
              <li>{volume.title}</li>
              <Image
                src={volume.cover}
                alt="book cover"
                width={200}
                height={300}
              />
            </Link>
          </Fragment>
        ))}
      </ul>
    </>
  );
}
