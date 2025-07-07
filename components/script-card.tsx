"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Download } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Script {
  id: number
  title: string
  description: string
  image: string
  category: string
  framework: string[]
  price: string
  github: string
  download: string
  features: string[]
  tags: string[]
}

interface ScriptCardProps {
  script: Script
}

export function ScriptCard({ script }: ScriptCardProps) {
  return (
    <div className="group hover:-translate-y-1 transition-transform duration-200">
      <Card className="h-full flex flex-col overflow-hidden">
        <div className="relative overflow-hidden">
          <Image
            src={script.image || "/placeholder.svg?height=200&width=300"}
            alt={script.title}
            width={300}
            height={200}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-2 right-2">
            <Badge variant="secondary">{script.category}</Badge>
          </div>
          <div className="absolute top-2 left-2 flex gap-1">
            {script.framework.map((fw) => (
              <Badge key={fw} variant="default" className="text-xs bg-primary text-primary-foreground border-0">
                {fw}
              </Badge>
            ))}
          </div>
        </div>

        <CardHeader>
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-semibold">{script.title}</h3>
            <span className="text-lg font-bold text-primary">{script.price}</span>
          </div>
          <p className="text-muted-foreground text-sm">{script.description}</p>
        </CardHeader>

        <CardContent className="flex-1">
          <div className="space-y-3">
            <div>
              <h4 className="font-medium mb-2">Fonctionnalités :</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                {script.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-1">
              {script.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  #{tag}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex gap-2">
          <Button variant="outline" size="sm" asChild className="flex-1 bg-transparent">
            <Link href={script.github} target="_blank">
              <Github className="h-4 w-4 mr-2" />
              Code
            </Link>
          </Button>
          <Button size="sm" asChild className="flex-1">
            <Link href={script.download}>
              <Download className="h-4 w-4 mr-2" />
              Acheter
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
