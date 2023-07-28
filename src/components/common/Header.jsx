import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          borderBottom: "1px solid powderblue",
          padding: "10px",
          textAlign: "center",
        }}
      >
        리덕스로 만든 투두리스트
      </div>
      <button onClick={() => navigate("/write")}>추가하기</button>
    </>
  );
};

export default Header;
