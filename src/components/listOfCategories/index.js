import React, { useEffect, useState } from "react";
import { Category } from "../category";
import { List, Item } from "./styles";
//import { categories as mockCategories } from "../../../api/db.json";

function useCategoriesData() {
  const [categories, setCategories] = useState(Array(5).fill({}));
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://petgram-server.frasser.vercel.app/categories")
      .then((res) => res.json())
      .then((response) => {
        setCategories(response);
        setLoading(false);
      });
  }, []);
  return { categories, loading };
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData();
  const [showFixed, setShowFixed] = useState(false);

  useEffect(
    function () {
      const onScroll = (e) => {
        const newShowFixed = window.scrollY > 200;
        showFixed !== newShowFixed && setShowFixed(newShowFixed);
      };

      document.addEventListener("scroll", onScroll);

      return () => document.removeEventListener("scroll", onScroll);
    },
    [showFixed]
  );

  const renderList = (fixed, loading) => (
    <List fixed={fixed}>
      {loading
        ? "cargando..."
        : categories.map((category, i) => {
            return (
              <Item key={category.id || i}>
                <Category
                  {...category}
                  path={`/pet/${category.id}`}
                  loading="true"
                />
              </Item>
            );
          })}
    </List>
  );

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  );
};
