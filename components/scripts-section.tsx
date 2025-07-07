"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScriptCard } from "@/components/script-card"
import { Search, Filter } from "lucide-react"
import scriptsData from "@/data/scripts.json"

export function ScriptsSection() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedFramework, setSelectedFramework] = useState("All")

  const filteredScripts = useMemo(() => {
    return scriptsData.scripts.filter((script) => {
      const matchesSearch =
        script.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        script.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        script.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesCategory = selectedCategory === "All" || script.category === selectedCategory
      const matchesFramework = selectedFramework === "All" || script.framework.includes(selectedFramework)

      return matchesSearch && matchesCategory && matchesFramework
    })
  }, [searchTerm, selectedCategory, selectedFramework])

  return (
    <section id="scripts" className="py-20 bg-muted/50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mes Scripts FiveM</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Une collection de scripts optimisés et testés pour vos serveurs GTA RP
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 space-y-6">
          {/* Search */}
          <div className="relative max-w-lg mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Rechercher un script..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 text-base"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {scriptsData.categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="h-10 px-4"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Framework Filters */}
          <div className="flex flex-wrap justify-center items-center gap-3">
            <Filter className="h-4 w-4 text-muted-foreground" />
            {scriptsData.frameworks.map((framework) => (
              <Badge
                key={framework}
                variant={selectedFramework === framework ? "default" : "secondary"}
                className={`cursor-pointer h-8 px-3 text-sm transition-colors ${
                  selectedFramework === framework
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
                onClick={() => setSelectedFramework(framework)}
              >
                {framework}
              </Badge>
            ))}
          </div>
        </div>

        {/* Scripts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
          {filteredScripts.map((script) => (
            <div key={script.id} className="w-full max-w-sm">
              <ScriptCard script={script} />
            </div>
          ))}
        </div>

        {filteredScripts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">Aucun script trouvé avec ces critères.</p>
          </div>
        )}
      </div>
    </section>
  )
}
