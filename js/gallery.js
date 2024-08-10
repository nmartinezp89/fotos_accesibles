    // Función para actualizar la imagen grande al hacer hover o enfocar con Tab
    function upDate(previewPic) {
      var container = document.getElementById('image');
      container.style.backgroundImage = "url('" + previewPic.src + "')";
      container.innerHTML = previewPic.alt;
    }
  
    // Función para restablecer la imagen grande cuando el mouse sale o se pierde el foco
    function unDo() {
      var container = document.getElementById('image');
      container.style.backgroundImage = "url('')";
      container.innerHTML = "Hover over an image below to display here.";
    }
  
    // Añade el atributo tabindex y los eventos a cada imagen
    function addTabindexAndEvents(images) {
      for (let i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
        // Evento de foco para navegación con Tab
        images[i].addEventListener('focus', function() {
          upDate(this);
          console.log('Evento de foco en: ' + this.alt);
        });
        // Evento de pérdida de foco
        images[i].addEventListener('blur', function() {
          unDo();
          console.log('Evento de foco en: ' + this.alt);
        });
        // Eventos del mouse
        images[i].addEventListener('mouseover', function() {
          upDate(this);
          console.log('Evento de foco en: ' + this.alt);
        });
        images[i].addEventListener('mouseout', function() {
          unDo();   
          console.log('Evento de foco en: ' + this.alt);       
        });
        
      }
      
    }
    
  
    // Selecciona todas las imágenes de la clase 'preview'
    const images = document.querySelectorAll('.preview');
  
    // Llama a la función para añadir el atributo tabindex y los eventos
    addTabindexAndEvents(images);
  ;