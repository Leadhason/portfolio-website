import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface ProjectCardProps {
  title: string
  image: string
  href: string
}

export function ProjectCard({ title, image, href }: ProjectCardProps) {
  return (
    <Link href={href} target="_blank">
      <Card className="overflow-hidden transition-all hover:scale-[1.02] shadow-md border">
        <CardHeader className="p-0">
          <div className="aspect-video relative overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-all hover:scale-105"
            />
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <CardTitle className="text-lg">{title}</CardTitle>
        </CardContent>
      </Card>
    </Link>
  )
}

