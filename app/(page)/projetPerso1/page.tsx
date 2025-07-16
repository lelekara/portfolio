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

const ProjetPerso1: React.FC = () => {
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
              <BreadcrumbLink href="/projetPerso1">
                Application de Gestion du Temps de Travail
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="space-y-6">
          <h1 className="font-bold text-4xl text-gray-900 dark:text-gray-100">
            Projet Personnel 1 - Application de Gestion du Temps de Travail
          </h1>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Projet Personnel</Badge>
            <Badge variant="secondary">Frontend</Badge>
            <Badge variant="secondary">Next.js</Badge>
            <Badge variant="secondary">PWA</Badge>
            <Badge variant="secondary">TypeScript</Badge>
          </div>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
            Contexte du Projet
          </h2>
          <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
            Création d’une application web permettant de gérer ses horaires de
            travail et ses pauses via un calendrier interactif. L’objectif :
            offrir un outil simple, rapide et accessible depuis le navigateur ou
            mobile (PWA) pour enregistrer et consulter ses sessions de travail.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
            Réalisations
          </h2>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Développement Frontend
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <li>
                  Interface moderne et responsive en Next.js et TailwindCSS
                </li>
                <li>Intégration du calendrier interactif avec ShadCN UI</li>
                <li>
                  Ajout d’un Dialog permettant d’ajouter une session (début,
                  fin, pauses)
                </li>
                <li>
                  Gestion des données en localStorage pour une utilisation sans
                  serveur
                </li>
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Accessibilité & Déploiement
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <li>
                  Transformation en PWA (Progressive Web App) pour installation
                  sur mobile
                </li>
                <li>Déploiement rapide sur Vercel</li>
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
              Développement d’une application responsive et ergonomique
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
              Manipulation du stockage local (localStorage)
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
              Mise en place d’une PWA
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
              Gestion de l’état côté client avec React
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
            Technologies Utilisées
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="text-lg font-semibold mb-2">Frontend</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Next.js</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>ShadCN UI</li>
                <li>TailwindCSS</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Accessibilité</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>PWA</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Déploiement</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Vercel</li>
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
                      src="./img/01_time-work.vercel.app.png"
                      alt="Interface du site web - Vue 1"
                      className="rounded-md w-full h-auto cursor-zoom-in"
                      onClick={() =>
                        window.open(
                          "./img/01_time-work.vercel.app.png",
                          "_blank"
                        )
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
                      src="./img/02_time-work.vercel.app.png"
                      alt="Interface du site web - Vue 2"
                      className="rounded-md w-full h-auto cursor-zoom-in"
                      onClick={() =>
                        window.open(
                          "./img/02_time-work.vercel.app.png",
                          "_blank"
                        )
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
                      src="./img/03_time-work.vercel.app.png"
                      alt="Interface du site web - Vue 2"
                      className="rounded-md w-full h-auto cursor-zoom-in"
                      onClick={() =>
                        window.open(
                          "./img/03_time-work.vercel.app.png",
                          "_blank"
                        )
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
                      src="./img/04_time-work.vercel.app.png"
                      alt="Interface du site web - Vue 2"
                      className="rounded-md w-full h-auto cursor-zoom-in"
                      onClick={() =>
                        window.open(
                          "./img/04_time-work.vercel.app.png",
                          "_blank"
                        )
                      }
                    />
                    <p className="text-center mt-2 text-sm text-gray-600 dark:text-gray-400">
                      Interface du site web - Vue 4
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        <div className="text-center flex flex-col items-center gap-4">
          <Link
            href="https://time-work.vercel.app"
            className="inline-block bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Visiter l'application
          </Link>
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

export default ProjetPerso1;
