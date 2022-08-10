import React from "react";
import * as Fa from "react-icons/fa";
import * as Ai from "react-icons/ai";
import * as Io from "react-icons/io";

export const SidebarData = [
  {
    title: "Početna",
    path: "/",
    icon: <Ai.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Izvještaji",
    path: "/reports",
    icon: <Io.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Proizvodi",
    path: "/products",
    icon: <Fa.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "Tim",
    path: "/team",
    icon: <Io.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Poruke",
    path: "/messages",
    icon: <Fa.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  {
    title: "Podrška",
    path: "/support",
    icon: <Io.IoMdHelpCircle />,
    cName: "nav-text",
  },
];
