import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <section className="container-tight py-24">
      <h1 className="text-4xl font-semibold">Page not found</h1>
      <p className="mt-3 text-muted">The page you requested does not exist.</p>
      <Link className="mt-6 inline-flex text-primary hover:underline" to="/">
        Back to home
      </Link>
    </section>
  );
}
