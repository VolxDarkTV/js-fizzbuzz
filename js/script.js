// Collego il contenitore alla varibile
const boxContainer = document.querySelector(".container");
// Generare numeri da 0 a 100 dentro dei quadrati
for(let i = 1; i <= 100; i++){
    // Comandi da eseguire finché la variabile resta true
    
    // Valiabili Dei Multipli
    let multiploTre = (i % 3);
    let multiploCinque = (i % 5);
    let multiploQuindici = (i % 15);
    // Istruzioni Condizionali per Multipli
    if(multiploQuindici == 0) {

        const element = `<div class="box box-${i}">FizzBuzz</div>`
        boxContainer.innerHTML += element
        // DEBUG
        console.log("fizzBuzz");

    } else if(multiploTre == 0) {

        const element = `<div class="box box-${i}">Fizz</div>`
        boxContainer.innerHTML += element
        // DEBUG
        console.log("fizz");

        const multiploTreColor = document.querySelector(".box");
        multiploTreColor.style.color = "blue"

    } else if(multiploCinque == 0){

        const element = `<div class="box box-${i}">Buzz</div>`
        boxContainer.innerHTML += element
        // DEBUG
        console.log("Buzz");

    }else{

        const element = `<div class="box box-${i}"> ${i} </div>`
        boxContainer.innerHTML += element
        // DEBUG
        console.log(i);
        
    }
}

// Distinguere multipli di 3 e di 5 e di entrambi

