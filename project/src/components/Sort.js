import React from "react";

const Sort = (props) => {
  const compareChangeAscending = (a, b) => {
    if (a.change < b.change) {
      return -1;
    }
    if (a.change > b.change) {
      return 1;
    }
    return 0;
  };

  const compareChangeDescending = (a, b) => {
    if (a.change > b.change) {
      return -1;
    }
    if (a.change < b.change) {
      return 1;
    }
    return 0;
  };

  const comparePercentageChangeAscending = (a, b) => {
    if (a.changesPercentage < b.changesPercentage) {
      return -1;
    }
    if (a.changesPercentage > b.changesPercentage) {
      return 1;
    }
    return 0;
  };

  const comparePercentageChangeDescending = (a, b) => {
    if (a.changesPercentage > b.changesPercentage) {
      return -1;
    }
    if (a.changesPercentage < b.changesPercentage) {
      return 1;
    }
    return 0;
  };

  const compareId = (a, b) => {
    if (a.id < b.id) {
      return -1;
    }
    if (a.id > b.id) {
      return 1;
    }
    return 0;
  };

  const handleFilterSelectionChange = (event) => {
    let updated = [...props.activeStocks];

    if (event.target.value === "Ascending Change") {
      const sortedChangeAscending = updated.sort(compareChangeAscending);
      props.setActiveStocks(sortedChangeAscending);
    }
    if (event.target.value === "Descending Change") {
      const sortedChangeDescending = updated.sort(compareChangeDescending);
      props.setActiveStocks(sortedChangeDescending);
    }
    if (event.target.value === "Ascending % Change") {
      const sortedPercentageChangeAscending = updated.sort(
        comparePercentageChangeAscending
      );
      props.setActiveStocks(sortedPercentageChangeAscending);
    }
    if (event.target.value === "Descending % Change") {
      const sortedPercentageChangeDescending = updated.sort(
        comparePercentageChangeDescending
      );
      props.setActiveStocks(sortedPercentageChangeDescending);
    }
    if (event.target.value === "No Filter") {
      const notSorted = updated.sort(compareId);
      props.setActiveStocks(notSorted);
    }
  };

  return (
    <>
      <section>
        <div className="filter">
          <p>
            Sort by:
            <select id="filter" onChange={handleFilterSelectionChange}>
              <option value={props.option1}>{props.text1}</option>
              <option value={props.option2}>{props.text2}</option>
              <option value={props.option3}>{props.text3}</option>
              <option value={props.option4}>{props.text4}</option>
              <option value={props.option5}>{props.text5}</option>
            </select>
          </p>
        </div>
      </section>
    </>
  );
};

export default Sort;
