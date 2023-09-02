import Link from "next/link";
import { cn } from "../lib/utils";

import { GithubIcon, LinkedinIcon, ResumeIcon } from "./icons";

export default function Header({className, ...props}: React.ComponentProps<'header'>) {

interface ILinks {
  name: string;
  href: string;
  icon: React.ReactNode
}

  const links: ILinks[] = [
    {
      name: 'Resume',
      href: 'some pdf',
      icon: <ResumeIcon className="h-6 w-6 fill-white"/>,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/cf-dev/',
      icon: <LinkedinIcon className='h-7 w-7 fill-white'/>
    },
    {
      name: 'GitHub',
      href: 'https://www.github.com/nauticuff',
      icon: <GithubIcon className='h-6 w-6 fill-white' />
    },
  ]

  return (
    <header className='flex items-start justify-between p-4 md:px-8 w-full max-w-6xl'>
      <button className="uppercase text-start tracking-[-0.04em] leading-[1]">
        <span className="font-bold">Carlos Felipe</span>
        <br />
        <span className="font-light">Junior Web Developer</span>
      </button>
      <ul className="flex items-center gap-1">
        {links.map((link) => (
          <li>
            <Link href={link.href}>{link.icon}</Link>
            <span className="sr-only">{link.name}</span>
          </li>
        ))}
      </ul>
    </header>
  )
}
