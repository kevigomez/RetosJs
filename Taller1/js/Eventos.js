const a=document.querySelector(".a");
function ejemploclick() {
     a.style.color="blue"
}

window.addEventListener('keydown', ejemplokeydown);
function ejemplokeydown(e){
    if(e.keyCode == '13'){
        document.querySelector('.b').style.color = '#f00ea2';

    }
}
ejemplokeyup(document, "keyup", function (e) {
    document.querySelector('.c').style.color = 'red';
});
function ejemplokeyup(element, eventName, callback) {
    if (element.addEventListener) {
        element.addEventListener(eventName, callback, false);
    } 
}


const d1 = document.querySelector('.d1');
const d = document.querySelector('.d');

    d1.addEventListener('mouseenter', () => {
      d.style.color = 'blue';
    });
    const e1 = document.querySelector('.e1')
    const e = document.querySelector('.e')
    e1.addEventListener('mouseleave', () => {
        e.style.color = 'yellow';
      });



      const form = document.getElementById('f');

      form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = form.elements.name.value;
        alert('Nombre: ' + name);
      });

      function ejemploOnPageLoad() {
        document.querySelector('.g').style.color = 'rgb(27, 14, 105)';
      }



      function EjemplohandleResize() {
        const h = document.getElementById('h');
        
        
        if (window.innerWidth <= 600) {
          h.classList.add('highlight');
        } else {
          h.classList.remove('highlight');
        }
      }
  
      
      EjemplohandleResize();
  
      
      window.addEventListener('resize', EjemplohandleResize);


      function ejemploHandleScroll() {
        const i = document.getElementById('i');
        
        // Cambiar el color de la palabra cuando se haya desplazado más de 200 píxeles
        if (window.pageYOffset > 2) {
          i.classList.add('highlight2');
        } else {
          i.classList.remove('highlight2');
        }
      }
  
      // Ejecutar la función ejemploHandleScroll() al cargar la página
      ejemploHandleScroll();
  
      // Asociar el evento scroll a la función ejemploHandleScroll()
      window.addEventListener('scroll', ejemploHandleScroll);


      const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');

    nameInput.addEventListener('focus', handleFocus);
    emailInput.addEventListener('focus', handleFocus);

    function handleFocus(event) {
      const inputElement = event.target;
      inputElement.style.border = '2px solid blue';
    }

