import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { personCircle } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import MenuMain from '../menu/Menumain';
import './Home.css';

const Home: React.FC = () => {

  return (
    // <MenuMain />
    <IonPage>
      <IonContent fullscreen>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
