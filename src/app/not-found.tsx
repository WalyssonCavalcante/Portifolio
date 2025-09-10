import Link from "next/link";
import { StarBackground } from "./components/StarBackground";
import { Header } from "./components/Header";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <StarBackground />
      <div
        className="flex flex-1 items-center justify-center"
        style={{ position: "absolute", top: "300px", left: "550px" }}
      >
        <main className="text-center">
          <h1 className="text-6xl font bold">404</h1>
          <h2 className="text-2xl mt-4">Página Não Encontrada</h2>
          <p className="mt-2">
            Desculpe, a página que você está procurando não existe.
          </p>
          <Link
            href="/"
            className="cosmic-button animate-fade-in-delay-5 mt-6 inline-block p-5"
          >
            Voltar para a Página Inicial
          </Link>
        </main>
      </div>
    </div>
  );
}
