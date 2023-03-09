import { IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import {
    peopleOutline, accessibilityOutline, cashOutline, desktopOutline, shirtOutline, paperPlaneOutline, cart
} from 'ionicons/icons'

const MenuMain: React.FC = () => {
    return (
        <IonMenu side="start" contentId="main" type="overlay">
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>Menú inicio</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonMenuToggle>
                        <IonItem routerLink='/personas'>
                            <IonIcon icon={peopleOutline} slot="start" />
                            <IonLabel>Personas</IonLabel>
                        </IonItem>
                    </IonMenuToggle>

                </IonList>
            </IonContent>
        </IonMenu>
    )
}
export default MenuMain;