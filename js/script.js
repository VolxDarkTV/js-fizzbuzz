// Collego il contenitore alla varibile
const boxContainer = document.querySelector(".container");
// Generare numeri da 0 a 100 dentro dei quadrati
for(let i = 1; i <= 100; i++){
    // Comandi da eseguire finché la variabile resta true
    const element = `<div class="box box-${i}"> ${i} </div>`
    boxContainer.innerHTML += element
    
}

// Distinguere multipli di 3 e di 5 e di entrambi