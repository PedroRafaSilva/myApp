import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curiosidades',
  templateUrl: './curiosidades.page.html',
  styleUrls: ['./curiosidades.page.scss'],
})
export class CuriosidadesPage implements OnInit {

  public Image: any;
  public text: any;
  public title: any;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
      if(this.route.snapshot.paramMap.get('id') == '1'){
        this.title = "História de Barcelos"
        this.Image = "/assets/barcelos.jpg";
        this.text = `<p>Barcelos significa «terra ribeirinha e plana», expressão presente nos mais antigos documentos referentes à cidade. 
        Pelo menos desde o século XIII, em Barcelos realiza-se uma feira semanal, às quintas-feiras, onde os agricultures e artesãos 
        vendem os seus produtos.</p>
        <p>A modesta povoação de Barcelos, por volta de 1160, entra nas boas graças de D. Afonso Henriques que lhe concede carta de foral. 
        Em 1218, D. Afonso II confirma o foral e a importância da povoação para o Reino de Portugal.</p>
        <p>O primeiro Conde de Barcelos
        D. Dinis, como prémio por ter negociado favoravelmente a Portugal o Tratado de Alcanises, celebrado a 12 de Setembro de 1297, 
        concedeu ao seu parente D. Afonso Telo, o título de Conde de Barcelos. Este título, teria sido utilizado mais tarde pelo 
        alferes-mor do Reino, Martim de Sousa, pelo infante D. Pedro, filho bastardo de D. Dinis, e por três descendentes do primeiro 
        titular deste condado, sendo o último deles João Afonso Telo que socumbiu na Batalha de Aljubarrota em 1385 quando combatia pelo 
        lado castelhano.</p>
        <p>O título passou então para D. Nuno Álvares Pereira e, seguidamente, para o genro deste, D. Afonso, filho bastardo do rei D. João I, 
        que viria a ser o 1º Duque de Bragança, a cuja casa ficou a pertencer o senhoria de Barcelos.
        Elevação à categoria de cidade
        Foi no ano de 1928 que a Vila de Barcelos foi elevada à categoria de cidade.</p>`;
      }
      if(this.route.snapshot.paramMap.get('id') == '2'){
        this.title = "Informações de caraterização"
        this.Image = "/assets/freguesia.png";
        this.text = `<p>Habitantes: 118.144 (2016)</p>
        <p>Área: 378,9 Km2</p>
        <p>Densidade populacional: 310,9 hab/Km2</p>
        <p>Feriado Municipal: 3 de Maio (Festa das Cruzes) (feriados locais portugueses)</p>
        <p>Gentílico: Barcelense</p>
        <p>Nº de Freguesias: 61</p>
        <p>Ano da fundação do município: 1177 (1º foral de D. Afonso Henriques)</p>
        <p>Código postal: 4750-XXX</p>
        <p>Antigo prefixo telefónico: (253)</p>`;
      }


      if(this.route.snapshot.paramMap.get('id') == '3'){
        this.title = "Clube de Futebol"
        this.Image = "/assets/gil.png";
        this.text = `<p>Gil Vicente Futebol Clube, mais conhecido como Gil Vicente FC ou simplesmente Gil Vicente , 
        é um clube português sediado na cidade de Barcelos. É mais conhecido pela sua equipa de futebol profissional, 
        que joga atualmente na Liga Portugal Bwin, a competição mais importante do futebol português.</p>
        <p>Fundado a 3 de maio de 1924, no feriado municipal, é um dos clube mais representativos da região do Minho, 
        juntamente com o , Vitória SC e FC Famalicão, os principais rivais. As alcunhas da equipa são "barcelenses", 
        "galos", associado à cidade e à sua mascote, o galo. Os seus apoiantes são chamados de "gilistas".</p> 
        <p>Os seus jogos de futebol em casa são realizados no Estádio Cidade de Barcelos, inaugurado em 2004 e que tem uma 
        capacidade de 12 046 lugares, e que substituiu o antigo Estádio Adelino Ribeiro Novo.</p>
        <p>O Gil Vicente FC tem um total de 6 títulos conquistados. Ganhou 2 títulos da Segunda Liga, 1 título da III Divisão 
        e 3 títulos da 1º Divisão da AF Braga. Em adição, foi finalista na Taça da Liga em 2011-12.
        O Gil Vicente FC está atualmente na 210ª posição no ranking mundial da IFFHS em 10 de março de 2022.</p>`;
      }
      
    }
}
