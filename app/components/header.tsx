import Link from "next/link";

import { GithubIcon, LinkedinIcon, ResumeIcon } from "./icons";

export default function Header() {

interface ILinks {
  name: string;
  href: string;
  icon: React.ReactNode
}

  const links: ILinks[] = [
    {
      name: 'Resume',
      href: '../../CarlosFelipeResume.pdf',
      icon: <ResumeIcon className="h-6 w-6 fill-white"/>,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/cf-dev/',
      icon: <LinkedinIcon className='h-7 w-7 fill-white'/>
    },
    {
      name: 'GitHub',
      href: 'https://www.github.com/carlos-felipe-dev',
      icon: <GithubIcon className='h-6 w-6 fill-white' />
    },
  ]

  return (
    <header className='flex items-center justify-between p-4 md:px-8 w-full max-w-6xl'>
      <div className="uppercase text-start tracking-[-0.02em] leading-[1]">
        <p className="font-bold">Carlos Felipe</p>
        
        <p className="font-light">Fullstack Web Developer</p>
      </div>
      <ul className="flex items-center">
        {links.map((link) => (
          <li key={link.name} className="hover:cursor-pointer hover:bg-neutral-800 px-1.5 py-1.5 rounded transition-all">
            <Link className="" href={link.href}>{link.icon}</Link>
            <span className="sr-only">{link.name}</span>
          </li>
        ))}
      </ul>
    </header>
  )
}
