const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const botonApretado = boton.textContent;

    /* -- Borrar la pantalal al precionar "C" */
    if (boton.id === "c" || boton.id === "C") {
      pantalla.textContent = "0";
      return; // Al precionar "c", termina la función
    }

    /* -- Borrar último dígito -- */
    if (boton.id === "borrar") {
      if (
        pantalla.textContent.length === 1 ||
        pantalla.textContent === "Error"
      ) {
        pantalla.textContent = "0";
      } else {
        pantalla.textContent = pantalla.textContent.slice(0, -1);
      }

      return;
      return; // Al precionar borrar, termina la función
    }

    /* -- Realizar la operación al presionar el botón de igual */
    if (boton.id === "igual") {
      try {
        pantalla.textContent = eval(pantalla.textContent); // Hace la operación matemática que tenga en pantalla.
      } catch (error) {}
      pantalla.textContent = "Error";
      return;
    }

    /* -- Validar si en la pantalla está en 0 -- */
    if (pantalla.textContent === "0" || pantalla.textContent === "Error") {
      // Esto reemplaza el 0 inicial por el contenido del botón presionado
      pantalla.textContent = botonApretado;
    } else {
      // Suma los valores que se vayan agregando al ir presinando botones
      pantalla.textContent += botonApretado;
    }
  });
});
