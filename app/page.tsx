'use client'

import Image from "next/image";
import Link from "next/link";
import { AzureDevopsIcon, BootstrapIcon, CssIcon, DatabaseIcon, FigmaIcon, GithubIcon, HashtagIcon, HtmlIcon, JiraIcon, JsIcon, OpenArrowIcon, PostmanIcon, PrismaIcon, ReactIcon, SupabaseIcon, TailwindIcon, TypescriptIcon } from "./components/icons";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {

  interface ISections {
    name: string;
    href: string;
  }

  interface ITechnologies {
    title: string;
    icon: React.ReactNode;
  }

  interface IProjects {
    title: string;

  }

  const sections: ISections[] = [
    {
      name: 'Skills',
      href: '#skills'
    },
    {
      name: 'Projects',
      href: '#projects'
    },
    {
      name: 'About',
      href: '#about'
    },
    {
      name: 'Contact',
      href: '#contact'
    }
  ]

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

  const projects: IProjects[] = [
    {
      title: 'Weather App',

    }
  ]

  try {
    
  } catch (error) {
    
  } finally {
    
  }

  return (
    <main className="h-full w-full min-h-[300px] flex-grow">
      <section id="skills" className="flex flex-col justify-center scroll-mt-28 bg-neutral-900">
        <div className="w-full max-w-6xl mx-auto py-8 px-4 md:px-8">
          <h1 className="relative [font-family:--font-syne] md:max-w-6xl mx-auto text-2xl sm:text-3xl uppercase font-extrabold mb-10">
            Skills
            <Link href='/#skills' className="hidden lg:grid opacity-0 rounded-sm bg-slate-600 hover:opacity-100 place-items-center text-white transition-opacity absolute w-6 h-6 -translate-y-1/2 top-1/2 left-[-2px]">
              <HashtagIcon aria-hidden className="h-6 w-6 fill-white" />
            </Link>
          </h1>
          <div className="flex flex-wrap mx-auto justify-evenly gap-6 md:gap-0">
            <div className="max-w-[400px] px-4 sm:px-4">
              <h2 className="uppercase border-b mb-3 font-medium">Technologies</h2>
              <div className="flex flex-wrap gap-3 justify-center mx-auto">
                {technologies.map((technology) => (
                  <div className="flex flex-col gap-1 h-20 w-20 items-center justify-center">
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
              <div className="flex flex-wrap gap-3 justify-center mx-auto px-5">
                {tools.map((tool) => (
                  <div className="flex flex-col h-20 w-20 items-center justify-center">
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
      <section id="projects" className="flex flex-col justify-center scroll-mt-28 bg-neutral-950">
        <div className="w-full max-w-6xl mx-auto py-8 px-4 md:px-8">
          <h1 className="relative [font-family:--font-syne] md:max-w-6xl mx-auto text-2xl sm:text-3xl uppercase font-extrabold mb-10">
            Projects
            <Link href='/#projects' className="hidden lg:grid opacity-0 rounded-sm bg-slate-600 hover:opacity-100 place-items-center text-white transition-opacity absolute w-6 h-6 -translate-y-1/2 top-1/2 left-[-2px]">
              <HashtagIcon aria-hidden className="h-6 w-6 fill-white" />
            </Link>
          </h1>
          <div className="flex flex-col border mx-8 rounded-lg overflow-hidden pb-4">

            <div className="flex-[2] h-[500px] bg-gray-600 relative">
              {/* <Link href='' > */}
              <div className="h-1/2 relative">

                <Image className="hidden sm:block" src='/images/weatherLaptop.png' height={1000} width={1000} alt="weather app preview">
                </Image>
                <Image className="object-cover sm:hidden" src='/images/weatherLaptop.png' height={1000} width={1000} alt="weather app preview">
                </Image>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="mb-3">Weather App</h3>
              <p className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci velit et in temporibus quidem veritatis eius dolore deleniti magni amet?</p>
              <div className="flex items-center justify-center gap-6">
                <button className="flex items center gap-2 py-2 px-3 rounded-md bg-neutral-50 text-black hover:opacity-90 transition-opacity">
                  View project 
                  <OpenArrowIcon />
                </button>
                <button className="gap-2 py-2 px-3 rounded-md hover:bg-zinc-900 transition-colors">
                  Learn more
                </button>
              </div>
            </div>
            {/* </Link> */}
            {/* <Swiper navigation={true} modules={[Navigation]} className="bg-slate-400 h-full text-black">
              <SwiperSlide>
                Slide 1
              </SwiperSlide>
              <SwiperSlide>
                Slide 2
              </SwiperSlide>
              <SwiperSlide>
                Slide 3
              </SwiperSlide>
            </Swiper> */}
          </div>
          {/* <div className="h-[400px]">
            <Swiper
              direction={'vertical'}
              slidesPerView={1}
              spaceBetween={30}
              mousewheel={true}
              pagination={{
                clickable: true,
              }}
              modules={[Mousewheel, Pagination]}
              className="mySwiper bg-pink-300 h-full w-full"
            >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
              <SwiperSlide>Slide 8</SwiperSlide>
              <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
          </div> */}
        </div>
      </section>
    </main>
  )
}
