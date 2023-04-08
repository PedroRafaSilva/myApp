import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-locais',
  templateUrl: './locais.page.html',
  styleUrls: ['./locais.page.scss'],
})
export class LocaisPage implements OnInit {

  public title: any;
  public text: any;
  public Image: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    if(this.route.snapshot.paramMap.get('id') == '1'){
      this.title = "Templo do Senhor Bom Jesus da Cruz"
      this.Image = "/assets/templo.jpg";
      this.text = `<p>A origem da Igreja do Senhor Bom Jesus da Cruz está relacionada com o misterioso aparecimento de uma Cruz de terra negra no chão do Campo da Feira, em Dezembro de 1504, e onde logo se construiu uma pequena capela para lembrar o sinal divino.
      Dois séculos depois, em 1704, construiu-se uma igreja no mesmo local segundo o projecto do João Antunes. O conhecido arquitecto português optou por um estilo muito característico do norte do país em que o granito, principal material utilizado na construção local, e o branco da cal se conjugaram nas harmoniosas formas barrocas, neste caso de inspiração italiana.</p>
      <p>O interior, de planta octogonal, impressiona pela robustez do monumento que se vê pelas grossas paredes e na pesada cúpula de granito, com cerca de 10 metros de diâmetro.
      De notar os altares de talha dourada, nomeadamente o que tem a imagem do Senhor da Cruz datada do séc. XVI, e os painéis de azulejo setecentistas da autoria de João Neto, um azulejador lisboeta.
      Tem aqui lugar uma das mais importantes festas religiosas do concelho de Barcelos, a Festa das Cruzes, que se realiza no início de Maio. Nessa altura, vale a pena a visita para admirar a os tapetes de pétalas que cobrem o chão da igreja durante a festa que dura cinco dias.</p>`;
    }
    if(this.route.snapshot.paramMap.get('id') == '2'){
      this.title = "Torre Medieval"
      this.Image = "/assets/torre.jpg";
      this.text = `<p>No início do século XV, D. Afonso, 8º Conde de Barcelos, mais tarde 1º Duque de Bragança, empenhou-se em construir à volta de Barcelos uma soﬁsticada cerca urbana. 
      A Torre da Porta Nova é a única das três principais portas da muralha que chegou até à atualidade. 
      Em 1926, foi classiﬁcada como Monumento Nacional. Com a recente renovação (2010-2013) ganhou novas valências como espaço de dimensão cultural, pedagógica e turística, apresentando-se como um dos espaços patrimoniais mais visitados da região.</p>
      <p>Este imóvel foi, em 2014, distinguido com o primeiro prémio “Concelho Mais Acessível”, na categoria Lazer/ Património/ Turismo, pelo Instituto Nacional para a Reabilitação (INR). 
      Nenhuma visita a este espaço ﬁca completa sem uma passagem pelo seu magníﬁco miradouro. 
      Aí pode deslumbrar-se com a panorâmica sobre todo o centro histórico, rio Cávado e Monte da Franqueira. </p>
      <p>Horário: Segunda a Sexta-Feira das 10.00 às 18.00 | Fim de semana e feriados das 10.00 às 13.00 e das 14.30 às 17.30. 
      Encerra a 24 e 25 de dezembro; 1 de janeiro; sexta-feira Santa e Dia de Páscoa. 
      As visitas organizadas a este monumento por parte do turismo organizado e grupos equiparados têm de ser marcadas com uma antecedência mínima de 72 horas.</p>`;
    }


