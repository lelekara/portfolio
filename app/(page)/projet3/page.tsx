'use client'
import type React from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Badge } from "@/components/ui/badge"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"



const Projet4Page: React.FC = () => {
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
              <BreadcrumbLink href="/projet4">Système d'Arrosage Automatique</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="space-y-6">
          <h1 className="font-bold text-4xl text-gray-900 dark:text-gray-100">
            Projet Scolaire N°3: Système d'Arrosage Automatique
          </h1>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Projet Pluridisciplinaire</Badge>
            <Badge variant="secondary">Développement Mobile</Badge>
            <Badge variant="secondary">IoT</Badge>
            <Badge variant="secondary">Gestion de Projet</Badge>
          </div>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Description du Projet</h2>
          <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
            Pour mon troisième projet pluridisciplinaire, j'ai dû rédiger mon propre cahier des charges. J'ai choisi de
            créer un système permettant à une plante de recevoir automatiquement de l'eau lorsqu'elle en a besoin.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Composants du Projet</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Application Mobile</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Développée avec React Native et Expo Go</li>
                  <li>IDE: Visual Studio Code</li>
                  <li>Interface utilisateur pour contrôler le système</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Système Autonome</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>ESP8266 connecté aux capteurs</li>
                  <li>Gestion autonome de l'arrosage</li>
                  <li>Communication avec l'application mobile</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Technologies Utilisées</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
            <li>React Native avec Expo Go pour le développement mobile</li>
            <li>ESP8266 pour le système embarqué</li>
            <li>Docker pour la gestion des services</li>
            <li>Node-RED pour l'automatisation des flux</li>
            <li>MySQL pour la base de données</li>
            <li>MQTT pour la communication entre les composants</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Compétences Acquises</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Gestion efficace du temps et organisation</li>
            <li>Lecture et compréhension approfondie de la documentation technique</li>
            <li>Développement de compétences en programmation mobile et IoT</li>
            <li>Intégration de systèmes hétérogènes</li>
            <li>Gestion de projet dans un contexte pluridisciplinaire</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Galerie du Projet</h2>
          <Carousel className="w-full max-w-3xl mx-auto">
            <CarouselContent>
              <CarouselItem>
                <Card className="pt-4">
                <CardContent>
                    <img
                        src="../../../public/img/MobileApp01.png"
                        alt="Interface du site web - Vue 1"
                        className="rounded-md w-3xs h-auto mx-auto cursor-zoom-in"
                        onClick={() => window.open("../../../public/img/MobileApp01.png", "_blank")}
                    />
                    <p className="text-center mt-2 text-sm text-gray-600 dark:text-gray-400">
                        Interface du site web - Vue 1
                    </p>
                </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="pt-4">
                  <CardContent>
                    <img
                      src="../../../public/img/MobileApp02.png"
                      alt="Interface du site web - Vue 2"
                      className="rounded-md w-3xs h-auto mx-auto cursor-zoom-in"
                      onClick={() => window.open("../../../public/img/MobileApp02.png", "_blank")}
                    />
                    <p className="text-center mt-2 text-sm text-gray-600 dark:text-gray-400">
                      Interface du site web - Vue 2
                    </p>
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
            Ce projet a été extrêmement bénéfique pour mon développement personnel et professionnel. J'ai pu améliorer
            mes compétences en gestion du temps, en organisation, et en lecture de documentation technique. De plus,
            j'ai acquis de nouvelles compétences techniques précieuses dans le domaine du développement mobile et de
            l'Internet des objets. Cette expérience m'a permis de grandir tant sur le plan personnel que professionnel,
            en relevant les défis d'un projet pluridisciplinaire complexe.
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

export default Projet4Page

