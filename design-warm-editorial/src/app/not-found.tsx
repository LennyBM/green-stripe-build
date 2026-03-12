import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-bg px-6">
      <div className="text-center max-w-lg">
        <p className="text-[10rem] font-heading font-bold text-gold/20 leading-none select-none">
          404
        </p>
        <div className="mt-[-2rem]">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-fg mb-4">
            Page Not <em className="italic font-normal text-accent">Found</em>
          </h1>
          <p className="text-fg-light/70 font-heading italic text-lg mb-10">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-fg text-cream text-sm font-medium hover:shadow-[0_8px_40px_rgba(42,31,20,0.3)] transition-all duration-300"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
