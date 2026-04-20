import Link from "next/link";

export const metadata = { title: "Graph 2-Coloring · CS155" };

export default function TwoColoringPage() {
  return (
    <>
      <Link href="/" className="page-back">◀ Home</Link>
      <iframe src="/two-coloring.html" className="viz-frame" title="Graph 2-Coloring" />
    </>
  );
}
