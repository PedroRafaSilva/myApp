import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-famosos',
  templateUrl: './famosos.page.html',
  styleUrls: ['./famosos.page.scss'],
})
export class FamososPage implements OnInit {

  public title: any;
  public text: any;
  public Image: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    if(this.route.snapshot.paramMap.get('id') == '1'){
      this.title = "Gisela João"
      this.Image = "/assets/gisela.jpg";
      this.text = `<p>Gisela João nasceu e cresceu em Barcelos, viveu seis anos no Porto e chegou a 
      Lisboa há dois para fazer História.</p>
      <p>Sendo a mais velha de 7 irmãos, de uma família ligada pelo trabalho à indústria têxtil, teve, 
      ainda criança, o primeiro contacto com o Fado através da rádio e começou logo a cantá-lo.</p> 
      <p>Primeiro para a família, depois para os amigos e vizinhos e finalmente em concursos locais.
      Quis estudar design de moda, mudou-se para o Porto e acabou no circuito boémio da Invicta, 
      a cantar numa casa de Fados da Ribeira.</p>
      <p>Finalmente o canto impôs a sua vontade e levou-a para Lisboa.
      Numa pequena casa “emprestada” na Mouraria debateu-se com o peso imenso da solidão, 
      pensou várias vezes em desistir, mas resistiu. Conquistou o Sr. Vinho, a Tasca da Bela, 
      a Mesa de Frades primeiro, para depois encher a Fábrica do Braço de Prata, o Lux (primeiro num set do mago do pós-Dubstep, 
      Nicolas Jaar e depois em nome próprio, a convite de Manuel Reis), e, mais recentemente, 
      uma pequena legião de fãs esgotou o Pequeno Auditório do Centro Cultural de Belém duas semanas antes do espectáculo. </p>
      <p>A sua voz grave e poderosa, a forma como se entrega às palavras, como permite que dominem a sua prestação, 
      mostram que não é apenas mais uma. E Camané proclama-a a grande aposta do momento.</p>`;
    }

    if(this.route.snapshot.paramMap.get('id') == '2'){
      this.title = "Nélson Oliveira"
      this.Image = "/assets/nelson.jpg";
      this.text = `<p>Nélson Miguel Castro Oliveira CvIH (Barcelos, 8 de agosto de 1991) é um futebolista português que atua como centroavante. Atualmente joga pelo PAOK.</p>
      Formado pelas escolas de futebol do Santa Maria, transferiu-se do Braga e consequentemente para o Bairro da Misericórdia. 
      Depois do Bairro, rumou para o Benfica no verão de 2006. Nélson Oliveira recebeu sondagens do Porto e do Sporting, tendo até sido convidado pelo Chelsea para realizar uma semana de treinos em Londres. 
      Contudo, o jogador transferiu-se para o Benfica.</p>
      <p>Com 16 anos assinou o seu primeiro contrato profissional, passando a integrar os trabalhos de pré-temporada dirigidos por Quique Flores. 
      Também na Seleção Nacional, Nélson Oliveira teve um início precoce, onde com apenas 16 anos já era convocado para atuar no time Sub-19.
      O atacante foi contratado pelo Paços de Ferreira no dia 12 de agosto de 2010.
      Destacou-se na Copa do Mundo FIFA Sub-20 de 2011, realizada na Colômbia, ao marcar quatro gols – incluindo um na final contra o Brasil, uma derrota por 3 a 2 no prolongamento – distribuir duas assistências e receber duas vezes o prêmio de melhor em campo.</p>
      <p>Oliveira foi eleito o segundo melhor jogador desta competição por, entre outras razões, ter marcado três gols.
      Foi considerado uma boa promessa da sua geração. No Benfica veio a afirmar-se na segunda metade da época 2011–12. 
      2012 foi também o ano de estreia de Nélson Oliveira pela Seleção Portuguesa principal. 
      Com apenas 20 anos de idade, o atacante foi um dos 23 convocados pelo treinador Paulo Bento para a Euro 2012.</p>
      <p>Antes do início da temporada 2012–13, Nélson Oliveira renovou com o Benfica até 2018 e foi cedido ao Deportivo La Coruña por empréstimo até o final da temporada. 
      No ano seguinte, o técnico do Benfica, Jorge Jesus, voltou a incluí-lo no lote de dispensáveis, o que motivou novo empréstimo do jogador, desta feita aos franceses do Rennes. 
      Depois disso, foi emprestado ao Swansea City, ao Nottingham Forest, e acabou sendo vendido ao Norwich City.
      Em junho de 2021 foi contratado pelo PAOK, da Grécia.</p>`;
    }


    if(this.route.snapshot.paramMap.get('id') == '3'){
      this.title = "Fábia Maia"
      this.Image = "/assets/fabia.jpg";
      this.text = `<p>Fábia Maia cresceu a saber que um dia seria artista. 
      A avó insistiu para que a neta frequentasse uma escola de música, mas por esses dias sonhou também em ser Médica sem Fronteiras. 
      No processo de aproximação à música atravessou várias etapas, desde a descoberta de Avril Lavigne (o seu ídolo) a uma passagem por uma banda de rock/metal na adolescência. 
      Outras revelações chegariam depois, numa altura em que começou a pensar na música como um porto de abrigo. </p>
      <p>Fazia então versões de temas do hip hop português. 
      A partir daí, teve a oportunidade de conhecer alguns dos músicos que admirava. 
      E desse processo surgiu a participação no álbum de Jimmy P “Essência”, com o tema “Má vida”. Estreou-se depois com um primeiro EP no qual Jimmy P e Slow J participaram. 
      Nos anos seguintes, lançou temas soltos como “Vibe Certa”, “BarcelonaParis” e “Mybaby“, que a ajudaram a encontrar um caminho mais pessoal, que refletiu em 2020 no EP “Santiago”, disco que assumiu como uma despedida ou uma transição para o seu Eu interior.</p>`;
    }

    if(this.route.snapshot.paramMap.get('id') == '4'){
      this.title = "Renata Gomes"
      this.Image = "/assets/renata.jpg";
      this.text = `<p>Renata Gomes nasceu na freguesia de Pousa, no concelho de Barcelos (Portugal).
      Quando tinha idade para frequentar a escola primária, emigrou para Paris e aos doze anos foi com a mãe e as duas irmãs para Londres.
      A vontade de ser médica surgiu cedo, com três anos anunciou que queria ser médica após ter sido operada à apendicite.</p>
      <p>Mais tarde o facto de ter um tio que era médico forense em Braga, no Instituto de Medicina Legal da Universidade do Minho, também a influenciou.
      Estudou no Reino Unido, onde se diplomou em Medicina Forense e Ciências Forenses na Universidade de Bradford. 
      Continuou a estudar Bioquímica e Medicina Cardiovascular na University College London e obteve um doutoramento em Regeneração Cardiovascular e Nanotecnologia na Universidade de Coimbra, em parceria com a Universidade de Oxford. </p>
      <p>O seu trabalho sobre a contribuição de uma nanopartícula para a regeneração cardiovascular, deu-lhe o segundo lugar no concurso Science-Image 2012 organizado pela British Heart Foundation.
      Entre as pessoas com quem ela trabalhou encontra-se o vencedor do Prémio Nobel, Oliver Smithies. 
      Começou a fazer investigação com a professora Karin Schallreuter.</p>`;
    }
    
  }

}
