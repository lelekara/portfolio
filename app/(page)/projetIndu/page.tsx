"use client";
import type React from "react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Footer } from "@/components/Footer";

const ProjetIndu: React.FC = () => {
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
              <BreadcrumbLink href="/projetIndu">
                Projet Industriel — Monitoring industriel à distance via eWON &
                site web
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="space-y-6">
          <h1 className="font-bold text-4xl text-gray-900 dark:text-gray-100">
            Projet Industriel — Monitoring industriel à distance via eWON & site
            web
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
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
            Contexte du Projet
          </h2>
          <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
            Dans le cadre de notre cours de Projet Industriel à Technocampus
            (Mons), nous avons conçu un système de monitoring et de contrôle à
            distance d’un automate industriel via un eWON Flexy 203, connecté à
            une interface web sécurisée.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
            Réalisations
          </h2>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Configuration de l’eWON Flexy 203
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Nous avons commencé par configurer l’eWON Flexy 203. Après un
                factory reset et l’attribution d’une adresse IP via l’outil
                eBuddy, nous l’avons connecté à l’infrastructure VPN de Talk2M
                grâce à eCatcher. Cette étape était essentielle pour permettre
                une communication sécurisée avec l’automate, sans exposition
                directe à Internet. Une fois connecté, nous avons pu gérer les
                tags présents sur l’automate, en veillant à limiter les droits
                d’écriture pour les utilisateurs standards afin d’éviter tout
                risque de manipulation dangereuse.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Programmation Java</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Côté programmation, un programme Java utilisant la librairie ETK
                a été mis en place. Il nous a permis de dialoguer avec l’eWON
                via le protocole MQTT. Ce programme publiait les données de
                l’automate sur un broker MQTT auquel notre interface web pouvait
                s’abonner. Nous avons aussi intégré des bibliothèques tierces
                pour assurer la compatibilité réseau et le bon échange des
                messages.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Développement Web (T3 App, Chakra UI)
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Pour la partie front-end, nous avons utilisé l’outil Create
                T3-App couplé à la bibliothèque Chakra UI, ce qui nous a permis
                de concevoir rapidement un site web moderne et responsive.
                L’authentification des utilisateurs se fait via Discord, une
                méthode simple et sécurisée. Une fois connectés, les
                utilisateurs peuvent visualiser l’état des capteurs, tandis que
                les administrateurs peuvent également modifier les valeurs de
                certains tags. Les données affichées sont mises à jour en temps
                réel grâce à une API qui communique directement avec le broker
                MQTT.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Gestion de projet avec OpenProject
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Enfin, pour organiser efficacement notre travail en présentiel
                limité, nous avons utilisé la plateforme OpenProject. Elle nous
                a permis de structurer les tâches à effectuer, de suivre leur
                avancement via un diagramme de Gantt, et de répartir les
                responsabilités au sein de notre équipe. Cette planification
                rigoureuse a été un facteur clé dans la réussite du projet.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
            Compétences Acquises
          </h2>
          <ul className="list-none space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Développement Web
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Gestion et intégration d'une solution connectée à l'automate
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Gestion et sécurisation des données de l'automate
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Collaboration avec une équipe pluridisciplinaire
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
            Technologies Utilisées
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="text-lg font-semibold mb-2">Frontend & Backend</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>t3-App</li>
                <li>React</li>
                <li>TypeScript</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Automates</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>eWon</li>
                <li>Flexy 201</li>
                <li>MQTT</li>
                <li>eBuddy</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Design & UI</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Chakra UI</li>
                <li>TailwindCSS</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
            Galerie du Projet
          </h2>
          <Carousel className="w-full max-w-3xl mx-auto">
            <CarouselContent>
              <CarouselItem>
                <Card className="pt-4">
                  <CardContent>
                    <img
                      src="./img/ProjetIndu01.png"
                      alt="Interface du site web - Vue 1"
                      className="rounded-md w-full h-auto cursor-zoom-in"
                      onClick={() =>
                        window.open("./img/ProjetIndu01.png", "_blank")
                      }
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
                      src="./img/ProjetIndu02.png"
                      alt="Interface du site web - Vue 2"
                      className="rounded-md w-full h-auto cursor-zoom-in"
                      onClick={() =>
                        window.open("./img/ProjetIndu02.png", "_blank")
                      }
                    />
                    <p className="text-center mt-2 text-sm text-gray-600 dark:text-gray-400">
                      Interface du site web - Vue 2
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="pt-4">
                  <CardContent>
                    <img
                      src="./img/ProjetIndu03.png"
                      alt="Interface du site web - Vue 2"
                      className="rounded-md w-full h-auto cursor-zoom-in"
                      onClick={() =>
                        window.open("./img/ProjetIndu03.png", "_blank")
                      }
                    />
                    <p className="text-center mt-2 text-sm text-gray-600 dark:text-gray-400">
                      Interface du site web - Vue 3
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>

              <CarouselItem>
                <Card className="pt-4">
                  <CardContent>
                    <img
                      src="./img/ProjetIndu04.jpg"
                      alt="Interface du site web - Vue 2"
                      className="rounded-md w-full h-auto cursor-zoom-in"
                      onClick={() =>
                        window.open("./img/ProjetIndu04.jpg", "_blank")
                      }
                    />
                    <p className="text-center mt-2 text-sm text-gray-600 dark:text-gray-400">
                      Photo d'un eWon
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>

              <CarouselItem>
                <Card className="pt-4">
                  <CardContent>
                    <img
                      src="./img/ProjetIndu05.png"
                      alt="Interface du site web - Vue 2"
                      className="rounded-md w-full h-auto cursor-zoom-in"
                      onClick={() =>
                        window.open("./img/ProjetIndu05.png", "_blank")
                      }
                    />
                    <p className="text-center mt-2 text-sm text-gray-600 dark:text-gray-400">
                      Interface de Flexy 201
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
            className="inline-block bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Retour à l'accueil
          </Link>
        </div>
      </main>
    </div>
  );
};

export default ProjetIndu;
