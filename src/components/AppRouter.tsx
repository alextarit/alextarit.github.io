import React, { FC, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Spinner from "./Ui/Spinner/Spinner";

const AppRouter: FC<any> = ({ Layout, ItemsList, Component404, ItemFull }) => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={Layout}>
          <Route index element={ItemsList}></Route>
          <Route path="*" element={Component404}></Route>
        </Route>
        <Route path="/items/:id" element={ItemFull}></Route>
      </Routes>
    </Suspense>
  );
};

export default AppRouter;