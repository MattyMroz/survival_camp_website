# Survival Camp Website

Ten projekt to aplikacja React dla strony internetowej Survival Camp na zaliczenie przedmiotu "Projektowanie Interfejsów Aplikacji WWW" na Politechnice Łódzkiej w roku akademickim 2023/2024 - semestr letni (2024L).

Projekt służył celom edukacyjnym i zaliczeniowym. Poniższe informacje dotyczą procesu tworzenia i wdrażania aplikacji.

## Autorzy
- Mateusz Mróz
- Michał Mycek
- Marcel Podlecki
- Bartłomiej Raj

## Opis Projektu
https://mattymroz.github.io/survival_camp_website/

- !TODO: Opis projektu

## Zakładanie Repozytorium na GitHub i Udostępnianie Współpracownikom

1. **Załóż konto GitHub**: Jeśli jeszcze nie masz konta, zarejestruj się na [GitHub](https://github.com/).
2. **Utwórz nowe repozytorium**:
    - Zaloguj się na swoje konto GitHub.
    - Kliknij przycisk "New" w prawym górnym rogu strony.
    - Wprowadź nazwę repozytorium, np. `survival_camp_website`.
    - Opcjonalnie dodaj opis repozytorium.
    - Wybierz opcję "Public" lub "Private" w zależności od preferencji. (My wybraliśmy "Public", by opublikować strone na GitHub Pages).
    - Kliknij przycisk "Create repository".

3. **Udostępnij repozytorium współpracownikom**:
    - Przejdź do strony repozytorium na GitHub.
    - Kliknij zakładkę "Settings".
    - W menu po lewej stronie wybierz "Collaborators".
    - Kliknij przycisk "Add people" i wprowadź nazwę użytkownika współpracownika.
    - Kliknij "Add ... to this repository".

5. **Skonfiguruj repozytorium lokalnie**:
    - Otwórz terminal i uruchom następujące polecenia, aby sklonować repozytorium:
    ```sh
    git clone https://github.com/<your-github-username>/survival_camp_website.git
    cd survival_camp_website
    ```

## Tworzenie Projektu React i Wdrażanie na GitHub Pages

- **Konto GitHub**
- **Git**: Pobierz i zainstaluj Git z [Git Download](https://git-scm.com/downloads)
- **Node.js**: Pobierz i zainstaluj Node.js z [Node.js Download](https://nodejs.org/en/download/)

## Tworzenie Projektu React

1. Otwórz terminal i uruchom następujące polecenia, aby utworzyć nowy projekt React:
    ```sh
    npx create-react-app survival_camp_website
    cd survival_camp_website
    ```

## Instalacja i Konfiguracja gh-pages

1. **Zainstaluj pakiet gh-pages:**
    ```sh
    npm install gh-pages --save-dev
    ```

2. **Dodaj pole `homepage` do `package.json`, aby wskazać URL Twojej strony GitHub Pages:**
    ```json
    "homepage": "https://<your-github-username>.github.io/survival_camp_website"
    ```

3. **Otwórz plik `package.json` i dodaj następujące skrypty:**
    ```json
    "scripts": {
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build"
    }
    ```

**Przykładowy plik package.json po modyfikacjach:**

    ```json
    {
    "name": "survival_camp_website",
    "version": "0.1.0",
    "private": true,
    "homepage": "https://<your-github-username>.github.io/survival_camp_website", !-- Add this line --!
    "dependencies": {
        "@testing-library/jest-dom": "^5.17.0",
        "@testing-library/react": "^13.4.0",
        "@testing-library/user-event": "^13.5.0",
        "react": "^18.3.1",
        "react-dom": "^18.3.1",
        "react-scripts": "5.0.1",
        "web-vitals": "^2.1.4"
    },
    "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test",
        "eject": "react-scripts eject",
        "predeploy": "npm run build", !-- Add this line --!
        "deploy": "gh-pages -d build" !-- Add this line --!
    },
    "eslintConfig": {
        "extends": [
        "react-app",
        "react-app/jest"
        ]
    },
    "browserslist": {
        "production": [
        ">0.2%",
        "not dead",
        "not op_mini all"
        ],
        "development": [
        "last 1 chrome version",
        "last 1 firefox version",
        "last 1 safari version"
        ]
    },
    "devDependencies": {
        "gh-pages": "^6.1.1"
    }
    }
    ```

4. **Wypchnij zmiany do zdalnego repozytorium:**
    ```sh
    git add .
    git commit -m "Add gh-pages deployment"
    git push origin main
    ```

5. **Wdrażanie aplikacji na GitHub Pages:**
    ```sh
    npm run deploy
    ```

<!-- 6. **Włącz GitHub Pages:**
    - Przejdź do zakładki "Settings" repozytorium.
    - W menu po lewej stronie wybierz "Pages".
    - W sekcji "Source" wybierz "main" branch i kliknij przycisk "Save". -->

## Dostęp do Wdrożonej Aplikacji

1. **Otwórz przeglądarkę internetową i przejdź do:**
    ```sh
    https://<your-github-username>.github.io/survival_camp_website
    ```
albo po prawej stronie w menu repozytorium na GitHubie kliknij "github-pages" i w sekcji "Deployments", a następnie kliknij w link do strony.

## Pobieranie i Uruchamianie Aplikacji Lokalnie

1. **Sklonuj repozytorium na swój lokalny komputer:**
    ```sh
    git clone https://github.com/MattyMroz/survival_camp_website.git
    cd survival_camp_website/survival_camp_website
    ```

2. **Zainstaluj wszystkie niezbędne zależności:**
    ```sh
    npm install
    npm install classnames
    npm install validator
    ```

3. **Uruchom aplikację w trybie deweloperskim:**
    ```sh
    npm start
    ```

4. **Automatycznie otworzy się nowe okno w przeglądarce z adresem:**
    ```sh
    http://localhost:3000
    ```
Aplikacja powinna być teraz uruchomiona lokalnie i dostępna pod podanym adresem.
