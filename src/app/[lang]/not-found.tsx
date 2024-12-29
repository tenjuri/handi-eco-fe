import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-full text-center flex flex-col gap-4">
      <h2>Page Not Found</h2>
      <Link href="/" className="cursor-pointer">
        Return Home
      </Link>
    </div>
  );
}
