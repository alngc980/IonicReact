import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Principal: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color='primary'>
                    <IonTitle>
                        Ventana Principal
                    </IonTitle>
                    <IonButtons slot='start'>
                        <IonMenuButton></IonMenuButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div className="wrapper">
                    <i className="bi bi-alarm icono-titulo"></i>
                    <h1>Bienvenido</h1>
                    {/* {mostrarLista()} */}
                </div>
            </IonContent>
        </IonPage>
    )
}
export default Principal;