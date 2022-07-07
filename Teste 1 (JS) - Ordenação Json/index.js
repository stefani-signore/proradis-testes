


let carros = [
    { 
        nome: "Peugeot",
        preco: "50000.99"
    },
    { 
        nome: "Honda",
        preco: "80500.70"
    },
    { 
        nome: "Fox",
        preco: "70000.50"
    },
    { 
        nome: "Gol",
        preco: "45000.65"
    },            
    
]

console.log("Lista de carros: " + JSON.stringify(carros));


//TO DO
carros.sort(function(a, b){
	if (a.preco < b.preco){
		return -1;
		}
		else {
			return true;
		}
});
//Ordenar do menor preço para o maior 
console.log("Lista de carros ordenados por preço: ", carros);

//TO DO
carros.sort(function(a, b){
	if (a.nome < b.nome){
		return -1;
		}
		else {
			return true;
		}
});

//Ordenar por ordem alfabética
console.log("Lista de carros ordenados por nome: ", carros);


