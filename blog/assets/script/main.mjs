// Importamos el fichero de variables de nuetro proyecto - Es el Mapa
import Variables from "./variables.mjs"
import { 
    switchBlock,
    createCards
} from "./functions.mjs";

const { ULinks, categoriasTitle} = Variables;

document.addEventListener("DOMContentLoaded", () => {
    ULinks.addEventListener("click", e => {
        (e.target.textContent == "Inicio") && switchBlock("block", "none");
        (e.target.textContent == "Contacto")  && switchBlock("none", "block");
        if (e.target.textContent == "Categoria") {
            const elementoDestinoPosicion = categoriasTitle.offsetTop;

            window.scrollTo({ top: elementoDestinoPosicion, behavior: "smooth"});
        }
    })
    
    async function fetchData() {
        try {
          const response = await fetch('./assets/script/cards.json');
            if (response.ok) {
                const data = await response.json();
                createCards(data);
            }
        } catch (error) { console.log(`error: ${error}`);}
      }
    fetchData();
      
})