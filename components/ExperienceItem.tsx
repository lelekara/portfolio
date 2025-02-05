interface ExperienceItemProps {
    title: string
    company: string
    date: string
    description: string
  }
  
  export function ExperienceItem({ title, company, date, description }: ExperienceItemProps) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform hover:scale-105">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">
          {company} - {date}
        </p>
        <p className="mt-2 text-gray-700 dark:text-gray-300">{description}</p>
      </div>
    )
  }
  