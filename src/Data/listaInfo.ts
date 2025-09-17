import type  {TipoInfo1,TipoInfo2,TipoInfo3,TipoInfo4}  from "../types/tipoInfo";
import img1 from "../assets/img/imgHome/acessar01.png"
import img2 from "../assets/img/imgHome/cadastrarsenha.png"
import img3 from "../assets/img/imgHome/cadastrarsenha2.png"
import img4 from "../assets/img/imgHome/criarconta01.png"
import img5 from "../assets/img/imgHome/criarconta02.png"
import img6 from "../assets/img/imgHome/criarconta03.png"
import img7 from "../assets/img/imgHome/criarconta04.png"
import img8 from "../assets/img/imgHome/criarconta05.png"
import img9 from "../assets/img/imgHome/criarconta06.png"
import img10 from "../assets/img/imgHome/teleconsulta01.png"
import img11 from "../assets/img/imgHome/teleconsulta02.png"
import img12 from "../assets/img/imgHome/teleconsulta03.png"
import img13 from "../assets/img/imgHome/teleconsulta04.png"
import img14 from "../assets/img/imgHome/teleconsulta05.png"
import img15 from "../assets/img/imgHome/teleconsulta06.png"
import img16 from "../assets/img/imgHome/teleconsulta07.png"
import img17 from "../assets/img/imgHome/teleconsulta08.png"
import img18 from "../assets/img/imgHome/teleconsulta09.png"
import img19 from "../assets/img/imgHome/teleconsulta10.png"
import img20 from "../assets/img/imgHome/teleconsulta11.png"
import img21 from "../assets/img/imgHome/teleconsulta12.png"

export const Info1:TipoInfo1[]= [
    {"id":1,"title":'CADASTRAR UMA SENHA',
        "text1":"Antes do primeiro acesso do portal do paciente é necessário cadastrar uma senha. Clique no botão cadastrar senha.",
        "text2":"Na tela seguinte digite somente os números de seu cpf (cadastro de pessoa física) e data de nascimento nos campos.",
        "img1":img2,
        "img2":img3,
        "alt1":"Imagem mostrar onde cadastrar senha ",
        "alt2":"Imagem mostra onde digitar o cpf"
    },
]; 
export const Info2:TipoInfo2[]= [
    {"id":1,"title":'COMO CRIAR CONTA',
        "text1":"Digite o cpf e a data de nascimento do paciente e o portal fará busca nos dados do hc e exibirá na tela, o nome do paciente/cpf e data de nascimento encontrado.",
        "text2":"Caso você não seja o paciente localizado, clique em “alterar paciente” para retornar à tela anterior e realizar uma nova busca.",
        "text3":"Se o paciente estiver correto, digite e confirme seu e-mail e celular.",
        "text4":"Em seguida preencha o primeiro nome da mãe e os 3 primeiros ou últimos dígitos do rg.",
        "text5":"Em seguida crie uma senha de acesso e confirme a mesma no próximo campo. para finalizar clique no botão “cadastrar senha”.",
        "text6":"Ao concluir com sucesso a etapa de cadastro a tela será apresentada. clique no botão “acessar agora”.",
        "img1":img4,
        "img2":img5,
        "img3":img6,
        "img4":img7,
        "img5":img8,
        "img6":img9,
        "alt1":"Imagem mostraonde digitar cpf e data de nacimento.",
        "alt2":"Imagem mostrat onde clicalr para alterar apciente",
        "alt3":"Imagem mostra onde digitar o emial",
        "alt4":"Imagem mostra onde preecher o nome da mãe",
        "alt5":"Imagem mostra como criar senha",
        "alt6":"Imagem mostra onde clicar quando tiver tudo preenchido."
      
    },
]; 

export const Info3:TipoInfo3[]= [
    {"id":1,"title":'COMO ACESSAR SUA CONTA',
        "text1":"Após ter realizado o cadastro, para acessar a conta do paciente, digite o cpf e senha e clique em acessar.",
        "img1":img1,
         "alt1":"Imagem mostra como digitar o cpf para fazer o acesso.",
        
    },
]; 

export const Info4:TipoInfo1[]= [
    {"id":1,"title":'ABRINDO UMA TELE CONSULTA',
        "text1":"Após ter realizado o cadastro, para acessar a conta do paciente, digite o cpf e senha e clique em acessar.",
        "text2":"Ao abrir o menu todas as opções do aplicativo serão listadas. Para entrar na teleconsulta, no menu, clique na opção teleconsulta conforme imagem ao lado",
        "img1":img10,
        "img2":img11,
        "alt1":"Imagem mostra como fazer o primeiro acesso",
        "alt2":"Imagem mostra o menu de todas opções lstadas.",
    },
]; 

export const Info5:TipoInfo1[]= [
    {"id":1,"title":'TERMO DE CONSENTIMENTO',
        "text1":"Leia o termo e mais abaixo clique na caixa de seleção “eu estou ciente dos termos acima” e clique no botão aceito. caso o paciente clique no botão não aceito a teleconsulta não será aberta. É possível visualizar o termo e aceitá-lo ao clicar novamente na agenda de teleconsulta.",
        "text2":"Após aceitar o termo uma mensagem será exibida confirmando a ação:",
        "img1":img12,
        "img2":img13,
        "alt1":"Imagem mostra o termo para ser lido.",
        "alt2":"Imagem mostra a mensagem de confirmação.",
    },
]; 

export const Info6:TipoInfo1[]= [
    {"id":1,"title":'ENTRANDO NA TELECONSULTA',
        "text1":"A agenda será aberta na tela. Clique no botão azul entrar na teleconsulta.",
        "text2":"Caso você tenha mais de um navegador instalado, selecione o google chrome:",
        "img1":img14,
        "img2":img15,
        "alt1":"Imagem mostra A genda aberta na tela.",
        "alt2":"Imagem de como acessar o google chrome.",
    },
]; 

export const Info7:TipoInfo1[]= [
    {"id":1,"title":'HABILITANDO O MICROFONE',
        "text1":"Na sequência, um teste de áudio é exibido; fale algumas palavras ao microfone e clique em sim se conseguir escutar o som.",
        "text2":"Aguarde o teste de áudio e clique em sim:(botão verde)...",
        "img1":img16,
        "img2":img17,
        "alt1":"Imagem mostra teste d eaudio.",
        "alt2":"Imagem mostra botão verde a ser clicado.",
    },
]; 

export const Info8:TipoInfo4[]= [
    {"id":1,"title":'HABILITANDO A CÂMERA',
        "text1":"Ao entrar na sala de teleconsulta você precisa habilitar a câmera. Para habilitar a câmera, clique no ícone ao lado:",
        "text2":"O navegador irá solicitar acesso à câmera. clique em permitir, para habilitar a câmera do seu celular.",
        "text3":"A imagem da câmera será exibida. confirme clicando em iniciar compartilhamento.",
        "text4":"Pronto! com o paciente e médico conectados, a consulta será realizada.",
        "img1":img18,
        "img2":img19,
        "img3":img20,
        "img4":img21,
        "alt1":"Imagem mostra que deve habilitar a camera.",
        "alt2":"Imagem mostra navegador pedindo acesso a camera.",
        "alt3":"Imagem mostra de camera sendo exibida.",
        "alt4":"Imagem mostra paciente conectado.",
    },
]; 