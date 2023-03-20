

// TODO: test const evaluation
// TODO: variáveis locais ? funções


const tabelitaEl   = document.getElementById("table");
const tabelitaEl2  = tabelitaEl.getElementsByTagName("tbody");
const reservadasEl = document.getElementById("reservadas");

// TODO: até, então, faça, fimfunção, função, não, senão

// fonte: https://visualg3.com.br/tabelas/
const palavrasReservadas = [
	"aleatorio",
	"algoritmo",
	"arquivo",
	"asc",
	"ate",
	"carac",
	"caracpnum",
	"Caracter",
	"caractere",
	"caso",
	"compr",
	"copia",
	"cronometro",
	"debug",
	"div", // não estava lá...
	"e",
	"eco",
	"enquanto",
	"entao",
	"escolha",
	"escreva", // não estava lá...
	"escreval",
	"faca",
	"falso",
	"fimalgoritmo",
	"fimenquanto",
	"fimescolha",
	"fimfuncao",
	"fimpara",
	"fimprocedimento",
	"fimrepita",
	"fimse",
	"funcao",
	"inicio",
	"int",
	"inteiro",
	"interrompa",
	"leia",
	"limpatela",
	"logico",
	"maiusc",
	"minusc",
	"mod",
	"mudacor", // "MUDACOR",
	"nao",
	"numpcarac",
	"ou",
	"outrocaso",
	"para",
	"passo",
	"pausa",
	"pos",
	"procedimento",
	"real",
	"repita",
	"retorne",
	"se",
	"senao",
	"timer",
	"var",
	"verdadeiro",
	"vetor",
	"xou",
]

const operadoresAritimeticos = [
	"^",
	"*",
	"/",
	"\\",
	// por algum motivo esses dois estavam aqui
	// "div",
	// "mod",
	"+",
	"-",
	"*",
]

const operadoresRelacionais = [
	">",
	"<",
	"=",
	">=",
	"<=",
	"<>",
]

const operadoresLogicos = [
	"nao",
	"ou",
	"e",
	"xou",
]


const contadoresHtml = [];

for (const palavraReservada of palavrasReservadas) {
	// console.log(palavraReservada);
	
	const linha = document.createElement("tr");

	const colunaPalavraRes = document.createElement("td");
	colunaPalavraRes.textContent = palavraReservada;
	
	const colunaContador = document.createElement("td");
	colunaContador.textContent = 0;

	linha.appendChild(colunaPalavraRes);
	linha.appendChild(colunaContador);
	tabelitaEl.appendChild(linha);

	contadoresHtml.push(colunaContador);
}


const processa = () => {
	console.log("processando");
	const textoDaIde = editor.getValue();
	
	// for (const palavraReservada of palavrasReservadas) {
	for (let i = 0; i < palavrasReservadas.length; ++i) {
		const palavraReservada = palavrasReservadas[i];
		const regex = new RegExp(palavraReservada, "g");

		contadoresHtml[i].textContent = (textoDaIde.match(regex) || []).length;
	}
}
