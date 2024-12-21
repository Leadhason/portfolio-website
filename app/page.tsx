import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <div className="grid grid-cols-[2fr,1fr] mt-5 mb-10 gap-4">
      <div className="flex flex-col space-y-4 h-full w-full ml-5">
        <Card className="p-6 w-full"> {/* Hero*/}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 space-y-4">
                <div className="text-sm text-muted-foreground">welcome</div>
                <div className="text-left">
                  <span className="text-muted-foreground text-xl font-light">Hi,</span>
                  <h1 className="text-2xl font-semibold">
                    I&apos;m Andrés Camilo Plaza
                  </h1>
                  <p className="text-muted-foreground text-xl font-light mb-5">
                    A software developer, systems engineer and tattoo artist with strong
                    focus on the user experience, animations and micro interactions. I
                    love to create beautiful and functional interfaces, I am passionate
                    about technology and I am always looking for new challenges.
                  </p>
                </div>
                <div className="flex gap-5">
                  <a
                    href="#"
                    className="p-2 bg-orange-500 rounded-lg "
                  >
                    <Github className="h-6 w-8 text-white" />
                    <span className="sr-only">GitHub</span>
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-orange-500 rounded-lg transition-colors"
                  >
                    <Linkedin className="h-6 w-8 text-white" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-orange-500 rounded-lg"
                  >
                    <Mail className="h-6 w-8 text-white" />
                    <span className="sr-only">Email</span>
                  </a>
                </div>
              </div>
              <div className="flex-shrink-0">
                <Image
                  src="/Avatar.png"
                  alt="3D Avatar"
                  width={300}
                  height={300}
                  className="w-64 h-64"
                />
              </div>
            </div>
        </Card>

        <div className="grid md:grid-cols-[1fr,2fr] gap-6">
          <div className="h-full">
            <Card className="p-5"> {/* CV*/}
              <h2 className="text-xl font-semibold mb-4">CV</h2>
              <div className="aspect-[3/2] bg-muted rounded-lg mb-4" />
              <button className="w-full bg-orange-500 text-white rounded-lg py-2 px-3 text-lg">
                Download resume
              </button>
            </Card>
          </div>
          <div className="flex flex-col space-y-5 h-full justify-between">
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="p-4">
                <div className="flex items-center justify-between mb-2"> {/* Currently working on...*/}
                  <h2 className="text-xl font-light">Now</h2>
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                </div>
                <div className="text-sm text-muted-foreground mb-1 font-light">what&apos;s that ?</div>
                <p className="text-sm text-muted-foreground font-light">Currently working as freelancer</p>
              </Card>

              <Card className="p-4 flex justify-between hover:border-orange-300">
                <Link href="/projects"><h2 className="text-xl font-semibold">Portfolio & Projects</h2></Link>
                <ExternalLink className="h-5 w-5" />
              </Card>
            </div>
            <div className="">
              <Card className="p-4">
                <h2 className="text-xl font-semibold mb-3">Time zone</h2>
                <div className="space-y-2">
                  <div className="text-xl font-light">
                    Saturday, 30 March 2024 a 4:55:54 AM
                  </div>
                  <div className="text-muted-foreground text-sm font-light">
                    🇨🇴 Bogotá D.C, Colombia 🇨🇴
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="h-full">
            <Card className="p-6 h-full">
              <h2 className="text-xl font-semibold mb-4">Experience</h2>
              <div className="space-y-6">
                <div>
                  <div className="font-medium">Software Engineer</div>
                  <div className="text-orange-500">Straico</div>
                  <div className="text-sm text-muted-foreground">2021 - Current</div>
                </div>
                <div>
                  <div className="font-medium">Software Engineer</div>
                  <div className="text-orange-500">Spotz</div>
                  <div className="text-sm text-muted-foreground">2021 - Current</div>
                </div>
                <div>
                  <div className="font-medium">Frontend developer</div>
                  <div className="text-orange-500">Imaginamos</div>
                  <div className="text-sm text-muted-foreground">2021 - 2021</div>
                </div>
                <button className="text-orange-500 hover:underline">View More</button>
              </div>
            </Card>
          </div>

          <div className="flex flex-col space-y-4 h-full">
            <Card className="p-8 h-1/2">
              <div className="italic text-lg font-light mb-4">
                &quot;Anything one man can imagine, other men can make real.&quot;
              </div>
              <div className="text-muted-foreground">- Jules Verne</div>
            </Card>

            <Card className="p-6 h-1/2">
              <h2 className="text-xl font-semibold mb-4">Study</h2>
              <div className="flex flex-wrap gap-2 items-center justfy-center font-light text-md">
                <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">
                  Universidad Central
                </span>
                <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">
                  Platzi
                </span>
                <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">
                  Udemy
                </span>
                <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">
                  Youtube
                </span>
              </div>
            </Card>
          </div>
          <div className="h-full">
            <Card className="p-6 h-full">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Instagram tattoo</h2>
                <ExternalLink className="h-5 w-5" />
              </div>
              <Image
                src="/avatar.png"
                alt="Instagram preview"
                width={300}
                height={300}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-muted-foreground">
                If you want to see my tattoo&apos;s, you can follow me on Instagram.
              </p>
            </Card>
          </div>
        </div>
      </div>


      <div className="flex flex-col space-y-5 h-full px-8 mb-6">
        <Card className="p-6 h-1/2"> {/* About*/}
            <h2 className="text-xl font-semibold mb-4">About me</h2>
            <p className="mb-4 text-sm text-muted-foreground font-light">
              Hi, I&apos;m Andrés, a fullstack software developer from Colombia 🇨🇴
            </p>
            <div className="mb-4">
              <h3 className="font-medium mb-2 text-sm font-light">My primary tools of choice includes:</h3>
              <ul className="space-y-1 text-muted-foreground">
                <li>JavaScript</li>
                <li>React</li>
                <li>Astro</li>
                <li>Python</li>
                <li>Php</li>
                <li>Mongo</li>
                <li>SQL</li>
                <li>Nodejs</li>
              </ul>
            </div>
            <p className="text-muted-foreground text-sm font-light">
              Beyond coding, I&apos;m passionate about tattoo, soccer and traveling.
              An unusual hobby of mine is play classical music in the guitar or
              ukulele.
            </p>
        </Card>
        <Card className="p-6 h-1/2">
          <h2 className="text-xl font-semibold mb-4">Let&apos;s start working together!</h2>
          <div className="space-y-4">
            <div>
              <div className="text-muted-foreground">Contact Details</div>
              <div className=" text-sm font-light italic">leadhason111@gmail.com</div>
              <div className=" text-sm font-light italic">🇨🇴 Bogotá D.C, Colombia 🇨🇴</div>
            </div>
            <div>
              <div className="text-muted-foreground">Socials</div>
              <div className="space-y-1">
                <div>LinkedIn</div>
                <div>Github</div>
                <div>Instagram</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
    </>
  )
}

