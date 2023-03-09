import { IonAlert, IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonPage, IonRow, IonToolbar } from '@ionic/react';
import axios from 'axios';
import { colorFillOutline, personCircle } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import trama from './../images/trama.png'

const Login: React.FC = () => {
    const history = useHistory()
    const [usuario, setUsuario] = useState<string>("");
    const [clave, setClave] = useState<string>("");
    const [mensaje, setMensaje] = useState<string>("");
    const [mostrarAlerta, setMostrarAlerta] = useState<boolean>(false);



    return (
        <IonPage>
            {/* <IonHeader>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonBackButton defaultHref='inicio' text='Nosotros' />
                    </IonButtons>
                </IonToolbar>
            </IonHeader> */}
            <IonContent className='fondo'>
                {/* <div className='fondo'>
                    <IonImg src={trama}/>
                </div> */}
                
                <IonAlert
                    isOpen={mostrarAlerta}
                    onDidDismiss={() => setMostrarAlerta(false)}
                    header={"Iniciar sesión"}
                    message={mensaje}
                    buttons={["Cerrar"]}
                />

                {/* <div className='image'>
                    <IonImg src={fotoP}/>
                </div> */}

                <div className="wrapper">
                    <h1><b>Iniciar sesión</b></h1>
                    <IonGrid>
                        {/* <IonRow>
                            <IonCol>
                                <IonIcon style={{ fontSize: "70px", color: "#FFCC00" }}
                                    icon={personCircle} />
                            </IonCol>
                        </IonRow> */}
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="floating">Usuario</IonLabel>
                                    <IonInput type="text"
                                        value={usuario}
                                        onIonChange={(e) => setUsuario(e.detail.value!)}
                                    ></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="floating">Contraseña</IonLabel>
                                    <IonInput type="password"
                                        value={clave}
                                        onIonChange={(e) => setClave(e.detail.value!)}
                                    ></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow className='button'>
                            <IonCol>
                                <IonButton className='btn-login' expand="block"
                                    onClick={IniciarSesion}
                                >LOGIN</IonButton>
                            </IonCol>
                        </IonRow>
                        {/* <IonFooter>
                                <div className="footer">
                                    <div className='copyright'>
                                        Derechos reservados - pava
                                    </div>
                                </div>
                        </IonFooter> */}
                    </IonGrid>
                </div>
            </IonContent>
        </IonPage>
    )


    async function IniciarSesion() {
        if (!usuario) {
            setMensaje("Ingrese el nombre de usuario");
            setMostrarAlerta(true);
            return;
        }
        if (!clave || clave.length < 3) {
            setMensaje("La contraseña debe tener al menos 4 caracteres");
            setMostrarAlerta(true);
            return;
        }

        axios.get('http://www.facilxd.com/prueba/Usuarios/Login.php?usuario=' + usuario + '&clave=' + clave).then(resp => {
            // console.log(resp.data);

            if (resp.data === null) {
                setMensaje("Datos Incorrectos");
            } else {
                setMensaje("Bienvenido usuario " + resp.data['cUsuario']);
                history.push("/principal");
            }
            setMostrarAlerta(true);
        });

    }
}
export default Login;