console.log("Hoja de Vida Interactiva Cargada");
function añadirHabilidad() {
    let newSkill = prompt("Introduce una nueva habilidad:");
    if (newSkill) {
        let ul = document.getElementById('skillsList');
        let li = document.createElement('li');
        li.textContent = newSkill;
        ul.appendChild(li);
        console.log(ul)
    }
}
document.getElementById('addSkill').addEventListener('click', añadirHabilidad);



const certificaciones = ["Curso A", "Curso B", "Taller C", "Seminario D"];

function mostrarCertificaciones() {
    let ul = document.getElementById('listaCertificaciones'); // Suponiendo que tienes un <ul id="listaCertificaciones"> en tu HTML
    
    for (let i = 0; i < certificaciones.length; i++) {
        let li = document.createElement('li');
        li.textContent = certificaciones[i];
        ul.appendChild(li);
    }
}

window.onload = mostrarCertificaciones;

document.createElement (Element)

var newButton = document.createElement ("button")

function proyectosAnteriores() {
        let proyectos = prompt("Ingrese el numero de proyectos");
        if (proyectos<=0 || proyectos>10){

            alert ("Error, debe ser mayor a 0 y menor a 10")
        }

        mostrarProyectos(proyectos)
}

function mostrarProyectos(a) {
    const proyectos = ["A", "B", "C", "D", "E", "F", "G", "H","A", "B", "C", "D", "E", "F", "G", "H"];
    let ul = new Array();
    for (let i=0; i<a; i++ ) {
        ul.push(proyectos[i])
    }
    console.log (ul)

}

function saludoPersonalizado() {
    alert("¡Gracias por visitar mi sección de experiencia laboral!");
}

const calificarHojaDeVida = () => {
    let calificacion = prompt("Del 1 al 10, ¿cómo calificarías mi hoja de vida?");
    alert(`¡Gracias por calificar con un ${calificacion}!`);
}
