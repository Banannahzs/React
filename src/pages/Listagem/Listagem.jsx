import { Link } from "react-router-dom";
import Cartao from "../../components/Cartao/Cartao";
import { ContainerListagem , TituloListagem } from "./style"

const dados = [
    {
        'titulo': 'Gato',
        'letra': 'g'
    },
    {
        'titulo': 'Peixinho',
        'letra': 'P'
    },
    {
        'titulo': 'Coelho',
        'letra': 'c'
    },
    {
        'titulo': 'Ratinho',
        'letra': 'r'
    },
    {
        'titulo': 'Doguinho',
        'letra': 'd'
    }
]

const elementos = dados.map ((el,i) => (
    <Cartao
        key={i}
        titulo={el.titulo}
        letra={el.letra}
    />
))

const Listagem = () => (
    <>
    <TituloListagem>
        Listagem de elementos
    </TituloListagem>
    <ContainerListagem>
        {elementos}
    </ContainerListagem>
    <Link to='/'>Voltar ao início</Link>
    </>
);

export default Listagem;