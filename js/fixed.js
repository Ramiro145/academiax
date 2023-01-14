(function(){
    let navbar = document.querySelector('#navbar');
    let main = document.querySelector('main');
    let navbarHeight= navbar.getBoundingClientRect().height;
    let breakpoint = main.offsetTop - navbarHeight;
    let isFixed = false;



    function onScroll(){



        console.log(navbarHeight)

        if (window.scrollY >= breakpoint && !isFixed){
            navbar.classList.add('navbar-fixed');
            main.style.cssText="margin-top: " +  navbarHeight + 'px;'
            isFixed = true;
        }else if(window.scrollY < breakpoint && isFixed){
            navbar.classList.remove('navbar-fixed');
            main.style.cssText="margin-top: " + 0;
            isFixed = false;
        }
        

    }
    function scrolling(){
        navbar.classList.remove('open');
    }
    document.addEventListener('scroll',onScroll)
    document.addEventListener('scroll',scrolling)
})()