import React from "react";
import { ArticleObj, ArticleProps } from "../../helpers/interfaces";

const Article: React.FC<ArticleProps> = ({ art }) => {
  return (
    <>
      <p>{art.url}</p>
      <p>{art.urlToImage}</p>
      <p>{art.title}</p>
    </>
  );
};

export default Article;
// rafce

// 1. Wyświetl komponent Article w HomePage
// 2. Stwórz plik interfaces.ts w folderze helpers, w tym pliku stwórz interface ArticleObj, w tym interfejsie umieść 3 własności: url, urlToImage, title, wszystkie 3 będą stringami. Do tego stwórz interface ArticleProps, będzie on rozszerzeniem ArticleObj z dodanym polem key (który będzie liczbą)
// 3. Przekaż jako props todaysArticles[0] do komponentu Article w HomePage
// 4. Odpowiednio otypuj i odbierz propsy w Article
// 5. Wyświetl url, urlToImage, title w równorzędnych tagach <p> w Article
