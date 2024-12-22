import { ProjectCard } from '@/components/project-card'

const projects = [
  {
    title: 'Shell sort',
    image: '/shot 1.png',
    href: 'https://example.com/shell-sort'
  },
  {
    title: 'Vue mapbox',
    image: '/shot 2.png',
    href: 'https://example.com/vue-mapbox'
  },
  {
    title: 'casa-fest',
    image: '/shot 3.webp',
    href: 'https://example.com/casa-fest'
  },
  {
    title: 'Minecraft clone',
    image: '/shot 4.jpg',
    href: 'https://example.com/minecraft-clone'
  },
  {
    title: 'Game of life',
    image: '/shot 5.webp',
    href: 'https://example.com/game-of-life'
  },
  {
    title: 'Rave Clud',
    image: '/shot 6.png',
    href: 'https://example.com/rave-clud'
  }
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-transparent">
      <main className="container py-8">
        <div className="space-y-10 ">
            <div className="w-1/2">
                <h1 className="text-2xl p-4 font-bold text-left border-b border-border text-foreground">Projects</h1>
            </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

