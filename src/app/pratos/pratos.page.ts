import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pratos',
  templateUrl: './pratos.page.html',
  styleUrls: ['./pratos.page.scss'],
})
export class PratosPage implements OnInit {
  
  public title: any;
  public text: any;
  public Image: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    if(this.route.snapshot.paramMap.get('id') == '1'){
      this.title = "Galo Assado á moda de Barcelos"
      this.Image = "/assets/galoAssado.jpg";
      this.text = `<p>O sabor intenso do recheio com chouriço, figado e bacon recupera o simbolismo de uma lenda emblemática.</p>
      <p>1 galo do campo (2 kg) com os miudos</p>
      <p>1 kg de batatas redondas pequenas</p>
      <p>1 chouriço de carne pequeno</p>
      <p>100 g de bacon</p>
      <p>250 g de miolo de pão</p>
      <p>1 dl de leite</p>
      <p>2 cebolas grandes</p>
      <p>1 cabeça de alhos</p>
      <p>3 tomates grandes</p>
      <p>0,5 l de vinho verde</p>
      <p>1 raminho de alecrim</p>
      <p>1 ramo de salsa</p>
      <p>azeite</p>
      <p>sal</p>
      <p>De véspera, esmague os dentes de alho, pique as folhinhas do alecrim e misture com um punhado de sal, 2 colheres de sopa de azeite e 1 dl de vinho verde.</p>
      <p>Tempere o galo, barrando-o por fora com esta pasta.</p>
      <p>Deixe repousar no frigorifico durante 24 horas.</p>
      <p>No dia seguinte, coza os miudos do galo em água e sal, tire a carne das asas e do pescoço e triture-a, juntamente com a moela, o figado, o chouriço e o bacon.</p>
      <p>Pique uma das cebolas e leve-a a alourar numa caçarola com azeite.</p>
      <p>Junte o preparado anterior, envolva e acrescente o miolo de pão desfeito no leite, mexendo bem.</p>
      <p>Recheie o galo com esta pasta e cosa a abertura com fio de cozinha, para não sair.</p>
      <p>Num tabuleiro, ponha azeite, o restante vinho verde, a outra cebola, cortada às rodelas, o tomate, sem peles nem sementes e cortado em pedaços e a salsa.</p>
      <p>Espalhe por cima umas pedrinhas de sal.</p>
      <p>Coloque o galo no tabuleiro e deixe repousar durante 2 horas, virando-o ocasionalmente para se impregnar nos aromas.</p>
      <p>Lave as batatas, sem as descascar, enxugue-as, tempere-as com umas pedras de sal e distribua-as pelo tabuleiro.</p>
      <p>Leve ao forno, pré-aquecido a 180º C.</p>
      <p>Deve assar em lume brando durante 90 minutos, virando-se o galo de vez em quando para dourar por igual.</p>
      <p>Acompanhe, por exemplo, com grelos cozidos e salteados em azeite e alho.</p>`;
    }

    if(this.route.snapshot.paramMap.get('id') == '2'){
      this.title = "Arroz Pica no Chão"
      this.Image = "/assets/arroz.jpg";
      this.text = `<p>1 galinha</p>
      <p>dl azeite</p>
      <p>3 c. sopa vinagre</p>
      <p>1 cebola</p>
      <p>2 dentes de alho</p>
      <p>100 g toucinho</p>
      <p>1 folha de louro</p>
      <p>1 malagueta</p>
      <p>1 tigela arroz</p>
      <p>q.b. sal</p>
      <p>Aproveite o sangue da galinha deitando-o numa tigela com duas colheres de sopa de vinagre para que não coalhe.</p>
      <p>Numa panela ponha a refogar no azeite a cebola e os alhos picados.</p>
      <p>Junte-lhe a galinha cortada aos bocados e os miúdos, o toucinho cortado, o louro e a malagueta.</p>
      <p>Refogue tudo, tempere com sal e deixe estufar em lume brando.</p>
      <p>Cubra a carne com água quente, tape a panela e deixe cozer até a galinha ficar cozida.</p>
      <p>Depois de cozida retire a galinha e rectifique a água para que fique na proporção de 3 de água para 1 de arroz para a cozedura do arroz.</p>
      <p>Quando levantar fervura junte o arroz.</p>
      <p>Três ou quatro minutos antes de ficar pronto, junte o sangue, misture-o bem, junte também a carne e deixe apurar.</p>`;
    }


