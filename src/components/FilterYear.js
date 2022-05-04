function FilterYear(props) {
  const handleSelectYear = (ev) => {
    props.handleFilterYear(ev.target.value);
  };
  const renderYear = () => {
    return props.year.map((year, index) => {
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
