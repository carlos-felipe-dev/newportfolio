'use client'

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AzureDevopsIcon, BootstrapIcon, CssIcon, DatabaseIcon, FigmaIcon, GithubIcon, HashtagIcon, HtmlIcon, JiraIcon, JsIcon, OpenArrowIcon, PostmanIcon, PrismaIcon, ReactIcon, SupabaseIcon, TailwindIcon, TypescriptIcon } from "./components/icons";

export default function Home() {

  const router = useRouter()

  interface ITechnologies {
    title: string;
    icon: React.ReactNode;
  }

  const technologies: ITechnologies[] = [
    { title: 'HTML', icon: <HtmlIcon className="h-9 w-9" /> },
    { title: 'CSS', icon: <CssIcon className="h-9 w-9" /> },
    { title: 'JavaScript', icon: <JsIcon className="h-9 w-9" /> },
    { title: 'TypeScript', icon: <TypescriptIcon className="h-9 w-9" /> },
    { title: 'React (Next.js)', icon: <ReactIcon className="h-9 w-9" /> },
    { title: 'Bootstrap', icon: <BootstrapIcon className="h-10 w-10" /> },
    { title: 'Tailwind CSS', icon: <TailwindIcon className="h-9 w-9" /> },
    { title: 'SQL', icon: <DatabaseIcon className="h-9 w-9 fill-slate-300" /> },
    { title: 'Prisma', icon: <PrismaIcon className="h-9 w-9 fill-neutral-50" /> },
    { title: 'Supabase', icon: <SupabaseIcon className="h-9 w-9" /> }
  ]

  const tools: ITechnologies[] = [
    { title: 'Azure DevOps', icon: <AzureDevopsIcon className="h-8 w-8" /> },
    { title: 'GitHub', icon: <GithubIcon className="h-8 w-8 fill-neutral-50" /> },
    { title: 'Jira', icon: <JiraIcon className="h-8 w-8" /> },
    { title: 'Postman', icon: <PostmanIcon className="h-8 w-8" /> },
    { title: 'Figma', icon: <FigmaIcon className="h-8 w-8" /> }
  ]

  function handleImage(route: string) {
    router.push(route)
  }

  return (
    <main className="h-full w-full min-h-[300px] flex-grow">
      <section id="skills" className="flex flex-col justify-center scroll-mt-28 bg-neutral-900">
        <div className="w-full max-w-6xl mx-auto py-8 px-4 md:px-8">
          <h1 className="relative [font-family:--font-syne] md:max-w-6xl mx-auto text-2xl sm:text-3xl uppercase font-extrabold mb-10">
            Skills
            <Link href='/#skills' className="hidden lg:grid opacity-0 rounded-sm bg-slate-600 hover:opacity-100 focus:opacity-100 place-items-center text-white transition-opacity absolute w-6 h-6 -translate-y-1/2 top-1/2 -left-8">
              <HashtagIcon aria-hidden className="h-6 w-6 fill-white" />
            </Link>
          </h1>
          <div className="flex flex-wrap mx-auto justify-evenly gap-6 md:gap-0 ">
            <div className="max-w-[400px] px-4 sm:px-4">
              <h2 className="uppercase border-b mb-3 font-medium">Technologies</h2>
              <div className="flex flex-wrap gap-3 justify-center mx-auto">
                {technologies.map((technology) => (
                  <div key={technology.title} className="flex flex-col gap-1 h-20 w-20 items-center justify-center">
                    {technology.icon}
                    <p className="text-xs text-center font-light">
                      {technology.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="max-w-[400px] px-4 sm:px-4">
              <h2 className="uppercase border-b mb-3 font-medium">Tools</h2>
              <div className="flex flex-wrap gap-3 justify-center mx-auto xs:px-5">
                {tools.map((tool) => (
                  <div key={tool.title} className="flex flex-col h-20 w-20 items-center justify-center">
                    {tool.icon}
                    <p className="text-xs font-light">
                      {tool.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="flex flex-col justify-center scroll-mt-28 bg-neutral-950 mb-20">
        <div className="max-w-6xl mx-auto py-8 px-4 md:px-8">
          <h1 className="relative [font-family:--font-syne] md:max-w-6xl mx-auto text-2xl sm:text-3xl uppercase font-extrabold mb-10">
            Projects
            <Link href='/#projects' className="hidden lg:grid opacity-0 rounded-sm bg-slate-600 hover:opacity-100 focus:opacity-100 place-items-center text-white transition-opacity absolute w-6 h-6 -translate-y-1/2 top-1/2 -left-8">
              <HashtagIcon aria-hidden className="h-6 w-6 fill-white" />
            </Link>
          </h1>
          <div className="flex flex-col md:flex-row border border-neutral-400 rounded-lg overflow-hidden max-h-[700px] mb-8">
            <div className="max-h-[50%] overflow-hidden">
              <button className="h-full" onClick={() => handleImage('/_next/image?url=%2Fimages%2FweatherAppDesktop.png&w=2048&q=75')}>
                <Image className=" w-full h-auto md:object-cover md:h-full" src='/images/weatherAppDesktop.png' height={1300} width={2000} alt="weather app preview">
                </Image>
              </button>
            </div>
            <div className="flex-grow px-6 py-8">
              <h3 className="mb-3 text-xl font-bold">Weather App</h3>
              <p className="mb-14">Rebuilt using Next.js and styled with TailwindCSS. Showcases current weather,
                a five-day forecast, and the functionality to favorite and search locations by pulling data from two separate APIs.</p>
              <div className="flex items-center justify-between xs:justify-evenly">
                <Link target="_blank" href='https://weather-app-jade-pi.vercel.app/' className="flex items text-sm center font-medium gap-2 py-2 px-3 rounded-md bg-neutral-50 text-black hover:opacity-90 transition-opacity">
                  View project
                  <OpenArrowIcon />
                </Link>
                <button className="gap-2 py-2 px-3 rounded-md font-medium hover:bg-zinc-900 transition-colors">
                  Learn more
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row border border-neutral-400 rounded-lg overflow-hidden max-h-[700px] mb-8">
            <div className="md:order-2 max-h-[50%] sm:h-auto overflow-hidden">
              <button className="h-full" onClick={() => handleImage('/_next/image?url=%2Fimages%2FsynapsisDesktop.png&w=2048&q=75')}>
                <Image className="w-full h-auto md:object-cover md:h-full" src='/images/synapsisDesktop.png' height={1300} width={2000} alt="blog app preview">
                </Image>
              </button>
            </div>
            <div className="md:order-1 flex-grow px-6 py-8">
              <h3 className="mb-3 text-xl font-bold">Blog App</h3>
              <p className="mb-14">A Next.js and Tailwind CSS powered blog concept featuring animations, hover effects, and a responsive design for an exceptional cross-device user experience.</p>
              <div className="flex items-center justify-between xs:justify-evenly">
                <Link target="_blank" href='https://synapsis-three.vercel.app/' className="flex items text-sm center font-medium gap-2 py-2 px-3 rounded-md bg-neutral-50 text-black hover:opacity-90 transition-opacity">
                  View project
                  <OpenArrowIcon />
                </Link>
                <button className="gap-2 py-2 px-3 rounded-md font-medium hover:bg-zinc-900 transition-colors">
                  Learn more
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row border border-neutral-400 rounded-lg overflow-hidden max-h-[700px]">
            <div className="max-h-[50%] overflow-hidden">
              <button className="h-full" onClick={() => handleImage('/_next/image?url=%2Fimages%2FrpsDesktop.png&w=2048&q=75')}>
                <Image className="w-full h-auto md:object-cover md:h-full" src='/images/rpsDesktop.png' height={1300} width={2000} alt="rock paper scissor lizard spock app preview">
                </Image>
              </button>
            </div>
            <div className="flex-grow px-6 py-8">
              <h3 className="mb-3 text-xl font-bold">Rock Paper Scissors Spock</h3>
              <p className="mb-14">An interactive web app built in React, styled with Tailwind CSS, offering an upgraded version of the classic Rock Paper Scissors game, including the choice to play against either a computer or another player.</p>
              <div className="flex items-center justify-between xs:justify-evenly">
                <Link target="_blank" href='https://spock-rock.vercel.app/' className="flex items text-sm center font-medium gap-2 py-2 px-3 rounded-md bg-neutral-50 text-black hover:opacity-90 transition-opacity">
                  View project
                  <OpenArrowIcon />
                </Link>
                <button className="gap-2 py-2 px-3 rounded-md font-medium hover:bg-zinc-900 transition-colors">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
