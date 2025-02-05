import { Footer } from "@/components/Footer"
import { ExperienceItem } from "@/components/ExperienceItem"
import { SkillItem } from "@/components/SkillItem"
import { ProjectItem } from "@/components/ProjectItem" 

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200">
      <main className="max-w-4xl mx-auto px-4 py-12 space-y-16">
        <section className="space-y-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Karassavas Léandre</h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Diplômé en informatique, orientation industrielle, passionné par les nouvelles technologies et l'innovation.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">À propos</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Ayant grandi avec l'évolution du numérique, l'informatique s'est imposée comme une évidence pour moi.
            Curieux et polyvalent, je m'intéresse aussi bien au développement logiciel (web & embarqué) qu'à
            l'automobile, un autre domaine qui me fascine. Toujours en quête de nouveaux défis, j'aime apprendre et
            explorer les innovations technologiques.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Expériences</h2>
          <div className="space-y-4">
            <ExperienceItem
              title="Stage de fin d'études"
              company="Smart Gastronomy Lab"
              date="2024 - 2025" description={""}            />
            <ExperienceItem title="Job d'été" company="Cash Piscine" date="2024" description={""}/>
            <ExperienceItem title="Job d'été" company="Cash Piscine" date="2023" description={""} />
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Compétences</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <SkillItem skill="Automatisation" subSkills={["Programmation automates"]}/>
            <SkillItem skill="Développement web" subSkills={["React","Next.js","JavaScript","TypeScript","Node.js"]} />
            <SkillItem skill="Développement mobile" subSkills={["React Native"]} />
            <SkillItem skill="Système embarqué" subSkills={["Arduino","ESP32"]}/>
            <SkillItem skill="Sécurité des réseaux" subSkills={["Cryptographie","VPN"]}/>
            <SkillItem skill="Base de données" subSkills={["SQL","NoSQL","Conception de schémas"]}/>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Projets</h2>
          <div className="space-y-6">
            <ProjectItem
              title="Système Connecté et Application Web"
              date="2024 - 2025"
              description="Projet confier durant mon stage de fin d'études"
              link="projet4"
            />
              <ProjectItem
              title="Développement d’un système d’arrosage automatique connecté"
              date="2024"
              description="Projet pluridisciplinaire de bachelier 3"
              link="projet3"
            />
            <ProjectItem
              title="Dispositif de mesure de profondeur connecté"
              date="2023"
              description="Projet pluridisciplinaire de bachelier 2"
              link="projet2"
            />
            <ProjectItem
              title="Set de dés connectés"
              date="2022"
              description="Projet pluridisciplinaire de bachelier 1"
              link="projet1"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

