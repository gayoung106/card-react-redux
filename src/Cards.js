import React from "react";
import { NavLink } from "react-router-dom";
import { Items, Item, H1 } from "./styledComp";
import { useSelector } from "react-redux";

const Cards = () => {
  const contents = useSelector((state) => state.contents);

  return (
    <Items>
      {contents.map((content, idx) => {
        return (
          <NavLink
            key={idx}
            to={content.path}
            style={{ textDecoration: "none" }}
          >
            <Item
              bgImage={content.imagePath}
              hoverBgImage={content.hoverImagePath}
            >
              <H1>{content.title}</H1>
            </Item>
          </NavLink>
        );
      })}
    </Items>
  );
};

export default Cards;
