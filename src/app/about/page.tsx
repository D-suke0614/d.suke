import {
  FaHtml5,
  FaCss3Alt,
  FaVuejs,
  FaReact,
  FaWordpress,
  FaGitAlt,
  FaGithub,
  FaSlack,
} from 'react-icons/fa'
import { RiJavascriptLine } from 'react-icons/ri'
import { TbBrandTypescript } from 'react-icons/tb'
import { RiNextjsFill } from 'react-icons/ri'

const ICONS = [
  { id: 'html', component: <FaHtml5 size={160} color="#f5f7fa" /> },
  { id: 'html', component: <FaCss3Alt size={160} color="#f5f7fa" /> },
  { id: 'html', component: <RiJavascriptLine size={160} color="#f5f7fa" /> },
  { id: 'html', component: <TbBrandTypescript size={160} color="#f5f7fa" /> },
  { id: 'html', component: <FaVuejs size={160} color="#f5f7fa" /> },
  { id: 'html', component: <FaReact size={160} color="#f5f7fa" /> },
  { id: 'html', component: <RiNextjsFill size={160} color="#f5f7fa" /> },
  { id: 'html', component: <FaWordpress size={160} color="#f5f7fa" /> },
  { id: 'html', component: <FaGitAlt size={160} color="#f5f7fa" /> },
  { id: 'html', component: <FaGithub size={160} color="#f5f7fa" /> },
  { id: 'html', component: <FaSlack size={160} color="#f5f7fa" /> },
]

const Page = () => {
  return (
    <main className="flex flex-col gap-y-12">
      <section>
        <h2 className="text-3xl font-bold mb-6">Name</h2>
        <p className="text-[rgb(228,228,228)]">Daisuke Kida / 1999.06.14</p>
      </section>
      <section>
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="flex items-center justify-center content-start flex-wrap gap-3">
          {ICONS.map((icon) => (
            <div
              key={icon.id}
              className="w-40 h-40 border-solid border border-[#444444] bg-[#2c2c2c] hover:scale-110"
            >
              {icon.component}
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-3xl font-bold mb-6">Careers</h2>
        <p className="text-[#e4e4e4]"></p>
      </section>
    </main>
  )
}

export default Page
