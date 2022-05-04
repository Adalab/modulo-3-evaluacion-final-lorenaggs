function FilterMovie(props) {
  const handleInput = (ev) => {
    props.handleFilterMovie(ev.target.value);
  };
  return (
    <>
      <label htmlFor="" className="title">
        Movie
      </label>
      <input className="rectangleInput" type="text" onChange={handleInput} />
    </>
  );
}
export default FilterMovie;
