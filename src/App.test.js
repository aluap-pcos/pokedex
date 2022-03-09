import { render, screen, waitFor } from "@testing-library/react";
import App from "./app";
import Details from "./pages/Details/Details";
import Favoritos from "./pages/favoritos/Favoritos";
import '@testing-library/jest-dom';

describe('Página Home', () => {
    it("Possui botão de busca", () => {
        render(<App />);

        expect(screen.getByText('Buscar')).toBeInTheDocument();
    })
    it("Possui input para busca", () => {
        render(<App />);

        expect(screen.getByPlaceholderText('Digite o nome do Pokémon')).toBeInTheDocument();
    })
    it("Input para busca está habilitado", () => {
        render(<App />);

        expect(screen.getByPlaceholderText('Digite o nome do Pokémon')).toBeEnabled();
    })
})