    if(this.route.snapshot.paramMap.get('id') == '3'){
      this.title = "Polvo Grelhado na Brasa"
      this.Image = "/assets/polvo.png";
      this.text = `<p>1 polvo de 1/2Kg</p>
      <p>300 ml vinho tinto vinhão</p>
      <p>100 gramas de cebola</p>
      <p>20 gramas de alho</p>
      <p>10 gramas de sal</p>
      <p>5 cravos da Índia</p>
      <p>1 folha de louro</p>
      <p>5 gramas de tomilho</p>
      <p>400 gramas de batata nova miúda</p>
      <p>500 gramas de sal grosso</p>
      <p>1 kg de grelos</p>
      <p>150 gramas de pimento vermelho</p>
      <p>50 gramas de cebola roxa</p>
      <p>5 gramas de coentros</p>
      <p>1,5 dl de azeite extra virgem</p>
      <p>q.b vinagre de vinho tinto</p>
      <p>30 gramas de azeitona kalamata</p>
      <p>100 gramas de cebolinhas</p>
      <p>q.b de sal</p>
      <p>q.b de pimenta</p>
      <p>Preparação:</p>
      <p>Lavar muito bem o polvo, pois pode ter alguma areia.</p>
      <p>Colocar 150 ml de água na panela de pressão, o vinho, cebola cravejada com o cravo, louro, salsa e grão de pimenta e deixar ferver. Colocar o polvo e deixar cozer 15 minutos com pressão.</p>
      <p>Se tiver possibilidade, acender o grelhador a carvão. Retirar a pressão e retirar o polvo e deixar arrefecer.</p>
      <p>Lavar as batatas, colocar no tabuleiro e tapar com sal e levar a assar no forno a 160ºC durante 35 minutos.</p>
      <p>Escolher os grelos das folhas dos talos, cozer os grelos em água a ferver com sal e arrefecer em água e gelo.</p>
      <p>Cortar as cebolinhas a meio e grelhar nas brasas.</p>
      <p>Grelhar o pimento vermelho nas brasas e colocar dentro de um saco para suar e retirar a pele.</p>
      <p>Cortar o polvo em tentáculos e grelhar na brasa e pincelar com azeite.</p>
      <p>Numa taça juntar, azeite, vinagre, cebola roxa picada, alho, salsa picada, coentros picados, azeitona picada e o pimento picado, e retificar os temperos.</p>
      <p>Saltear a batata assada em azeite, tomilho e alho picado.</p>
      <p>Saltear os grelos em azeite e alho picado.</p>
      <p>Empratar o polvo e regar com o molho em volta do polvo.</p>`;
    }

    if(this.route.snapshot.paramMap.get('id') == '4'){
      this.title = "Queijadas de Barcelos"
      this.Image = "/assets/queijadas.jpg";
      this.text = `<p>Ingredientes;  açúcar;  água; amêndoa com pele; laranja; batatas (puré); canela em pó; migas de pão de ló; ovos; papel de hóstia; calda de açúcar em ponto e fio.</p>
      <p>Preparação: Começar por cozer as batatas e fazer o puré. Depois moer as amêndoas grosseiramente, triturar a laranja , ralar as migas do pão de ló e reservar.</p>
      <p>Num tacho juntar o açúcar e a água e deixar ferver. Adicionar os restantes ingredientes um a um,  mexendo e sempre, depois deixar a cozer por mais 2 minutos. Isolar a massa e deixar arrefecer, moldar em pequenas bolas,  colocar no papel da hóstia humedecido com claras de ovos, pincelar o seu topo com gema de ovo e levar ao forno a 240º, durante 5 minutos. Depois de frias, mergulhar as queijadinhas até ao meio de uma calda de açúcar em ponto e fio, de seguida deixar arrefecer um pouco e puxar o lustro com a passagem de uma colher na calda de açúcar.</p>
      <p>Receita cedida pelo pasteleiro José Freitas, 60 anos, de Vila Boa.</p>`;
    }
    
  }

}
