import Header from '../components/Header'
import Pesquisa from '../components/Pesquisa'
import UltimosLancamentos from '../components/UltimosLancamentos'
import AppContainer from '../components/AppContainer'

const Home = () => {
  return (
    <AppContainer>
      <Header />
      <Pesquisa />
      <UltimosLancamentos />
    </AppContainer>
  );
}

export default Home