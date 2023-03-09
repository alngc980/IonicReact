import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonFab, IonFabButton, IonFabList, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonMenuButton, IonModal, IonPage, IonRow, IonSearchbar, IonText, IonTitle, IonToolbar, useIonAlert } from '@ionic/react';
import axios from 'axios';
import { NONAME } from 'dns';
import { add, newspaper, search, searchOutline } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Personas: React.FC = () => {
    const [modalCrud, setModalCrud] = useState<boolean>(false);
    const [operacionCrud, setOperacionCrud] = useState(0);

    const [txtBuscar, setTxtBuscar] = useState<string>("");
    const [RutaConsulta, SetRuta] = useState<string>("");

    const [nIdPers, setnIdPers] = useState("");
    const [cDni, setcDni] = useState<string>("");
    const [cNombres, setcNombres] = useState<string>("");
    const [cApellidos, setcApellidos] = useState<string>("");
    const [cDireccion, setcDireccion] = useState<string>("");
    const [cTelefono, setcTelefono] = useState<string>("");
    const [cCorreo, setcCorreo] = useState<string>("");
    const [bEstado, setbEstado] = useState<string>("");

    const [mensaje, setMensaje] = useState<string>("");
    const [mostrarAlerta, setMostrarAlerta] = useState<boolean>(false);
    const [presentAlert] = useIonAlert();

    const [searchText, setSearchText] = useState<string>("");
    var [datos, setDatos] = useState([]);

    var rutaServicio = "http://www.facilxd.com/prueba/Personas/ObtenerPersonasT.php";


    useEffect(() => {
        leerServicio();
        datos.filter((item: any) => item.cNombres === searchText)
    }, [searchText]);

    const leerServicio = () => {
        axios
            .get(rutaServicio)
            .then((result) => {
                // console.log(result.data);
                setDatos(result.data);
            })
    }


    const mostrarLista = () => {
        return (

            datos.filter((item: any) => {
                if (searchText == "") {
                    return item
                } else if ((item.cNombres).toLowerCase().includes(searchText.toLowerCase())) {
                    return item
                }
            }).map((item: any) => (
                <IonCol
                    key={item.nIdPers}
                >
                    <IonItem key={item.nIdPers} onClick={() => { setOperacionCrud(2); showUpdate(item) }}>
                        <IonLabel>
                            <h3>{item.cDni}</h3>
                            <p>{item.cNombres}</p>
                            <p>{item.cCorreo}</p>
                        </IonLabel>
                    </IonItem>
                </IonCol>
            ))


            // datos.map((item: any) =>
            //     <IonItem key={item.nIdPers} onClick={() => { setOperacionCrud(2); showUpdate(item) }}>
            //         <IonLabel>
            //             <h3>{item.cDni}</h3>
            //             <p>{item.cNombres}</p>
            //             <p>{item.cCorreo}</p>
            //         </IonLabel>
            //     </IonItem>
            // )
        )
    }

    // useEffect(() => {
    //     datos.filter((item: any) => item.cNombres === searchText)
    // }, [searchText]);


    const crud = () => {
        switch (operacionCrud) {
            case 1:
                categoriaInsert();
                break;
            case 2:
                categoriaUpdate();
                break;
        }
    }

    const showUpdate = (item: any) => {
        //console.log(item);
        setnIdPers(item.nIdPers);
        setcDni(item.cDni);
        setcNombres(item.cNombres);
        setcApellidos(item.cApellidos);
        setcDireccion(item.cDireccion);
        setcTelefono(item.cTelefono);
        setcCorreo(item.cCorreo);


        setModalCrud(true);
    }

    const categoriaInsert = async () => {
        const rutaServicio = "http://www.facilxd.com/prueba/Personas/InsertarPersonas.php";
        let formData = new FormData();
        formData.append("dni", cDni);
        formData.append("nombres", cNombres);
        formData.append("apellidos", cApellidos);
        formData.append("direccion", cDireccion);
        formData.append("telefono", cTelefono);
        formData.append("correo", cCorreo);
        const result = await axios({
            method: 'POST',
            url: rutaServicio,
            data: formData
        })
        console.log(result);
        setMensaje("Se ha registrado una nueva persona con código " + result.data)
        setMostrarAlerta(true);
        borrarCampos();
        leerServicio();
        setModalCrud(false);
    }
    const categoriaUpdate = async () => {
        const rutaServicio = "http://www.facilxd.com/prueba/Personas/UpdatePersonas.php";
        let formData = new FormData();
        formData.append("id", nIdPers);
        formData.append("dni", cDni);
        formData.append("nombres", cNombres);
        formData.append("apellidos", cApellidos);
        formData.append("direccion", cDireccion);
        formData.append("telefono", cTelefono);
        formData.append("correo", cCorreo);
        await axios({
            method: 'POST',
            url: rutaServicio,
            data: formData
        })
        //console.log(result);
        setMensaje("Se ha actualizado la categoría con código " + nIdPers)
        setMostrarAlerta(true);
        borrarCampos();
        leerServicio();
        setModalCrud(false);
    }

    const borrarCampos = () => {
        setcDni("");
        setcNombres("");
        setcApellidos("");
        setcDireccion("");
        setcTelefono("");
        setcCorreo("");
    }

    const categoriaDelete = () => {
        presentAlert({
            header: "Confirmar eliminar",
            buttons: [
                {
                    text: "Cancelar",
                    role: "cancel",
                    handler: () => { console.log("Cancelando"); }
                }, {
                    text: "Eliminar",
                    role: "confirm",
                    handler: () => { categoriaDeleteFinish(); }
                }
            ],
            onDidDismiss: (event: CustomEvent) => console.log(`Cerrado con role: ${event.detail.role}`)
        })
    }

    const categoriaDeleteFinish = async () => {
        const rutaServicio = "http://www.facilxd.com/prueba/Personas/DeletePersonas.php";
        let formData = new FormData();
        formData.append("id", nIdPers);
        await axios({
            method: 'POST',
            url: rutaServicio,
            data: formData
        })
        setMensaje("Se ha eliminado la categoría con código " + nIdPers)
        setMostrarAlerta(true);
        borrarCampos();
        leerServicio();
        setModalCrud(false);
    }

    const dibujarModal = () => {
        return (
            <IonModal isOpen={modalCrud}>
                <IonToolbar color='primary'>
                    <IonTitle>
                        Registrar Persona
                    </IonTitle>
                </IonToolbar>
                <IonContent>

                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                <IonItem slot='none'>
                                    <IonLabel position="floating">ID</IonLabel>
                                    <IonInput type="text"
                                        value={nIdPers}
                                        onIonChange={(e) => setnIdPers(e.detail.value!)}
                                    ></IonInput>
                                </IonItem>
                                <IonItem>
                                    <IonLabel position="floating">DNI</IonLabel>
                                    <IonInput type="text"
                                        value={cDni}
                                        onIonChange={(e) => setcDni(e.detail.value!)}
                                    ></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="floating">NOMBRES</IonLabel>
                                    <IonInput type="text"
                                        value={cNombres}
                                        onIonChange={(e) => setcNombres(e.detail.value!)}
                                    ></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="floating">APELLIDOS</IonLabel>
                                    <IonInput type="text"
                                        value={cApellidos}
                                        onIonChange={(e) => setcApellidos(e.detail.value!)}
                                    ></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="floating">DIRECCION</IonLabel>
                                    <IonInput type="text"
                                        value={cDireccion}
                                        onIonChange={(e) => setcDireccion(e.detail.value!)}
                                    ></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="floating">TELEFONO</IonLabel>
                                    <IonInput type="text"
                                        value={cTelefono}
                                        onIonChange={(e) => setcTelefono(e.detail.value!)}
                                    ></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="floating">CORREO</IonLabel>
                                    <IonInput type="text"
                                        value={cCorreo}
                                        onIonChange={(e) => setcCorreo(e.detail.value!)}
                                    ></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>

                        <IonRow>
                            <IonCol className='btn-crud'>
                                <IonButton className='btn-crud2'
                                    onClick={() => crud()}
                                >
                                    {operacionCrud !== 1 ?
                                        "Actualizar" : "Guardar"}

                                </IonButton>

                                {operacionCrud !== 1 ?
                                    <IonButton className='btn-crud2' color="primary"
                                        onClick={() => categoriaDelete()}
                                    >Eliminar
                                    </IonButton> : null}

                            </IonCol>
                        </IonRow>

                    </IonGrid>


                </IonContent>
                <IonButton onClick={() => setModalCrud(false)}
                >
                    Cerrar
                </IonButton>
            </IonModal>
        )
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color='primary'>
                    {/* <IonTitle>
                        Listado de Personas
                    </IonTitle> */}
                    <IonButtons slot='start'>
                        <IonMenuButton></IonMenuButton>
                    </IonButtons>

                    <IonSearchbar
                        placeholder='Por Nombre'
                        value={searchText}
                        onIonChange={(e) => setSearchText(e.detail.value!)}
                        // mode="ios"
                        // searchIcon={null}
                    ></IonSearchbar>

                </IonToolbar>
            </IonHeader>
            <IonContent>

                {dibujarModal()}

                <IonFab vertical="bottom" horizontal="end" slot="fixed" >
                    <IonFabButton onClick={() => { setOperacionCrud(1); setModalCrud(true) }}>
                        <IonIcon icon={add}></IonIcon>
                    </IonFabButton>
                </IonFab>



                {/* <IonCard>
                    <IonItem>
                        <IonLabel>Buscar DNI:</IonLabel>
                        <IonInput type="text"
                            value={txtBuscar}
                            onIonChange={(e) => setTxtBuscar(e.detail.value!)}
                        ></IonInput>
                        <IonButton color="danger" onClick={mostrarLista}>
                            <IonIcon icon={search} no-border></IonIcon>
                        </IonButton>
                    </IonItem>
                </IonCard> */}


                <IonList id='Lista'>
                    {mostrarLista()}

                    {/* {datos.map((item: any) =>
                        <IonItem key={item.nIdPers} onClick={() => { setOperacionCrud(2); showUpdate(item) }}>
                            <IonLabel>
                                <h3>{item.cDni}</h3>
                                <p>{item.cNombres}</p>
                                <p>{item.cCorreo}</p>
                            </IonLabel>
                        </IonItem>
                    )} */}
                </IonList>

            </IonContent>



        </IonPage>
    )

}
export default Personas;