const links=document.querySelectorAll('.link');
const sections = document.querySelectorAll('section');

let activelink = 0;

links.forEach((link, i)=> {
    link.addEventListener('click',()=> {
        if(activelink != i){
            links[activelink].classlist.remove('active');
            link.classList.add('active');
            sections[activelink].classlist.remove('active');
            setTimeout(() => {
                activeLink = i;
                sections[i].classlist.add('active');
            },1000);
        
            
        }
    })
})