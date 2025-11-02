import { Libro } from "./libros.js";
import { UsuarioVip } from "./usuarioVip.js";
import { UsuarioNoVips } from "./usuarioNoVip.js";
import { Biblioteca } from "./biblioteca.js";

const libro1 = new Libro();
const libro2 = new Libro();
const usuario1 = new UsuarioVip();
const usuario2 = new UsuarioNoVips();
const biblio = new Biblioteca();

libro1.meterTitulo="La vida de kiko";
libro1.meterAutor="Francisco Javier";

libro1.monstrarInformacion();

libro2.meterTitulo="La vida de alberto";
libro2.meterAutor="Francisco Javier";

libro2.monstrarInformacion();
/* vip */
usuario1.meterNombre="Victor maqueen aironma";
usuario1.meterEdad=67;
usuario1.meterTelefono=693842053;
usuario1.meterMembresia="La mas cara";
usuario1.meterDinero=1200;

/* no vip */
usuario2.meterNombre="Alberto titanic america";
usuario2.meterEdad=17;
usuario2.meterTelefono=6133242055;
usuario2.meterCorreo="AlbertoElCrack@gmail.com";
usuario2.meterDireccion="Calle de los papus 67";


console.log("Prestamos");

/* Prestamos */
if (libro1.prestarLibro()) {
    usuario1.agregarLibroPrestado(libro1);
}
if (libro2.prestarLibro()) {
    usuario1.agregarLibroPrestado(libro2);
}
libro1.monstrarInformacion();
usuario1.monstrarLibrosPrestados();
/*Voy a intentar volver a prestar el libro 1 estando prestado*/
console.log("Intento de prestar otra vez estando prestado");
if (libro1.prestarLibro()) {
    usuario1.agregarLibroPrestado(libro1);
}
usuario1.monstrarLibrosPrestados();
console.log("Devolver");
/* Devolver */
if (usuario1.quitarPrestamos(libro1)) {
    libro1.devolver(); 
}
usuario1.monstrarLibrosPrestados();


/*Registro de biblioteca*/
console.log("BIBLIOTECA");
biblio.meterLibros(libro1);
biblio.meterLibros(libro2);
biblio.meterUsuario(usuario1);
biblio.meterUsuario(usuario2);
console.log("LISTA DE LIBROS DE LA BIBLIOTECA");
biblio.monstrarRegistroLibros();
console.log("LISTA DE USUAIRO DE LA BIBLIOTECA");
biblio.monstrarRegistroUsuario();


/*Monstrar datos de los usuarios*/
console.log("Datos de usuario:");
console.log("Usuario1: ");
usuario1.monstrarUsuario();
console.log("Usuario2: ");
usuario2.monstrarUsuario();
