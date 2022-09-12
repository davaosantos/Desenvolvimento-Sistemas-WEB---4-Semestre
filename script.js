var jcontent = {
	"dados":{
		"nome" : "David Alisson de Oliveira Santos",
		"endereço" : "Rua romilda perri de Castro 17",
		"cep" : "04470-120",
		"github" : "davaosantos",
		"telefone" : 11973015707
	},
	
	"experiencia":{
		"profissional" : ["Aviiação civil" , "Estágiario desenvolvimento WEB"],
		"academica" : ["Projeto com javaFx", "Projeto WEB - Sistema de vendas"],
		"cursos" : ["Análise e desenvolvimento de sistemas SENAC",
		"Ensino médio",
		"Inglês",
		"Espanhol"]
	},
	
	"cursos":{
		"tecnologia da informação" : ["Análise e desenvolvimento de sistemas SENAC", "Java completo - Udemy"],
		"idiomas" : ["Inglês", "Espanhol"]
	},
	
	"conhecimentos": {
		"programação": ["Java", "React JS", "Angular", "Spring boot"],
		"hardware": "reparo técnico"
	}
}

//Dados
var nome = document.getElementsByClassName('nome')[0];
var endereco = document.getElementsByClassName('endereco')[0];
var cep = document.getElementsByClassName('cep')[0];
var github = document.getElementsByClassName('github')[0];


//Experiencia
var experiencia = document.getElementsByClassName('experiencia')[0];
var profissional = document.getElementsByClassName('profissional')[0];
var academica = document.getElementsByClassName('academica')[0];


//Cursos
var cursos = document.getElementsByClassName('cursos-content')[0];



//dados
nome.innerHTML = jcontent.dados.nome;
endereco.innerHTML = jcontent.dados.endereço;
cep.innerHTML = jcontent.dados.cep;
github.innerHTML = jcontent.dados.github;

//experiencia
experiencia.innerHTML =  jcontent.experiencia.profissional + " " + jcontent.experiencia.academica;

//Cursos
cursos.innerHTML = jcontent.cursos.idiomas + " " + jcontent.cursos["tecnologia da informação"]






