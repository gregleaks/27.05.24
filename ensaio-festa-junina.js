var pessoa = [];
pessoa[1] = new Pessoa(jazz, liso, 22, azul, excelente, 1.75, perfeicao, Sofia, 2000, 3, 15, Gustavo, Mariana);
pessoa[2] = new Pessoa(rock, moicano, 20, castanho, ótimo, 1.80, perfeicao, Miguel, 2002, 6, 10, Marcos, Isabela);
pessoa[3] = new Pessoa(samba, black-power, 18, preto, bom, 1.70, perfeicao, Beatriz, 2004, 8, 5, Lucas, Ana);
pessoa[4] = new Pessoa(eletrônico, raspado, 25, loiro, bom, 1.85, perfeicao, Lucas, 1999, 11, 20, Pedro, Julia);
pessoa[5] = new Pessoa(clássico, longo, 27, ruivo, regular, 1.65, perfeicao, Isabella, 1997, 10, 3, Thiago, Camila);
pessoa[6] = new Pessoa(reggae, afro, 32, preto, péssimo, 1.88, perfeicao, Gabriel, 1992, 4, 18, Marcelo, Fernanda);
pessoa[7] = new Pessoa(hip-hop, trançado, 24, castanho, ruim, 1.80, perfeicao, Laura, 1998, 7, 12, Felipe, Angela);
pessoa[8] = new Pessoa(metal, careca, 30, branco, regular, 1.90, perfeicao, Matheus, 1993, 9, 30, João, Larissa);
pessoa[9] = new Pessoa(funk, cacheado, 29, loiro, péssimo, 1.70, perfeicao, Juliana, 1994, 2, 28, Lucas, Gabriela);
pessoa[10] = new Pessoa(indie, curto, 31, castanho, bom, 1.68, perfeicao, Guilherme, 1991, 12, 10, Rafael, Ana);
pessoa[11] = new Pessoa(pagode, comprido, 28, preto, ótimo, 1.75, perfeicao, Marina, 1996, 5, 20, Vinicius, Luana);
pessoa[12] = new Pessoa(blues, raspado, 23, ruivo, excelente, 1.79, perfeicao, Leonardo, 2001, 1, 1, Pedro,  Maria);
pessoa[13] = new Pessoa(pop-rock, gordo, 26, amarelo, bom, 1.82, perfeicao, Carla, 1995, 11, 5, Thiago, Mariana);
pessoa[14] = new Pessoa(sertanejo, tranças, 21, castanho, regular, 1.73, perfeicao, Rafaela, 2003, 3, 10, Bruno, Julia);
pessoa[15] = new Pessoa(rock_and_roll, curto, 33, negro, ruim, 1.77, perfeicao, Pedro, 1990, 7, 20, Lucas, Rita);
pessoa[16] = new Pessoa(pop, sheipado, 34, loiro, péssimo, 1.72, perfeicao, Bianca, 1989, 9, 15, Fabio, Marcela); 


var musica = [];
musica[0] = new Musica("Bohemian Rhapsody", "Queen", "6:07");
musica[1] = new Musica("Smells Like Teen Spirit", "Nirvana", "5:01");

var ritmo = [];
ritmo[0] = new Ritmo("Rock", 120);
ritmo[1] = new Ritmo("Samba", 90);

var local_do_ensaio = [];
local_do_ensaio[0] = new LocalDoEnsaio("Sesc Auditório 1", "Rua A, 123", 50);
local_do_ensaio[1] = new LocalDoEnsaio("Sala de Ensaios", "Av. B, 456", 30);

var banheiro = [];
banheiro[0] = new Banheiro(1, "Banheiro principal");
banheiro[1] = new Banheiro(2, "Banheiro secundário");


function Musica(titulo, artista, duracao) {
    this.titulo = titulo;
    this.artista = artista;
    this.duracao = duracao;
}

function Ritmo(nome, bpm) {
    this.nome = nome;
    this.bpm = bpm;
}


function LocalDoEnsaio(nome, endereco, capacidade) {
    this.nome = nome;
    this.endereco = endereco;
    this.capacidade = capacidade;
}


function Banheiro(numero, descricao) {
    this.numero = numero;
    this.descricao = descricao;
}




class Pessoas {
    constructor (musicalidade, corpo, idade, peso, cor, coordenacao_motora, altura, ritmo, nome, ano_nascimento, mes_nascimento, dia_nascimento, nome_pai, nome_mae, rg, cpf, endereco, numero_endereco, bairro, cidade, estado, cep, whatsapp, facebook, instagram, twiter_x, linkedin, email, tiktok, youtube, snapchat, orkut, tinder, uber, app_99, profissao, nacionalidade, estado_civil, possui_deficiencia, cnh, passaporte, religiao, partido_politico, idioma, figurino, ) {
        this.musicalidade = musicalidade;
        this.corpo = corpo;
        this.idade = idade;
        this.peso = peso;
        this.cor = cor;
        this.coordenacao_motora = coordenacao_motora;
        this.altura = altura;
        this.ritmo = ritmo;
        this.nome = nome;
        this.ano_nascimento = ano_nascimento;
        this.mes_nascimento = mes_nascimento;
        this.dia_nascimento = dia_nascimento;
        this.nome_pai = nome_pai;
        this.nome_mae = nome_mae;
        this.rg = rg;
        this.endereco = endereco;
        this.numero_endereco = numero_endereco;
        this.bairro = bairro;
        this.cidade = cidade;

    }
}
