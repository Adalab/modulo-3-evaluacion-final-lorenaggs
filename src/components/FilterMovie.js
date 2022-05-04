function FilterMovie(props) {
  const handleInput = (ev) => {
    props.handleFilterMovie(ev.target.value);
  };
  return (
    <>
      <label htmlFor="">Movie</label>
      <input type="text" onChange={handleInput} />
    </>
  );
}
export default FilterMovie;
