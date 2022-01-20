import React from "react";

import { useRecoilState } from "recoil";
import { filterAtom } from "../state/atom";

export default function Filter() {
  const [filter, setFilter] = useRecoilState(filterAtom);

  const clickEvent = (selected) => {
    if (filter === "all") {
      selected === "completed"
        ? setFilter("uncompleted")
        : setFilter("completed");
    } else if (filter === "completed" && selected === "uncompleted") {
      setFilter("all");
    } else if (filter === "uncompleted" && selected === "completed") {
      setFilter("all");
    }
  };

  return (
    <div className="filters">
      <div className="filter-item">
        <input
          name="completed-list"
          type="checkbox"
          className="filter-checkbox"
          onClick={() => clickEvent("completed")}
          defaultChecked={
            filter === "all" || filter === "completed" ? true : false
          }
        />
        <span>Completed</span>
      </div>
      <div className="filter-item">
        <input
          name="uncompleted-list"
          type="checkbox"
          className="filter-checkbox"
          onClick={() => clickEvent("uncompleted")}
          defaultChecked={
            filter === "all" || filter === "uncompleted" ? true : false
          }
        />
        <span>Uncompleted</span>
      </div>
    </div>
  );
}
