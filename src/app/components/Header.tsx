const Header = () => {
  return (
    <header className="py-12 mb-12 flex items-center justify-between border-solid border-b border-[#484848]">
      <h1 className="text-6xl font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-indigo-700">
        <a href="/">d.suke</a>
      </h1>
      <nav>
        <ul className="flex items-center gap-12 text-xl font-bold text-indigo-400">
          <li className="hover:text-indigo-300">
            <a href="/about">About</a>
          </li>
          <li className="hover:text-indigo-300">
            <a href="/work">Work</a>
          </li>
          <li className="hover:text-indigo-300">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
