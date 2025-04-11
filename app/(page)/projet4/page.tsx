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

const Projet3Page: React.FC = () => {
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
              <BreadcrumbLink href="/projet3">Développement d'un Système Connecté et Application Web</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="space-y-6">
          <h1 className="font-bold text-4xl text-gray-900 dark:text-gray-100">
            Développement d'un Système Connecté et Application Web
          </h1>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Stage</Badge>
            <Badge variant="secondary">Fullstack</Badge>
            <Badge variant="secondary">IoT</Badge>
            <Badge variant="secondary">Next.js</Badge>
            <Badge variant="secondary">ESP8266</Badge>
          </div>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Contexte du Projet</h2>
          <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
            Dans le cadre de mon stage, j'ai conçu et développé un système connecté intégrant des capteurs et une
            application web pour collecter, analyser et visualiser des données en temps réel. L'objectif était
            d'optimiser la gestion et l'analyse des interactions utilisateurs à travers une interface numérique
            intuitive et un environnement physique connecté.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Réalisations</h2>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Conception et développement fullstack</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Développement d'une application web en Next.js avec TypeScript, offrant une interface utilisateur fluide
                et interactive. Gestion sécurisée des utilisateurs avec NextAuth. Mise en place d'une API permettant la
                récupération et l'exploitation des données via Prisma et MySQL.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Système Embarqué & IoT</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Intégration d'un ESP8266 pour la gestion des capteurs et des LED RGBW. Communication entre les capteurs
                et l'application pour la transmission des données en temps réel.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Infrastructure & Sécurité</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Déploiement du projet avec Docker pour assurer un environnement stable. Utilisation de Raspberry Pi 3
                avec MotionEye pour la gestion de flux vidéo et l'enregistrement automatique basé sur des déclencheurs.
                Mise en place d'un système de gestion des questionnaires interactifs.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Compétences Acquises</h2>
          <ul className="list-none space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Développement Fullstack (Front & Back-end)
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Gestion et intégration d'un système IoT
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Communication temps réel via MQTT
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Gestion et sécurisation des données et API
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Travail en R&D, analyse et choix des capteurs
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Collaboration avec une équipe pluridisciplinaire
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Technologies Utilisées</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="text-lg font-semibold mb-2">Frontend & Backend</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Next.js</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>Prisma</li>
                <li>MySQL</li>
                <li>NextAuth</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">IoT & Systèmes Embarqués</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>ESP8266</li>
                <li>MQTT</li>
                <li>InfluxDB</li>
                <li>LED RGBW</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Infrastructure & Déploiement</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Docker</li>
                <li>Raspberry Pi 3</li>
                <li>MotionEye</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Design & UI</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>ShadCN</li>
                <li>TailwindCSS</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Sécurité</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Bcrypt</li>
                <li>Variables d'environnement</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Galerie du Projet</h2>
          <Carousel className="w-full max-w-3xl mx-auto">
            <CarouselContent>
              <CarouselItem>
                <Card className="pt-4">
                  <CardContent>
                    <img
                      src="./img/Stage_Site01.png"
                      alt="Interface du site web - Vue 1"
                      className="rounded-md w-full h-auto cursor-zoom-in"
                      onClick={() => window.open("./img/Stage_Site01.png", "_blank")}
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
                      src="./img/Stage_Site02.png"
                      alt="Interface du site web - Vue 2"
                      className="rounded-md w-full h-auto cursor-zoom-in"
                      onClick={() => window.open("./img/Stage_Site02.png", "_blank")}
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

export default Projet3Page

