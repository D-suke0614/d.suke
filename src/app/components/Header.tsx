import Link from 'next/link'

const Header = () => {
  return (
    <header className="py-12 mb-12 flex items-center justify-between border-solid border-b border-[#484848]">
      <h1 className="text-6xl font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-indigo-700 hover:bg-gradient-to-r hover:from-indigo-100 hover:to-indigo-500">
        <Link href="/">d.suke</Link>
      </h1>
      <nav>
        <ul className="flex items-center gap-12 text-xl font-bold text-indigo-400">
          <li className="hover:text-indigo-300">
            <Link href="/about">About</Link>
          </li>
          {/* <li className="hover:text-indigo-300">
            <Link href="/work">Work</Link>
          </li> */}
          <li className="hover:text-indigo-300">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
