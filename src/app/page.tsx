import Link from 'next/link'

const LINKS = [
  { href: 'https://github.com/D-suke0614', title: 'github.com' },
  { href: 'https://zenn.dev/d_suke0614', title: 'zenn.dev' },
  { href: 'https://twitter.com/0614d_suke', title: 'x.com' },
]

export default function Home() {
  return (
    <main className="flex flex-col gap-y-12">
      <div className="py-12 border-solid border-b border-[#484848]">
        <h1 className="text-6xl font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-indigo-700">
          d.suke
        </h1>
      </div>
      <section>
        <h2 className="text-3xl font-bold mb-6">Name</h2>
        <p className="text-[#e4e4e4]">Daisuke Kida.</p>
      </section>
      <section>
        <h2 className="text-3xl font-bold mb-6">About</h2>
        <p className="text-[#e4e4e4]">I am a web developer.</p>
      </section>
      <section>
        <h2 className="text-3xl font-bold mb-6">Links</h2>
        <ul className="list-disc list-inside">
          {LINKS.map((link) => (
            <li key={link.href} className="pb-3 w-fit hover:underline">
              <Link className="text-indigo-400" href={link.href}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
