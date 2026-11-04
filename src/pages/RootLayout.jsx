import { Link, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <header>
        <Link to="/" className="logo">MANAGER STOCK</Link>
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/items">Items</Link>
        </nav>
      </header>
      <div>
        <Outlet />
      </div>
      <footer>
        Manager Stock 2026 - Todos os direitos reservados
      </footer>
    </>
  )
}