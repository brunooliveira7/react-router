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

      <div className="cards">
        <a href="/details/1">Produto 1</a>
        <a href="/details/2">Produto 2</a>
        <a href="/details/3">Produto 3</a>
        <a href="/details/4">Produto 4</a>
        <a href="/details/5">Produto 5</a>
      </div>
    </div>
  );
}
