import React, { useState, useEffect } from "react";
import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonFooter,
  IonModal,
  IonSearchbar,
} from "@ionic/react";

export const SEARCH = [
  {
    id: "s1",
    title: "Business",
    detail:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    page: "/search-business",
  },
  {
    id: "s2",
    title: "Computing",
    detail:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    page: "/search-computing",
  },
  {
    id: "s3",
    title: "Connections",
    detail:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    page: "/search-connections",
  },
  {
    id: "s4",
    title: "Construction",
    detail:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    page: "/search-construction",
  },
];

export const Search: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    SEARCH.filter(item => item.id === searchText)
  }, [searchText]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Search</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonSearchbar
            value={searchText}
            onIonChange={(e) => setSearchText(e.detail.value!)}
          ></IonSearchbar>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            {SEARCH.map((search) => (
              <IonCol
                size="12"
                size-xs="12"
                size-sm="6"
                size-md="4"
                size-lg="4"
                key={search.id}
              >
                <IonCard>
                    <IonCardTitle>{search.title}</IonCardTitle>
                    <IonCardSubtitle>Sector</IonCardSubtitle>
                </IonCard>
              </IonCol>
            ))}
            <IonCol className="ion-text-center">
              <IonModal isOpen={showModal} className="my-custom-class">
                <p>This is modal content</p>
                <IonButton
                  color="secondary"
                  onClick={() => setShowModal(false)}
                >
                  Close Modal
                </IonButton>
              </IonModal>
              <IonButton color="secondary" onClick={() => setShowModal(true)}>
                Information
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Search;