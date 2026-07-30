import { useState, useEffect } from 'react'

const useActiveSection = (sectionIds, options = {}) => {
  const [activeId, setActiveId] = useState(sectionIds[0] || '')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0, ...options },
    )

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    elements.forEach((el) => observer.observe(el))

    return () => elements.forEach((el) => observer.unobserve(el))
  }, [sectionIds, options])

  return activeId
}

export default useActiveSection
