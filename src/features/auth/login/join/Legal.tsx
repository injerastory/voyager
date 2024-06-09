import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonItem,
  IonList,
  IonNavLink,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useAppSelector } from "../../../../store";
import Markdown from "../../../shared/markdown/Markdown";
import Question from "./Question";
import Join from "./Join";
import { useInterceptHrefWithInAppBrowserIfNeeded } from "../../../shared/InAppExternalLink";
import { VOYAGER_PRIVACY, VOYAGER_TERMS } from "../../../../helpers/voyager";
import AppHeader from "../../../shared/AppHeader";

export default function Legal() {
  const { url, site } = useAppSelector((state) => state.join);
  const interceptHrefWithInAppBrowserIfNeeded =
    useInterceptHrefWithInAppBrowserIfNeeded();

  return (
    <>
      <AppHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Privacy &amp; Terms</IonTitle>
          <IonButtons slot="end">
            <IonNavLink
              component={() => {
                if (
                  site?.site_view.local_site.application_question &&
                  site?.site_view.local_site.registration_mode ===
                    "RequireApplication"
                )
                  return <Question />;

                return <Join />;
              }}
            >
              <IonButton strong>I Agree</IonButton>
            </IonNavLink>
          </IonButtons>
        </IonToolbar>
      </AppHeader>
      <IonContent>
        <AppHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Privacy &amp; Terms</IonTitle>
          </IonToolbar>
        </AppHeader>

        <p className="ion-padding">
          Take a moment to review and agree to
          the App policies as well as your server&apos;s policies.
        </p>

        <IonList inset>
          <IonItem
            href={VOYAGER_PRIVACY}
            target="_blank"
            rel="noopener noreferrer"
            onClick={interceptHrefWithInAppBrowserIfNeeded(VOYAGER_PRIVACY)}
          >
            Privacy Policy
          </IonItem>
          <IonItem
            href={VOYAGER_TERMS}
            target="_blank"
            rel="noopener noreferrer"
            onClick={interceptHrefWithInAppBrowserIfNeeded(VOYAGER_TERMS)}
          >
            Terms of Use
          </IonItem>
        </IonList>

        <p className="ion-padding">
          The server {url} has the following legal information below:
        </p>

        <IonList inset className="ion-padding">
          {site?.site_view.local_site.legal_information?.trim() ? (
            <Markdown
              className="collapse-md-margins"
              id={`site-legal-${site?.site_view.site.actor_id}`}
            >
              {site.site_view.local_site.legal_information}
            </Markdown>
          ) : (
            <IonText color="medium">
              <i>This server ({url}) does not have any terms set up.</i>
            </IonText>
          )}
        </IonList>
      </IonContent>
    </>
  );
}
