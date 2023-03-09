import { IonButton } from '@ionic/react';
import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <>
      <div className="container">
        {/* <strong>Ready to create an app?</strong> */}
        <IonButton expand="block" routerLink='./Login'>Block Button</IonButton>
        {/* <p>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p> */}
      </div>
      
    </>
  );
};

export default ExploreContainer;
