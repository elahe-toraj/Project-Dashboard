import React from "react";
import Content from "../../components/ContentTop/Content/Content";
import TodoApp from "../../components/todo/TodoApp";

const Budget = () => {
  return (
    <Content title="کار های روزانه">
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <TodoApp />
      </div>
    </Content>
  );
};

export default Budget;
