"use client"

import { redirect } from "next/navigation";
import { useEffect } from "react";

const HomePage: React.FC = () => {
  useEffect(() => {
    redirect('shop')
  },[])
  return (

   <></>
  );
};

export default HomePage;
