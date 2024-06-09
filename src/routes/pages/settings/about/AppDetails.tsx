import { styled } from "@linaria/react";

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 1.2rem;
  margin: 2rem 0 3rem;

  img {
    width: 70px;
    height: 70px;
    border-radius: 1rem;
  }

  aside {
    font-size: 0.9rem;
    margin-top: 0.25rem;
    color: var(--ion-color-medium);
  }
`;

export default function AppDetails() {
  return (
    <AppContainer>
      <img src="/logo.png" alt="" />
      <div>
        Injerastory
        <aside>a fork of <a
          href="https://github.com/injerastory/voyager"
          target="_blank"
          rel="noopener noreferrer"
        >
              voyager
            </a></aside>
      </div>
    </AppContainer>
  );
}
