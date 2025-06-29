const themeToggleBtn = document.getElementById('theme-toggle')

// Theme button text
const applyTheme = (isDark) => {
    if(isDark){
        document.body.classList.add('dark-theme');
        themeToggleBtn.textContent='Lightmode'
    }
    else
    {
        document.body.classList.remove('dark-theme')
        themeToggleBtn.textContent = 'Darkmode'
    }
}

// Event listener for theme toggle button
const setupThemeToggle = () => {
    // Check button
    if(!themeToggleBtn) {
        console.log("Theme toggle button not found!")
        return
    }
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme')
        const isDark = document.body.classList.contains('dark-theme')
        themeToggleBtn.textContent = isDark ? 'Lightmode' : 'Darkmode'
        localStorage.setItem('theme', isDark ? 'dark' : 'light')
    })
}

// Theme check before loading page
export const initializeTheme = () =>{
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme === 'dark'){
        applyTheme(true)
    }else{
        applyTheme(false)
    }
    setupThemeToggle()
}