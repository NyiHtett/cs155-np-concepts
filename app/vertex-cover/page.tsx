import Link from "next/link";

export const metadata = { title: "Approximate Vertex Cover · CS155" };

export default function VertexCoverPage() {
  return (
    <>
      <Link href="/" className="page-back">◀ Home</Link>
      <iframe src="/vertex-cover.html" className="viz-frame" title="Approx Vertex Cover" />
    </>
  );
}
