var linkProjetos = [
	{
		linkProjeto: "#",
		linkImg:
			"g.jpg",
		span: "2024",
		title: "sobre",
		subTitle: "nós",
		resumo:
			"explicador de Matemática, Física e Química	Venho informar aos meus estimados que presto serviços de explicação de  Matemática  Física e  Química presencial e ao domicílio.",
		like: 22
	},
	{
		linkProjeto: "#",
		linkImg:
			"k.jpg",
		span: "2024",
		title: "classes°",
		subTitle: "",
		resumo:
			"8 até 12ª Classe, explicação e preparação de exames Fundamentais e Médio Geral.",
		like: 11
	},
	{
		linkProjeto: "#",
		linkImg:
			"h.jpg",
		span: "2024",
		title: "informações",
		subTitle: "🚀",
		resumo:
			"• Preparação de exames de admissão ao ensino Superior (UEM, UP, ACIPOL, ACADEMIA Militar, UJC,.. ) Matemática-I,II,III e IV Física-I,II e III e Química -I,II e III .",
		like: 267
	},
	{
		linkProjeto: "#",
		linkImg:
			"",
		span: "2024",
		title: "novidade",
		subTitle: "📉",
		resumo:
			"•Médio Técnico de formação (Institutos Médios)   👨‍💻  Prestamos serviços para qualquer instituição Superior ou Média a preços muito bons👌🏽, vem já se juntar as nossas turmas e garante sua passagem e admiração ao ensino Superior 🤌🏽.",
		like: 113
	}
];

function Projetos() {
	var elementProjetos = document.getElementById("projetos");
	var elemento = "";
	console.log(linkProjetos.length);

	for (let i = 0; i < linkProjetos.length; i++) {
		const projeto = linkProjetos[i];

		elemento += '<div class="container-projeto">';
		elemento += '<a href="' + projeto.linkProjeto + '" target="_blanck">';
		elemento += '<img src="' + projeto.linkImg + '" alt="' + projeto.title + '">';
		elemento += "<div>";
		elemento += "<span>" + projeto.span + "</span>";
		elemento += "<h1>" + projeto.title + "</h1>";
		elemento += "<h2>" + projeto.subTitle + "</h2>";
		elemento += "<p>" + projeto.resumo + "</p>";
		elemento += "</div>";
		elemento += "</a>";
		elemento += '<div class="like" onclick="like(' + i + ')">';
		elemento += '<i class="far fa-heart"></i>';
		elemento += '<p id="like' + i + '">' + projeto.like + "</p>";
		elemento += "</div>";
		elemento += "</div>";
	}

	elementProjetos.innerHTML = elemento;
}

function like(i) {
	document.getElementById("like" + i).innerHTML = linkProjetos[i].like += 1;
}

function mudaTema() {
	var elementButton = document.getElementById("clear");
	document.body.classList.toggle("clear");

	if (document.body.classList == "clear") {
		elementButton.innerHTML = "DARK MODE";
	} else {
		elementButton.innerHTML = "CLEAR MODE";
	}
}
function gr(){
  window.location.href="https://wa.me/+258868303756"
  alert('site criado por Grmatrix clica Ok oq para continuar')
}
function rr(){
  window.location.href="https://w.app/Gr"

}