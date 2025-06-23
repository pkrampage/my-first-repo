export const createDomElementFromString = (htmlString) => {
    const tempDiv = document.createElement('div') //temp element
    tempDiv.innerHTML = htmlString
    return tempDiv.firstElementChild
}