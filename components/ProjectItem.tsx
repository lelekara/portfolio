import Link from "next/link"

interface ProjectItemProps {
  title: string
  date: string
  description: string
  link: string
}

export function ProjectItem({ title, date, description, link }: ProjectItemProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform hover:scale-105">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{date}</p>
      <p className="mt-2 text-gray-700 dark:text-gray-300">{description}</p>
      <Link
        href={link}
        className="mt-4 inline-block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
      >
        En savoir plus →
      </Link>
    </div>
  )
}

