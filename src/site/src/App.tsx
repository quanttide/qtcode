import { Link, Outlet } from 'react-router-dom'

export default function App() {
  return (
    <div className="app">
      <header>
        <h1>量潮代码中心</h1>
        <nav>
          <Link to="/">首页</Link>
          <Link to="/specs">工程规范</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>© 2026 量潮 · 软件工程档案公开披露</footer>
    </div>
  )
}
