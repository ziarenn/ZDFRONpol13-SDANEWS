import { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY } from "../../helpers/helpers";
const HomePage = () => {
  useEffect(() => {
    // 2022-10-25, rrrr-mm-dd
    // W zmiennej date zapisz wczorajszą datę (24.10.2022), skorzystaj z obiektu Date który jest wbudowany w js
    // turnary operator
    // const date = ...
    const today = new Date();
    const day =
      today.getDate() - 1 < 10
        ? `0${today.getDate() - 1}`
        : today.getDate() - 1;
    const month =
      today.getMonth() + 1 < 10
        ? `0${today.getMonth() + 1}`
        : today.getMonth() + 1;
    const year = today.getFullYear();
    const date = `${year}-${month}-${day}`;
    axios.get(
      `https://newsapi.org/v2/everything?q=world&from=${date}&language=en&sortBy=popularity&apiKey=${API_KEY}`
    );
    // 1. Stwórz stan todaysArticles (funckja aktualizujaca stan będzie sie nazywala setTodaysArticles), wartość początkowa: [] (pusta lista)
    // 2. Do axios.get dopisz thena, w którym wrzucisz zwrócone z API dane do stanu todaysArticles (dane o ktore nam chodzi to lista artykułow, jest ona zagnieżdzona na 2 poziome w responsie, najpierw wyloguj response i poszukaj)
    // 3. Dopisz catcha, w srodku console.log blad
    // 4. Zauważ różnice w działaniu axiosa i fetcha, zapisz tą różnice



  }, []); // LISTA DEPENDENCJI

  // montowanie = wysietlenie
  // odmontowanie = znikniecie
  // zmiane wartosci (zmiana propsa w kompencie, zmiana stanu w komponencie, zmiana jakiejkolwiek wartosci)

  // 1. Nie podawac w ogole
  // 2. Podac pusta liste
  // 3. Podac zapelniona liste

  return <div>HomePage</div>;
};

export default HomePage;

// Ściąganie newsów z API oraz ich wyświetlenie
// useEffect
// axios

// Praca z API w React
// fetch, axios, React Query?
