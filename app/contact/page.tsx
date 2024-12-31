import Contact from "@/components/Contact";
import React from "react";
import { Metadata } from "next";
export const metadata:Metadata ={
  title:'Contact Us'
}
const page = () => {
  return <Contact />;
};

export default page;
