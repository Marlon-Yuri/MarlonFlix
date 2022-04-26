import React from "react";
import Sherek from './assets/shrek.png'
import Homiranha from './assets/homiranha.png'
import styled from "styled-components";
import {Link} from 'react-router-dom'

const Img = styled.img`
width:17vw;
transition:0.5s ease-in-out;
cursor:pointer;
&:hover{
    -webkit-transform: scale(1.1);
	-ms-transform: scale(1.1);
	transform: scale(1.1);
    box-shadow: 0px 1.5px 1.5px 1.5px #8B0000;
}
`
const Container = styled.section`
display:flex;
flex-wrap: wrap;
background-color:black;
justify-content:center;

`
const InputSrc = styled.input`
margin-left:1%;
width:15vw;
height:4vh;
background-color: #2C2C2C;
border-radius: 4px;
border:none;
color: white;
font-size:1.2vw;
padding:2px;


// background-position: 10px;
// background-size: 20px;
// background-repeat:no-repeat;


position: absolute;
top: 6.5%;
left: 67.3%;
transition: 0.3s ease all;
    &:focus{
        width: 15vw;
        padding-left:7px;
    } 

`
const Cards = styled.div`
height: 80vh;
width:23vw;
margin:18px;
padding: 8px 0;
display:flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
color:white;
border-radius:10px;
-webkit-border-radius:10px;
-moz-border-radius:10px;

`
const BoxWrap = styled.div`
display:flex;
justify-content:center;
flex-wrap:wrap;
width:95vw;
`
const Overview = styled.p`
font-size:1vw;
width:22vw;
overflow: hidden;
white-space: nowrap;  
text-overflow: ellipsis;
`
const Title = styled.h1`
color:white;
font-size:4.2vw;
font-family: 'Fjalla One', sans-serif;
`
const MovieTitle = styled.h3`
color:white;
font-family: 'Fjalla One', sans-serif;
`
export default class Todos extends React.Component {
    state = {
        filmes:[
          {
          id:1,
          title:"The Godfather",
          overview:"Uma família mafiosa luta para estabelecer sua supremacia nos Estados Unidos depois da Segunda Guerra Mundial. Uma tentativa de assassinato deixa o chefão Vito Corleone incapacitado e força os filhos Michael e Sonny a assumir os negócios.",
          rank:"5/5",
          poster:'https://i.pinimg.com/222x/d9/c5/26/d9c5266a73903d8a3573e22cff882fe1.jpg'
          },
          {id:2,
          title:"Clube da Luta",
          overview:"Um homem deprimido que sofre de insônia conhece um estranho vendedor chamado Tyler Durden e se vê morando em uma casa suja depois que seu perfeito apartamento é destruído. A dupla forma um clube com regras rígidas onde homens lutam. A parceria perfeita é comprometida quando uma mulher, Marla, atrai a atenção de Tyler.",
          rank:"4/5",
          poster:'https://i.pinimg.com/550x/86/55/80/865580314a24d809e6fb0f12ce72e738.jpg'
          },
          {id:3,
          title:"Gremlins",
          overview:"Um inventor está à procura de um presente especial para seu filho, e encontra algo interessante em uma loja em Chinatown. O lojista fica relutante em lhe vender a pequena criatura, mas acaba aceitando, sob a condição de que ela nunca seja exposta à luz, água ou alimentada após a meia-noite. Naturalmente que todas essas regras são desobedecidas, o que resulta em um bando de monstrinhos descontrolados que decidem destruir a cidade bem na véspera do Natal.",
          rank:"3/5",
          poster:'https://3.bp.blogspot.com/-38vZFNwMAcw/UqTRY7txbXI/AAAAAAABKwY/Bq9U3YKrpGc/s1600/Classic_Movie_Posters_by_Van_Orton_Design_2013_03.jpg'
          },
          {id:4,
          title:"Matrix",
          overview:"Um jovem programador é atormentado por estranhos pesadelos nos quais sempre está conectado por cabos a um imenso sistema de computadores do futuro. À medida que o sonho se repete, ele começa a levantar dúvidas sobre a realidade. E quando encontra os misteriosos Morpheus e Trinity, ele descobre que é vítima do Matrix, um sistema inteligente e artificial que manipula a mente das pessoas e cria a ilusão de um mundo real enquanto usa os cérebros e corpos dos indivíduos para produzir energia.",
          rank:"5/5",
          poster:'https://br.web.img2.acsta.net/medias/nmedia/18/91/08/82/20128877.JPG'
          },
          {id:5,
          title:"A Quiet Place",
          overview:"A família Abbott precisa enfrentar os terrores do mundo exterior enquanto luta pela sobrevivência em silêncio. Forçados a se aventurar no desconhecido, eles percebem que as criaturas que caçam pelo som não são as únicas ameaças no caminho da areia.",
          rank:"4,5/5",
          poster:'https://i.pinimg.com/736x/68/53/e0/6853e0f6b964000941fad7a1a608d0a4.jpg'
          },
          
          {id:6,
          title:"American Beauty",
          overview:"Lester Burham passa por uma crise de meia-idade, larga seu emprego e começa a agir de forma irresponsável. Quando conhece a amiga adolescente de sua filha, Lester sente uma atração imediata pela garota e decide que é hora de dar a volta por cima.",
          rank:"",
          poster:'https://i.pinimg.com/736x/7e/a8/21/7ea8214aa4ab0d3fda659ef14ddf261d.jpg'
          },  
          {
            id:7,
            title:"Django Livre",
            overview:"No sul dos Estados Unidos, o ex-escravo Django faz uma aliança inesperada com o caçador de recompensas Schultz para caçar os criminosos mais procurados do país e resgatar sua esposa de um fazendeiro que força seus escravos a participar de competições mortais.",
            rank:"5/5",
            poster: 'https://ucsfm.com.br/wp-content/uploads/2015/06/django.jpg'
            },
            {
            id:8,
            title:"O Iluminado",
            overview:"Jack Torrance se torna caseiro de inverno do isolado Hotel Overlook, nas montanhas do Colorado, na esperança de curar seu bloqueio de escritor. Ele se instala com a esposa Wendy e o filho Danny, que é atormentando por premonições. Jack não consegue escrever e as visões de Danny se tornam mais perturbadoras. O escritor descobre os segredos sombrios do hotel e começa a se transformar em um maníaco homicida, aterrorizando sua família.",
            rank:"5/5",
            poster: 'https://i.pinimg.com/originals/fd/d1/4b/fdd14bf67a6a9c32279520f4b7f8f2ba.png'
            },
          {id:9,
            title:"Kill-Bill",
            overview:"A ex-assassina conhecida apenas como A Noiva acorda de um coma de quatro anos decidida a se vingar de Bill, seu ex-amante e chefe, que tentou matá-la no dia do casamento. Ela está motivada a acertar as contas com cada uma das pessoas envolvidas com a perda da filha, da festa de casamento e dos quatro anos da sua vida. Na jornada, A Noiva é submetida a dores físicas agoniantes ao enfrentar a inescrupulosa gangue de Bill, o Esquadrão Assassino de Víboras Mortais.",
            rank:"",
            poster:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ42UW1dLC5Qnu3GOKTVmPUbqWo-l9zS3edSV61mQjBSGD22E6wcMJy-q2-_1PdqJNUKf8&usqp=CAU'
          }
        ],
        listafilter:[]
      }

componentDidMount(){
    this.setState({listafilter: this.state.filmes})
}

filtro = (e) => {
    const {filmes} = this.state;
    if(e.target.value === '') {
      this.setState({
        listafilter:filmes
      })
      return
    }
    const filmeconvert = filmes.filter((item) => {
      if(item.title.toLowerCase().includes(e.target.value.toLowerCase())){
        return true
      }
    })
    this.setState({
      listafilter:filmeconvert
    })
  }
 

    render() {
        return (
            <Container>

            <Title>Todos</Title>
            <InputSrc onChange={this.filterList} placeholder="🔍Pesquisar"/>
            <BoxWrap>
            {this.state.listafilter.map(item =>(
                <Cards>
                    <MovieTitle>{item.title}</MovieTitle>
                    <Img src={item.poster} alt=''/>
               <Overview>{item.overview} </Overview>
                </Cards>
            ))}
           </BoxWrap>
            </Container>
        )
    }
}