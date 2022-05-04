function FilterYear(props) {
  const handleSelectYear = (ev) => {
    props.handleFilterYear(ev.target.value);
  };
  const renderYear = () => {
    const yearOrder = props.year.sort();
    return yearOrder.map((year, index) => {
      // const yearSort = year.sort();
      return (
        <option value="" key={index}>
          {year}
        </option>
      );
    });
  };

  return (
    <>
      <label htmlFor="">Year</label>
      <select name="" id="" onChange={handleSelectYear}>
        <option value="">All</option>
        {renderYear()}
      </select>
    </>
  );
}
export default FilterYear;
