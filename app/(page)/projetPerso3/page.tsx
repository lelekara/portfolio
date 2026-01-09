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

const ProjetPerso3: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200">
      <main className="max-w-4xl mx-auto px-4 py-12 space-y-12">
        {/* Navigation */}
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/portfolio">Accueil</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/projetPerso3">
                Site Vitrine Coiffeuse
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* En-tête */}
        <div className="space-y-6">
          <h1 className="font-bold text-4xl text-gray-900 dark:text-gray-100">
            Projet Personnel – Site Vitrine Coiffeuse
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Site Web One-Page pour Présence Digitale & Réservation
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Site Vitrine</Badge>
            <Badge variant="secondary">Frontend</Badge>
            <Badge variant="secondary">Next.js</Badge>
            <Badge variant="secondary">TailwindCSS</Badge>
          </div>
        </div>

        {/* Contexte */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
            Contexte du Projet
          </h2>
          <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
            Création d’un site web <strong>one-page moderne et responsive</strong> pour une coiffeuse indépendante, 
            destiné à renforcer sa présence digitale, présenter ses prestations et faciliter la prise de rendez-vous en ligne.
            L’objectif est de proposer une interface élégante, claire et mobile-first, permettant aux clients de découvrir 
            rapidement les services, les réalisations et de réserver en quelques clics.
          </p>
        </section>

        {/* Réalisations */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
            Réalisations
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  UX/UI & Structure One-Page
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                  <li>Navigation sticky avec ancres fluides (#home, #services...)</li>
                  <li>Design épuré, élégant et "Mobile-First"</li>
                  <li>Section Héro attractive avec Call-to-Action</li>
                  <li>Galerie photo interactive</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Fonctionnalités & Business
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                  <li>Affichage clair des tarifs et durées</li>
                  <li>Intégration prise de RDV externe (Calendly/Planity)</li>
                  <li>Liens directs vers réseaux sociaux</li>
                  <li>Informations de contact et horaires accessibles</li>
                </ul>
              </CardContent>
            </Card>
          </div>

        </section>

        {/* Compétences */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
            Compétences Acquises
          </h2>
          <ul className="list-none space-y-2 text-gray-700 dark:text-gray-300">
            {[
              "Conception d’un site vitrine professionnel orienté client",
              "Mise en place d’une navigation one-page efficace",
              "Intégration d’un système de réservation externe",
              "Développement frontend moderne avec Next.js & TailwindCSS",
            ].map((skill, index) => (
              <li key={index} className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                {skill}
              </li>
            ))}
          </ul>
        </section>

        {/* Technologies */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
            Technologies Utilisées
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-blue-600 dark:text-blue-400">Frontend</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Next.js</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>TailwindCSS</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Galerie */}
 <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Galerie du Projet</h2>
          <Carousel className="w-full max-w-3xl mx-auto">
            <CarouselContent>
              <CarouselItem>
                <Card className="pt-4">
                <CardContent>
                    <img
                        src="./img/coiffure-landing.png"
                        alt="Interface du site web - Vue 1"
                        className="rounded-md w-3xs h-auto mx-auto cursor-zoom-in"
                        onClick={() => window.open("./img/coiffure-landing.png", "_blank")}
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
                      src="./img/coiffure-phone.png"
                      alt="Interface du site web - Vue mobile"
                      className="rounded-md w-3xs h-auto mx-auto cursor-zoom-in"
                      onClick={() => window.open("./img/coiffure-phone.png", "_blank")}
                    />
                    <p className="text-center mt-2 text-sm text-gray-600 dark:text-gray-400">
                      Interface du site web - Vue mobile
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        {/* Bouton retour */}
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

export default ProjetPerso3;