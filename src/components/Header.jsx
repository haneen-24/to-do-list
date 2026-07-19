function Header({ theme, toggleTheme }) {
  return (
    <header className="mb-5 text-center">
      <h1 className="text-4xl font-bold text-gray-400 mt-8 max-w-md mx-auto">
        To Do List
      </h1>

        
        <input
          type="checkbox"
          checked={theme === "dark"}
          className="toggle border-indigo-600 bg-indigo-500 checked:border-orange-500 checked:bg-orange-400 checked:text-orange-800"
          onChange={toggleTheme}
        />
    </header>
  );
}
export default Header;