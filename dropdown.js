const handleShow = (nav, toggle)=>{
    nav.classList.toggle('show')
    toggle.classList.toggle('bx-x')
  }
  
  const showMenu = (toggleId, navId, buttonsClass)=>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    buttonsHtml = document.getElementsByClassName(buttonsClass)
    var buttons = [...buttonsHtml]
  
    if(toggle && nav){
      buttons.map(button=>{
        button.addEventListener('click', ()=>{
          handleShow(nav, toggle)
        })
      })
      toggle.addEventListener('click', ()=>{
        handleShow(nav, toggle)
      })
    }
  }
  
  showMenu('header-toggle','nav-menu', 'nav_button')
  
  