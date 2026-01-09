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

const ProjetPerso2: React.FC = () => {
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
              <BreadcrumbLink href="/projetPerso2">
                Karabooth - SaaS Photo
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* En-tête */}
        <div className="space-y-6">
          <h1 className="font-bold text-4xl text-gray-900 dark:text-gray-100">
            Projet Personnel – Karabooth
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Application SaaS de Partage de Photos pour Mariages & Événements
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">SaaS</Badge>
            <Badge variant="secondary">Fullstack</Badge>
            <Badge variant="secondary">Next.js</Badge>
            <Badge variant="secondary">Docker</Badge>
            <Badge variant="secondary">Prisma</Badge>
          </div>
        </div>

        {/* Contexte */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
            Contexte du Projet
          </h2>
          <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
            Création d’une application SaaS permettant aux invités d’un mariage ou d’un événement de partager 
            facilement leurs photos via un QR code. L’objectif est de proposer une solution simple, rapide et privée, 
            sans création de compte, où chaque événement dispose de son album photo sécurisé.
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
                  Gestion des Événements & Invités
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                  <li>Création d’événements (mariage, anniversaire, soirée privée)</li>
                  <li>Génération d’un QR code unique par événement</li>
                  <li>Association automatique des invités à l’événement scanné</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Gestion des Photos & Sécurité
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                  <li>Upload de photos par les invités</li>
                  <li>Organisation des photos par événement (albums privés)</li>
                  <li>Séparation stricte des données entre événements (Multi-tenant)</li>
                  <li>Stockage local sécurisé sur le serveur</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Architecture & Déploiement
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                L'application repose sur une architecture robuste utilisant les <strong>API Routes de Next.js</strong> pour la logique backend. 
                Les données sont gérées via une base relationnelle.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Compétences */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
            Compétences Acquises
          </h2>
          <ul className="list-none space-y-2 text-gray-700 dark:text-gray-300">
            {[
              "Conception d’un SaaS multi-événements",
              "Gestion sécurisée des uploads de fichiers",
              "Organisation et protection de données par contexte (multi-tenant)",
              "Développement fullstack avec Next.js"
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
                <li>Next.js & React</li>
                <li>TypeScript</li>
                <li>TailwindCSS</li>
                <li>ShadCN UI</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-green-600 dark:text-green-400">Backend</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Next.js API Routes</li>
                <li>Supabase</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-purple-600 dark:text-purple-400">DevOps & Stockage</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>VPS / Serveur dédié</li>
                <li>Stockage</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Galerie */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
            Galerie du Projet
          </h2>
          <Carousel className="w-full max-w-3xl mx-auto">
            <CarouselContent>
              {/* Image 1 */}
              <CarouselItem>
                <Card className="pt-4">
                  <CardContent>
                    <img src="./img/karabooth-interface.png" alt="Interface Karabooth" className="rounded-md w-full h-auto" /> 
                    <p className="text-center mt-2 text-sm text-gray-600 dark:text-gray-400">
                      Interface Utilisateur - Accueil de l'événement
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
              
              {/* Image 2 */}
              <CarouselItem>
                <Card className="pt-4">
                  <CardContent>
                    <img src="./img/karabooth-upload.png" alt="Upload Photos" className="rounded-md w-full h-auto" />
                    <p className="text-center mt-2 text-sm text-gray-600 dark:text-gray-400">
                      Upload de photos par les invités
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
        <div className="text-center flex flex-col items-center gap-4">
             <Link
            href="https://kara-both.vercel.app"
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

export default ProjetPerso2;