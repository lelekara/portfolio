import type React from "react"
import Link from "next/link"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Badge } from "@/components/ui/badge"


const Projet1Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200">
      <main className="max-w-4xl mx-auto px-4 py-12 space-y-12">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/portfolio">Accueil</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/projet1">Création d'un set de dés connectés</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="space-y-6">
          <h1 className="font-bold text-4xl text-gray-900 dark:text-gray-100">
            Projet Scolaire N°1: Set de Dés Connectés
          </h1>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Projet Pluridisciplinaire</Badge>
            <Badge variant="secondary">Électronique</Badge>
            <Badge variant="secondary">Programmation C</Badge>
            <Badge variant="secondary">Travail d'Équipe</Badge>
          </div>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Description du Projet</h2>
          <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
            Lors de mon premier projet pluridisciplinaire, nous devions créer un set de deux dés comprenant une partie
            électronique et un programme informatique, reliés par une carte de communication. Pour organiser notre
            travail, nous avons utilisé des outils comme les diagrammes de Gantt et de Pert ainsi que le mind mapping.
            Nous étions cinq étudiants répartis en deux groupes.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Répartition des Tâches</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Groupe 1 (3 personnes)</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Composants électriques</li>
                  <li>Carte de communication</li>
                  <li>Schéma électrique</li>
                  <li>Câblage sur breadboard</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Groupe 2 (2 personnes)</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Programmation en C</li>
                  <li>Développement du menu</li>
                  <li>Section "Règles"</li>
                  <li>Section "Jouer"</li>
                  <li>Section "Paramètres"</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Défis et Apprentissages</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Gestion du temps pour un premier projet d'envergure</li>
            <li>Recherche approfondie sur les technologies utilisées</li>
            <li>Acquisition de connaissances en langage C</li>
            <li>Apprentissage des bases de l'électronique</li>
            <li>Développement des compétences en travail d'équipe</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Galerie du Projet</h2>
          <Carousel className="w-full max-w-xs mx-auto">
            <CarouselContent>
              <CarouselItem>
                <Card className="pt-4">
                  <CardContent>
                    <img src="./img/P1BreadBord.png" alt="Breadboard du projet" className="rounded-md w-full h-auto" />
                    <p className="text-center mt-2 text-sm text-gray-600 dark:text-gray-400">Montage sur Breadboard</p>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="pt-4">
                  <CardContent>
                    <img src="./img/P1Carte.png" alt="Carte de communication" className="rounded-md w-full h-auto" />
                    <p className="text-center mt-2 text-sm text-gray-600 dark:text-gray-400">Carte de Communication</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Conclusion</h2>
          <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
            Ce projet a été une excellente introduction au développement de systèmes embarqués et au travail en équipe.
            Il m'a permis d'acquérir des compétences précieuses en programmation C, en électronique de base, et en
            gestion de projet, qui se sont avérées essentielles pour mes futurs projets et ma carrière dans
            l'informatique industrielle.
          </p>
        </section>

        <div className="text-center">
          <Link
            href="/"
            className="inline-block bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded transition duration-300">
            Retour à l'accueil
          </Link>
        </div>
      </main>

    </div>
  )
}

export default Projet1Page

