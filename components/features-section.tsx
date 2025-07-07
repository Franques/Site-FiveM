"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Shield, Headphones, Code, Users, Rocket } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Zap,
    title: "Performance Optimisée",
    description: "Scripts optimisés pour des performances maximales avec un impact minimal sur les ressources serveur.",
  },
  {
    icon: Shield,
    title: "Sécurité Renforcée",
    description: "Code sécurisé avec protection anti-exploit et validation côté serveur pour tous les scripts.",
  },
  {
    icon: Code,
    title: "Multi-Framework",
    description: "Compatibilité garantie avec ESX et QBCore, adaptation possible pour d'autres frameworks.",
  },
  {
    icon: Headphones,
    title: "Support Rapide",
    description: "Support technique réactif via Discord avec aide à l'installation et résolution de problèmes.",
  },
  {
    icon: Users,
    title: "Communauté Active",
    description: "Rejoignez une communauté de développeurs et administrateurs de serveurs FiveM.",
  },
  {
    icon: Rocket,
    title: "Mises à Jour Régulières",
    description: "Scripts maintenus et mis à jour régulièrement avec de nouvelles fonctionnalités.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pourquoi Choisir Mes Scripts ?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des scripts de qualité professionnelle avec un support dédié pour votre serveur FiveM
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
