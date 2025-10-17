import styled from 'styled-components'

type BotaoProps = {
  principal?: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '24px'};
`

const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: #fff;

  span {
    text-decoration: line-through;
  }
`

function Teste() {
  return (
    <div>
      <Botao principal>Enviar</Botao> <br /> <br />
      <Botao fontSize="10px">Cancelar</Botao> <br /> <br />
      <BotaoPerigo as="a">
        <span>Não clique aqui</span>
      </BotaoPerigo>
    </div>
  )
}

export default Teste
