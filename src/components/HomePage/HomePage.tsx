import { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY } from "../../helpers/helpers";
import { Typography, List } from "@mui/material";
import Article from "../Article/Article";
import { ArticleObj } from "../../helpers/interfaces";

const HomePage = () => {
  const [todaysArticles, setTodaysArticles] = useState([]);
  // useEffect === useFootgun
  useEffect(() => {
    // 2022-10-25, rrrr-mm-dd
    // W zmiennej date zapisz wczorajszą datę (24.10.2022), skorzystaj z obiektu Date który jest wbudowany w js
    // turnary operator
    // const date = ...
    // console.log(123);
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

    axios
      .get(
        `https://newsapi.org/v2/everything?q=world&from=${date}&language=en&sortBy=popularity&apiKey=${API_KEY}`
      )
      .then((response) => {
        setTodaysArticles(response.data.articles);
      })
      .catch((err) => console.error(err.message));
    // CLEANUP FN, wykonuje sie po odmontowaniu sie komponentu
    // return () => {};
  }, []); // LISTA DEPENDENCJI, nie wpisuj do listy dependencji stanu który aktulizujesz w środku useEffect'a

  // montowanie = wysietlenie
  // odmontowanie = znikniecie
  // zmiane wartosci (zmiana propsa w kompencie, zmiana stanu w komponencie, zmiana jakiejkolwiek wartosci)

  // 1. Nie podawac w ogole
  // 2. Podac pusta liste
  // 3. Podac zapelniona liste

  // Komponent Typography (MUI)
  // 1. Typography to komponent służący do wyświetlania tekstu
  // 2. Przyjmuje kilka ważnych atrybutów: variant="h2", component="h2", align="center", sx (atrybut wszystkich komponentów MUI, i tylko komponentów MUI) to atrybut do którego możemy przekazać obiekt i pisać w nim CSS
  // p = padding, m = margin, mt = marginTop, mb = marginBottom, mx = margin w osi X (marginLeft + marginRight), my = margin w osi Y (marginTop + marginBottom)
  // <Button
  //   variant="outlined"
  //   component="button"
  //   align="center"
  //   sx={{ display: "block", mx: "auto" }}
  // >12332112331</Button>;

  // Komponent List (MUI) = <ul> z HTML'a przystosowany tak, żeby łatwiej się go stylowało

  return (
    <>
      <Typography
        variant="h2"
        align="center"
        sx={{ fontSize: "2rem", my: ".8rem" }}
      >
        Today's hottest news:
      </Typography>
      <List sx={{ width: "100%", alignContent: "center" }}>
        {todaysArticles.length !== 0 &&
          todaysArticles.map((article: ArticleObj) => {
            return <Article art={article} key={article.title} />;
          })}
      </List>
    </>
  );
};

export default HomePage;

// Ściąganie newsów z API oraz ich wyświetlenie
// useEffect
// axios

// Praca z API w React
// fetch, axios, React Query?
