import { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY } from "../../helpers/helpers";
import SearchForm from "../SearchForm/SearchForm";
import { List } from "@mui/material";
import { ArticleObj } from "../../helpers/interfaces";
import Article from "../Article/Article";

const SearchPage = () => {
  const [keyword, setKeyword] = useState("");
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (keyword !== "") {
      axios
        .get(
          `https://newsapi.org/v2/everything?q=${keyword}&from=2022-11-14&language=en&sortBy=popularity&apiKey=${API_KEY}`
        )
        .then((data) => {
          setArticles(data.data.articles);
          console.log("dziala");
        })
        .catch((err) => console.error(err.message));
    }
  }, [keyword]);

  return (
    <>
      <SearchForm setKeyword={setKeyword} />
      <List
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          alignContent: "center",
        }}
      >
        {articles.length > 0 &&
          articles.map((art: ArticleObj) => {
            return <Article art={art} key={art.title} />;
          })}
      </List>
    </>
  );
};

export default SearchPage;

// STATE LIFTING - wnoszenie stanu do komponentu wyżej / przekazywanie informacji z komponentu dziecka do rodzica
// 1. Musimy mieć jakiś stan w komponencie rodzicu
// 2. Musimy przekazać funkcję aktualizującą stan do komponentu dziecka (props/context/redux/czymkolwiek czy sie da). W przypadku propsów pamiętaj o interfejsie (typ: (value: *tu typ zmiennej stanowej* => void)) i o odebraniu funkcji w child component w parametrze.
// 3. W środku child component wywołujemy funkcję (pkt 2), funkcja ta zawsze (!) będzie wiedzieć który stan w którym komponencie ma zaktualizować. Zmienna stanowa i setter są zawsze ze sobą związane, niezależnie gdzie się znajdą.

// 3. W List (u mnie linia 27) stwórz renderowanie warunkowe które będzie zależne od tego czy stan articles ma długość większą niż 0. Jeżeli warunek jest prawdziwy, wywołaj (cały czas w JSX'ie) metodę .map() na stanie articles.
// 4. .map() :
// - do tego mapa będą wpadać pojedyńcze artykuły z api, więc parametrem będzie 1 artykuł (nazwij jak chcesz)
// - z mapa zwracaj komponent Article, przekaż mu artykuł z parametru mapa, klucz według uznania, musi być stringiem i musi być unikalny
// - nie zapomnij że w mapie potrzebny jest return!
