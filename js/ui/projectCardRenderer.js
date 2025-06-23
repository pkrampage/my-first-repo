import { createDomElementFromString } from '../utils/htmlString.js'

const creatProjectCard = ({projectName,projectDescription,projectImg}) => {
    const altText = `${projectName} Project`
    return `
        <article class="subcontainer-grid project">
            <img src="${projectImg}" alt="${altText}">
            <h3>${projectName}</h3>
            <p>${projectDescription}</p>
            <a href="#" class="btn">View Project</a>
        </article>
    `
}

export const renderProjects = (projectData,containerId) =>{
    const projectListContainer = document.getElementById(containerId)
    if (!projectListContainer) {
    console.error(`Error: Element with ID '${containerId}' not found.`);
    return;
    }
    projectData.forEach(project => {
        const projectHtmlString = creatProjectCard(project)
        const tempContainer = createDomElementFromString(projectHtmlString)
        // Check before append
        if(tempContainer){
            projectListContainer.appendChild(tempContainer)
        }
    })
}