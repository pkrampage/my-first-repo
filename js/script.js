// theme toggle
const toggleBtn = document.getElementById('theme-toggle')

toggleBtn.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme')
    if(document.body.className == 'dark-theme'){
        toggleBtn.textContent = `Lightmode`
    }else{
        toggleBtn.textContent = `Darkmode`
    }
})