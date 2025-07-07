"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScriptCard } from "@/components/script-card"
import { Search, Filter } from "lucide-react"
import { motion } from "framer-motion"
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
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mes Scripts FiveM</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Une collection de scripts optimisés et testés pour vos serveurs GTA RP
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-8 space-y-4"
        >
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Rechercher un script..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {scriptsData.categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Framework Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            <Filter className="h-4 w-4 mr-2 self-center" />
            {scriptsData.frameworks.map((framework) => (
              <Badge
                key={framework}
                variant={selectedFramework === framework ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setSelectedFramework(framework)}
              >
                {framework}
              </Badge>
            ))}
          </div>
        </motion.div>

        {/* Scripts Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredScripts.map((script, index) => (
            <motion.div
              key={script.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ScriptCard script={script} />
            </motion.div>
          ))}
        </motion.div>

        {filteredScripts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground text-lg">Aucun script trouvé avec ces critères.</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
