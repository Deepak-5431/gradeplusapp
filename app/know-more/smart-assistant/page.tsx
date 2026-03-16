import Link from 'next/link';

export default function SmartAssistantPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 md:px-8">
      <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">Smart Study Assistant</h1>
      <p className="mt-4 text-slate-700">
        Discover how the Smart Study Assistant helps with doubt-solving, guided practice, and daily learning support.
      </p>
      <Link href="/" className="mt-8 inline-block rounded-lg bg-slate-900 px-5 py-2.5 font-semibold text-white">
        Back to Home
      </Link>
    </main>
  );
}
