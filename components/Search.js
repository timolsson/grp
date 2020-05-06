import style from "./Style/search.module.scss";
import Router from "next/router";
import { useRef, useEffect } from "react";

const Search = () => {
  const input = useRef();

  const makeNewSearch = (query) => {
    Router.router.push({
      pathname: "/",
      query: { ...Router.router.query, search: query },
    });
  };

  useEffect(() => {
    input.current.addEventListener("input", handleInputChange);

    return () => {
      input.current.removeEventListener("input", handleInputChange);
    };
  }, []);

  const handleInputChange = () => {
    makeNewSearch(input.current.value);
  };
  return (
    <div className={style.search}>
      <input placeholder="Search" ref={input} type="text" />
    </div>
  );
};

export default Search;
