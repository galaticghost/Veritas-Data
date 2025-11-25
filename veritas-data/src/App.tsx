import Card from './components/Card.tsx';
import './App.css';

function App() {
  return (
    <>
      <main className='main'>
        <Card datatype='Localização'>Pedimos acesso à sua localização para oferecer uma experiência mais precisa e personalizada. Com esses dados, conseguimos identificar sua região,
          ajustar informações relevantes para sua área e melhorar a precisão dos serviços exibidos.
          Não compartilhamos sua localização com terceiros e você pode revogar essa permissão a qualquer momento.
        </Card>
        <Card datatype='Voz'>Pedimos acesso à sua voz para permitir recursos que dependem de áudio, como comandos por voz,
          identificação rápida do usuário e melhoria na acessibilidade.
          Esses dados ajudam nosso sistema a entender melhor suas solicitações e oferecer uma experiência mais natural e eficiente.
          Sua voz não é compartilhada com terceiros e só é utilizada para as finalidades claramente informadas.
          Você pode desativar essa permissão a qualquer momento.
        </Card>
      </main>
    </>
  )
}

export default App;
