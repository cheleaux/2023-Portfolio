import resizeTextSection from './AboutMe.js'
import revealTechList from'./TechStack.js'

const techStackMoblie = document.querySelector('.tech-stack-oncolapse')
const expandBtn = document.querySelector('.abt-me-expand-btn')


expandBtn.addEventListener( 'click', resizeTextSection )

techStackMoblie.addEventListener('click', revealTechList )