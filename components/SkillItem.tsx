'use client'
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface SkillItemProps {
  skill: string
  subSkills: string[]
}

export function SkillItem({ skill, subSkills }: SkillItemProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 text-center transition-all duration-300 hover:shadow-lg">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between text-gray-900 dark:text-gray-100 font-medium focus:outline-none"
      >
        <span>{skill}</span>
        {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </button>
      {isExpanded && (
        <ul className="mt-2 text-sm text-gray-600 dark:text-gray-400 space-y-1">
          {subSkills.map((subSkill, index) => (
            <li key={index}>{subSkill}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

