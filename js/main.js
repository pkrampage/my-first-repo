import { initializeTheme } from "./ui/themeToggle.js" // Import UI management
import { renderProjects } from "./ui/projectCardRenderer.js" // Import projects content renderer
import projectArray from './data/projectData.js' // Import project mock data

document.addEventListener('DOMContentLoaded', () => {
    initializeTheme()
    renderProjects(projectArray, 'project-list')
})