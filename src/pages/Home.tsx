import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Bakeries } from "../components/Bakeries/Bakeries";
import { Footer } from "../components/Footer/Footer";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <div className="titleContainer">
            <IonTitle>
              <img
                className="image"
                src="./assets/images/logo-epadoca.png"
                alt="epadoca-logo"
              />
            </IonTitle>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="Main">
          <div className="Title">
            <h1>Nossos Parceiros:</h1>
          </div>
          <Bakeries />
        </div>
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default Home;