    if(this.route.snapshot.paramMap.get('id') == '3'){
      this.title = "Museu de Olaria"
      this.Image = "/assets/museu.jpg";
      this.text = `<p>O primeiro passo para a criação do Museu de Olaria, em Barcelos deu-se em 1949, quando a Câmara Municipal decidiu construir uma sala subterrânea destinada a albergar a “Olaria Barcelense” – no terreiro do Paço dos Condes de Barcelos, paredes meias com a Igreja Matriz. 
      Da intenção à abertura do Museu demoraram quase 15 anos. 
      O então designado “Museu de Cerâmica Regional” foi inaugurado a 4 Maio de 1963, em plena Festa das Cruzes.</p>
      <p>Na base da criação deste equipamento cultural esteve a coleção do etnógrafo Sellés Paes, doada pelo próprio, ao município de Barcelos, em 1952. 
      Por volta de 1982, verificando-se que a sala subterrânea do Paço dos Condes já não dispunha das condições mínimas para acolher as coleções de olaria, a Câmara Municipal decidiu que as reservas passassem para a Casa dos Mendanhas, edifício devoluto entretanto adquirido pelo Município na década de sessenta.
      Após um moroso processo técnico, o projeto de ampliação e remodelação da Casa dos Mendanhas  foi aprovado em Dezembro de 1989, tendo o edifício entrado em obras de recuperação e adaptação em 1991. 
      A requalificação e valorização do edifício se estende ao exterior. Na fachada sul foi colocado um painel cerâmico de grandes dimensões e forte impacto visual, construído especificamente para o local pelo artista português Eduardo Nery.</p>
      <p>O Museu de Olaria foi inaugurado a 29 de Julho de 1995. 
      Quinze anos após a sua inauguração, houve necessidade de nova intervenção, de modo a adequar o edifício aos novos desafios da museologia.  
      Atualmente, o Museu de Olaria possui um acervo com mais de 9000 peças, maioritariamente provenientes do concelho de Barcelos mas também de outras regiões de Portugal e dos países lusófonos.</p>`;
    }

    if(this.route.snapshot.paramMap.get('id') == '4'){
      this.title = "Passeio dos Assentos"
      this.Image = "/assets/passeio.jpg";
      this.text = `<p>Conjunto de jardins públicos no centro histórico de Barcelos composto pelo Passeio dos Assentos ou Jardim das Barrocas, o Campo da Feira a norte e o Parque Municipal de Barcelos, no local da antiga cerca do Convento de São Francisco. 
      No convento, hoje da Santa Casa da Misericórdia de Barcelos, atual Hospital de Barcelos, a nascente. 
      Em 1834, após a Extinção das Ordens Religiosas, o convento foi cedido à Misericórdia para ali instalar o hospital, que se encontrava no centro da vila.</p>
      <p>Em 1836 foi então cedido todo o edifício e a cerca dos Capuchos. 
      A transferência ocorreu em 1838. 
      Na proximidade a Igreja de Santa Cruz e o chafariz, transferido para o local em 1967, do local original, o claustro do Mosteiro de Vilar de Frades.
      A feira de Barcelos foi instituída por D. João I em 1412, a pedido do seu filho D. Afonso, 1º Conde de Barcelos. </p>
      <p>Em 1621 João Lopes, mestre canteiro executou o chafariz que se encontra no meio do campo da feira. 
      No primeiro quartel do século XX, segundo projeto do Arquiteto José Marques da Silva, o chafariz do campo da feira foi colocado no local atual, sobre uma base octogonal com escadas e taças que serviam de bebedouro para os animais que frequentavam a feira. 
      No Campo da Feira predominam plátanos, castanheiros da índia e liquidâmbares.
      O Passeio dos Assentos ou Jardim das Barrocas ou das Obras começou a ser construído entre 1780 e 1783 no seguimento de um pedido de alguns barcelenses de um passeio público no terreno das Barrocas, cedido pela Casa de Bragança.</p>
      <p>Atualmente apenas restam as estruturas arquitetónicas pois o jardim é fruto de remodelações do século XX. 
      O Passeio dos Assentos é desenvolvido em dois patamares, com muro barroco, recortado ornamentado por fogaréus e volutas com duas fontes e escadaria ao centro ladeada por obeliscos. 
      O jardim formal é composto por canteiros de buxo com plantas anuais, roseiral e camélias, tuias e teixos talhados.</p>
      <p>O Parque Municipal, ocupando a antiga mata da cerca conventual, apresenta notáveis cedros, carvalhos, faias rubras e camélias. 
      Possui ainda exemplares de teixos, magnólias de flor grande, tulipeiros da Virgínia, falsos plátanos, sobreiros, castanheiros, canteiros com azáleas e caminhos em terra batida percorrendo o parque convergindo em fonte central. 
      Apresenta várias zonas com bancos e para merendas, com relvado, circuito de manutenção e pequeno lago. Muro gradeado com namoradeiras.</p>`;
    }
    
  }

}
