'use client'
import Link from 'next/link'
import { postAction } from '../actions/postAction'
import { useState } from 'react'

const Page = () => {
  const [formKey, setFormKey] = useState<string>('')

  const handleAction = async (formData: FormData) => {
    const result = await postAction(formData)
    setFormKey(result.key)
  }
  return (
    <main className="px-5">
      <Link
        className="text-indigo-400 text-xl hover:underline"
        href={'https://x.com/0614d_suke'}
      >
        x.com
      </Link>
      <span>&nbsp;/&nbsp;</span>
      <Link
        className="text-indigo-400 text-xl hover:underline"
        href={'https://github.com/D-suke0614'}
      >
        github
      </Link>
      {/* <form
        action={handleAction}
        key={formKey}
        className="flex flex-col gap-12"
      >
        <label htmlFor="name">
          <input
            className="w-full p-2 bg-[#181818] border-solid border border-[#484848] rounded-md"
            type="text"
            name="name"
            id="name"
            required
            placeholder="Your Name"
          />
        </label>
        <label htmlFor="email">
          <input
            className="w-full p-2 bg-[#181818] border-solid border border-[#484848] rounded-md"
            type="email"
            name="email"
            id="email"
            required
            placeholder="Your Email"
          />
        </label>
        <label htmlFor="message">
          <textarea
            className="w-full p-2 bg-[#181818] border-solid border border-[#484848] rounded-md"
            name="message"
            id="message"
            rows={5}
            required
            placeholder="Message"
          ></textarea>
        </label>
        <button
          className="w-40 p-3 mx-auto rounded-md bg-indigo-600 hover:bg-indigo-500"
          type="submit"
        >
          Send Message
        </button>
      </form> */}
    </main>
  )
}

export default Page
