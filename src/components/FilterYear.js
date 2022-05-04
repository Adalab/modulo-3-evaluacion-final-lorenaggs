function FilterYear(props) {
  const handleSelectYear = (ev) => {
    props.handleFilterYear(ev.target.value);
  };
  const renderYear = () => {
    const yearOrder = props.year.sort();
    return yearOrder.map((year, index) => {
      return (
        <option value={year} key={index}>
          {year}
        </option>
      );
    });
  };

  return (
    <>
      <label htmlFor="" className="title">
        Year
      </label>
      <select
        name=""
        id=""
        className="rectangleInput"
        onChange={handleSelectYear}
      >
        <option value="">All</option>
        {renderYear()}
      </select>
    </>
  );
}
export default FilterYear;
