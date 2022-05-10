function reset(props) {
  const handleReset = (ev) => {
    props.handleFilterMovie("");
    props.handleFilterYear("");
    props.handleFilterLong("");

    localStorage.removeItem("MovieSceneItem");
  };

  return (
    <button className="btnReset" onClick={handleReset}>
      BORRAR
    </button>
  );
}

export default reset;
