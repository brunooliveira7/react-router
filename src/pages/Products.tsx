import { useSearchParams } from "react-router";

export function Products() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  return (
    <div>
      <nav>
        <a href="/">Voltar</a>
      </nav>

      <h1>Produtos</h1>

      {category && ( // se a categoria existir, renderiza o span
        <span>
          Categoria<strong> {category}</strong>
        </span>
      )}
    </div>
  );
}
