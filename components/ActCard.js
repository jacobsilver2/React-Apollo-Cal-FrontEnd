import React from "react";
import Link from "next/link";
import Title from "./styles/Title";
import ActStyles from "./styles/ItemStyles";
import { Spring } from "react-spring/renderprops";

const ActCard = ({ act, view }) => {
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {props => (
        <div style={props}>
          <ActStyles>
            <Title>
              <Link href={{ pathname: "/act", query: { id: act.id } }}>
                <a>{act.name}</a>
              </Link>
            </Title>
            {view === "grid" && act.image && (
              <img src={act.image} alt={act.name} />
            )}
            <div className="buttonList">
              <Link href={{ pathname: "updateAct", query: { id: act.id } }}>
                <a>Edit ✏️</a>
              </Link>
              {/* <DeleteAct id={act.id}>Delete This Item</DeleteAct> */}
            </div>
          </ActStyles>
        </div>
      )}
    </Spring>
  );
};

export default ActCard;

