import Link from "next/link";

/** This link doesn't respect bathPath when locale prop is set, remove locale prop and basePath works again */
export default function Home() {
  return <Link href="/search" locale="en-us">Click this to change locale</Link>
}
