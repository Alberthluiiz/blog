import Variables from "./variables.mjs";

const {mainBlock, formulario, contenidoCard} = Variables;

export const switchBlock = (one, two) => {
    mainBlock.style.display = one;
    formulario.style.display = two;
}

export const createCards = (cards) => {
    cards.map(e => {
        const section = document.createElement("SECTION");
        section.className = "card";
    
        const div = document.createElement("DIV");
        div.className = "foto";
    
        const img = document.createElement("IMG");
        img.src = `${e.img}`;
        img.alt = "no found image shirt"
        
        const div2 = document.createElement("DIV");
        div2.className = "des";
        
        const h3 = document.createElement("H3");
        h3.textContent = `${e.title}`;
    
        const p = document.createElement("p");  
        p.textContent = `${e.description}`;
    
        contenidoCard.appendChild(section);
        section.appendChild(div);
        div.appendChild(img)
    
        section.appendChild(div2);
        div2.appendChild(h3);
        div2.appendChild(p);
    })
}