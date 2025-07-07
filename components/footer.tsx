import Link from "next/link"
import { Code, Github, Mail, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 max-w-7xl py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">FiveM Scripts</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Scripts FiveM de qualité pour serveurs GTA RP. Compatible ESX & QBCore.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#home" className="text-muted-foreground hover:text-primary">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="#scripts" className="text-muted-foreground hover:text-primary">
                  Scripts
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-muted-foreground hover:text-primary">
                  Fonctionnalités
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Tutoriels
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Changelog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <Link href="mailto:contact@example.com" className="text-muted-foreground hover:text-primary">
                  Email
                </Link>
              </li>
              <li className="flex items-center">
                <MessageCircle className="h-4 w-4 mr-2" />
                <Link href="https://discord.gg/example" className="text-muted-foreground hover:text-primary">
                  Discord
                </Link>
              </li>
              <li className="flex items-center">
                <Github className="h-4 w-4 mr-2" />
                <Link href="https://github.com" className="text-muted-foreground hover:text-primary">
                  GitHub
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} FiveM Scripts. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
