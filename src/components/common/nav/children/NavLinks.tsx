import type { JSX } from "react";
import "../Nav.css";

type Page = {
  id: number,
  page: string
};

const placeholderPages: Page[] = [
  {id: 0, page: "Home"},
  {id: 1, page: "Placeholder"},
  {id: 2, page: "Options"},
  {id: 3, page: "Account"}
];

function Links() {
  return(
    <nav className="links">
      <DisplayLinks pages={placeholderPages}/>
    </nav>
  );
}

function DisplayLinks({pages}: {pages: Page[]}) {
  const pageListItems: JSX.Element[] = [];

  pages.forEach((page) => {
    pageListItems.push(
        <ListNavItem term={page.page} key={page.id}/>
    );
  })

  return(
    <ul>
      {pageListItems}
    </ul>
  )
}

function ListNavItem({term}: {term: string}) {
  return (
    <li>
      <a href="#">{term}</a>
    </li>
  )
}

export default Links;