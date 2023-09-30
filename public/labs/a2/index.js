
var sidebar = document.getElementById('sidebar')
var navs = sidebar.getElementsByTagName('a')
for (let i=0; i < navs.length; i++) {
  navs[i].addEventListener('click',()=>{
    let pages = document.getElementsByClassName('page')
    for (let j = 0;j < pages.length; j++) pages[j].style.display = 'none'
    document.getElementById(`page-${navs[i].id}`).style.display = 'block'
  })
}
var cards = document.getElementsByClassName('card')
for (let i = 0; i< cards.length; i++) {
  cards[i].addEventListener('click',()=>{
    let pages = document.getElementsByClassName('page')
    for (let j = 0;j < pages.length; j++) pages[j].style.display = 'none'
    document.getElementById('page-courses').style.display = 'block'
  })
}
const assigements = document.getElementById('assignments')
assigements.addEventListener('click',()=>{
  document.getElementById('course-content').style.display = 'none'
  document.getElementById('assigement-content').style.display = 'block'
  document.getElementById('breadcrumb').innerText = 'Assignments'
  document.getElementById('grades-content').style.display = 'none'
})
const home = document.getElementById('home')
home.addEventListener('click',()=>{
  document.getElementById('course-content').style.display = 'block'
  document.getElementById('assigement-content').style.display = 'none'
  document.getElementById('assignment-edit').style.display = 'none'
  document.getElementById('breadcrumb').innerText = 'Modules'
})
const editProfileBtn = document.getElementById('editProfileBtn')
var editModeProfile = false
editProfileBtn.addEventListener('click',()=>{
  editModeProfile = !editModeProfile
  document.getElementById('content-profile').style.display = editModeProfile ? 'none' : 'block';
  document.getElementById('edit-profile').style.display = editModeProfile ? 'block' : 'none';
  document.getElementById('editProfileBtnText').innerText = editModeProfile ? 'Cancel Editing' : 'Edit Profile'
})
const titles = document.getElementsByClassName('assignment-title')
for (let i = 0; i < titles.length; i++) {
  console.log(titles[i])
  titles[i].addEventListener('click',()=> {
    document.getElementById('assigement-content').style.display = 'none'
    document.getElementById('assignment-edit').style.display = 'block'
    document.getElementById('grades-content').style.display = 'none'
  })
}
const grade = document.getElementById('grades')
grade.addEventListener('click',()=>{
  document.getElementById('assigement-content').style.display = 'none'
  document.getElementById('assignment-edit').style.display = 'none'
  document.getElementById('course-content').style.display = 'none'
  document.getElementById('grades-content').style.display = 'block'
  document.getElementById('breadcrumb').innerText = 'Grades'
})
const account = document.getElementById('account')
account.click()