function Layout ({ children }) {
  return (
    <div className="layout">
      <header>
        <h1>Mwangaza Melodies</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>&copy; 2024 Mwangaza Melodies. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Layout;