'use client'
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
import { Footer } from "@/components/Footer"

const Projet2Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200">

      <main className="max-w-4xl mx-auto px-4 py-12 space-y-12">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Accueil</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/projet2">Dispositif de mesure de profondeur connecté</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="space-y-6">
          <h1 className="font-bold text-4xl text-gray-900 dark:text-gray-100">
            Projet Scolaire N°2: Dispositif de Mesure de Profondeur Connecté
          </h1>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Projet Pluridisciplinaire</Badge>
            <Badge variant="secondary">Arduino</Badge>
            <Badge variant="secondary">Capteurs</Badge>
            <Badge variant="secondary">Web Development</Badge>
            <Badge variant="secondary">Raspberry Pi</Badge>
          </div>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Description du Projet</h2>
          <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
            Pour mon deuxième projet pluridisciplinaire, nous avons créé un dispositif de mesure de profondeur affichant
            les résultats sur un site web. Notre objectif était de mesurer la profondeur variable d'un trou au centre
            d'une brique LEGO. Ce projet a nécessité une collaboration étroite en équipe et l'utilisation de diverses
            technologies.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Répartition des Tâches</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Développement Web</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Développement du site web</li>
                  <li>Interface utilisateur</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Système embarqué</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Configuration Arduino</li>
                  <li>Installation des capteurs</li>
                  <li>Intégration système</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Processus de Développement</h2>
          <ol className="list-decimal pl-5 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Recherche et sélection des capteurs appropriés</li>
            <li>Installation d'un tapis roulant pour le transport des briques LEGO</li>
            <li>Construction d'un support pour positionner les capteurs au-dessus des briques</li>
            <li>
              Configuration du système de mesure avec Arduino:
              <ul className="list-disc pl-5 mt-2">
                <li>Premier capteur de présence pour activer la mesure</li>
                <li>Capteur laser pour mesurer la profondeur du trou</li>
                <li>Deuxième capteur de présence pour arrêter la mesure</li>
              </ul>
            </li>
            <li>Développement du site web pour afficher les résultats</li>
            <li>Configuration d'un Raspberry Pi pour héberger le site web</li>
            <li>Mise en place d'une base de données MySQL pour stocker les données</li>
            <li>Utilisation de PHP pour connecter la base de données au site web</li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Galerie du Projet</h2>
          <Carousel className="w-full max-w-md mx-auto">
            <CarouselContent>
              <CarouselItem>
                <Card className="pt-4">
                  <CardContent>
                    <img
                      src="./img/P2BreadBoard.png"
                      alt="Montage sur breadboard"
                      className="rounded-md w-full h-auto cursor-zoom-in"
                      onClick={() => window.open("./img/P2BreadBoard.png", "_blank")}
                    />
                    <p className="text-center mt-2 text-sm text-gray-600 dark:text-gray-400">Montage sur Breadboard</p>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="pt-4">
                  <CardContent>
                    <img
                      src="./img/P2Site.png"
                      alt="Interface du site web"
                      className="rounded-md w-full h-auto cursor-zoom-in"
                      onClick={() => window.open("./img/P2Site.png", "_blank")}
                    />
                    <p className="text-center mt-2 text-sm text-gray-600 dark:text-gray-400">Interface du Site Web</p>
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
            Ce projet a été une excellente opportunité d'appliquer nos connaissances en électronique, programmation
            embarquée et développement web. Il nous a permis de travailler en équipe sur un projet concret, de la
            conception à la réalisation, en intégrant différentes technologies. Cette expérience a renforcé nos
            compétences en résolution de problèmes et en gestion de projet, tout en nous familiarisant avec des outils
            couramment utilisés dans l'industrie.
          </p>
        </section>

        <div className="text-center">
          <Link
            href="/"
            className="inline-block bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Retour à l'accueil
          </Link>
        </div>
      </main>

    </div>
  )
}

export default Projet2Page

