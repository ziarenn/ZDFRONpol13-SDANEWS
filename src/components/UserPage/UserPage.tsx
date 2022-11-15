import React from "react";
import { NavbarProps as UserPageProps } from "../../helpers/interfaces";

const UserPage = () => {
  // if(loggedIn) {
  //     return <h1>123321</h1>
  // } else {
  //     return <div>Something went wrong!</div>
  // }

  return <></>;
};

export default UserPage;

// 1. Stwórz Route w App.tsx, path="/user", element UserPage (czyli ten komponent)
// 2. Przekaż propsem z App.tsx do UserPage stan loggedIn, otypuj odpowiednio UserPage
// JSX:
// 3. Stwórz react fragment, w środku od razu renderowanie warunkowe
// Jeżeli loggedIn jest prawdziwe i auth.currentUser jest prawdziwe wyrenderuj:
// 4. React fragment:
// W RF:
// 5. Typography variant h2, align center, w sx'ach: fontSize 2rem, my 1rem, borderBottom 1px solid #1976d2, pb .5rem. TextContent: Your profile
// 6. Typography variant h5, align center, w sx'ach: fontSize 1rem, my 1rem, fontFamily Roboto, mx auto. TextContent: email aktualnie zalogowanego użytkownika (jest dostępny gdzieś w obiekcie auth)
// 7. Button (MUI) variant outlined, w sx'ach: display block, mx auto, my 1rem. Po kliknięciu na button, wywołaj funkcję signOut (firebase/auth, przyjmuje jako argument obiekt auth). TextContent: Log out.

// {x && y.z && <h1>123</h1>}