import { Libro } from "./libros.js";
import { Usuario } from "./usuario.js";

const libro1 = new Libro();
const libro2 = new Libro();
const usuario1 = new Usuario();
const usuario2 = new Usuario();

libro1.meterTitulo="La vida de kiko";
libro1.meterAutor="Francisco Javier";

libro1.monstrarInformacion();

libro2.meterTitulo="La vida de alberto";
libro2.meterAutor="Francisco Javier";

libro2.monstrarInformacion();

usuario1.meterNombre("Victor maqueen aironma");
usuario1.meterEdad(67);
usuario1.meterTelefono(693842053);
