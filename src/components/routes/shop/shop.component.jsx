import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
// Redux
import { useDispatch } from "react-redux";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/cagetory.component";

import "./shop.styles.scss";
import { getCategoriesAndDocuments } from "../../../utils/firebase/firebase.utils";
import { setCategoriesMap } from "../../../store/categories/category.action";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      dispatch(setCategoriesMap(categoryMap));
    };
    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category></Category>} />
    </Routes>
  );
};

export default Shop;
