import { Link } from "react-router-dom";

interface InfoPageProps {
  title: string;
}

export default function InfoPage({ title }: InfoPageProps) {
  return (
    <div className="container py-5 info-page">
      <section className="card">
        <h1 className="text-2xl mb-3">{title}</h1>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          posuere erat a ante venenatis dapibus posuere velit aliquet.
        </p>
        <Link to="/" className="btn btn-outline rounded-pill align-self-start">
          Volver
        </Link>
      </section>
    </div>
  );
}
