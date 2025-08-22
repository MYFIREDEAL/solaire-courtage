import ProgressBar from '../components/ProgressBar';
import Documents from '../components/Documents';
import Chat from '../components/Chat';

const steps = ['Étude', 'Urbanisme', 'Travaux', 'Mise en service'];

export default function Dashboard() {
  return (
    <div style={{padding:20}}>
      <h1>Tableau de bord</h1>
      <ProgressBar steps={steps} currentStep={2} />
      <section style={{marginTop:40}}>
        <Documents />
      </section>
      <section style={{marginTop:40}}>
        <Chat />
      </section>
    </div>
  );
}
