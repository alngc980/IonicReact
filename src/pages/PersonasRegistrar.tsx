import { IonButton, IonButtons, IonCol, IonContent, IonFab, IonFabButton, IonFabList, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import axios from 'axios';
import { add, personCircle, returnDownBackOutline, saveOutline, searchOutline } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';

const PersonasRegistrar: React.FC = () => {
    const [usuario, setUsuario] = useState<string>("");

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color='primary'>
                    <IonTitle>
                        Registrar Persona
                    </IonTitle>
                    <IonButtons slot='start'>
                        <IonMenuButton></IonMenuButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>


                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating">DNI</IonLabel>
                                <IonInput type="text"
                                // value={usuario}
                                // onIonChange={(e) => setUsuario(e.detail.value!)}
                                ></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating">NOMBRES</IonLabel>
                                <IonInput type="text"
                                // value={clave}
                                // onIonChange={(e) => setClave(e.detail.value!)}
                                ></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating">APELLIDOS</IonLabel>
                                <IonInput type="text"
                                // value={clave}
                                // onIonChange={(e) => setClave(e.detail.value!)}
                                ></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating">DIRECCION</IonLabel>
                                <IonInput type="text"
                                // value={clave}
                                // onIonChange={(e) => setClave(e.detail.value!)}
                                ></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating">TELEFONO</IonLabel>
                                <IonInput type="text"
                                // value={clave}
                                // onIonChange={(e) => setClave(e.detail.value!)}
                                ></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating">CORREO</IonLabel>
                                <IonInput type="text"
                                // value={clave}
                                // onIonChange={(e) => setClave(e.detail.value!)}
                                ></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                </IonGrid>



            </IonContent>
            <IonFab vertical="bottom" horizontal="start" slot="fixed">
                <IonFabButton color="danger" routerLink='./personas'>
                    <IonIcon icon={returnDownBackOutline}></IonIcon>
                </IonFabButton>
            </IonFab>
            <IonFab vertical="bottom" horizontal="end" slot="fixed">
                <IonFabButton color="secondary" //onClick={IniciarSesion}
                >
                    <IonIcon icon={saveOutline}></IonIcon>
                </IonFabButton>
            </IonFab>
        </IonPage>
    )

}
export default PersonasRegistrar;