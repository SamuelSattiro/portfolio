import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre</Titulo>
    <Paragrafo tipo="principal">
      Lorem iParagrafosum dolor sit amet consectetur, adipisicing elit.
      Quibusdam doloribus cumque, cupiditate voluptatem ex aperiam
      exercitationem necessitatibus unde voluptate blanditiis aliquid pariatur
      eligendi. mollitia sed dolore, adipisci quasi quis!
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=samuelsattiro&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=samuelsattiro&layout=compact&langs_count=6&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
