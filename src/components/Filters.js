import FilterYear from "./FilterYear";
import FilterMovie from "./FilterMovie";
import Reset from "./Reset";

function Filters(props) {
  return (
    <form action="" className="form">
      <FilterMovie
        handleFilterMovie={props.handleFilterMovie}
        inputMovie={props.inputMovie}
      />
      <FilterYear
        handleFilterYear={props.handleFilterYear}
        year={props.year}
        filterYear={props.filterYear}
      />
      <Reset
        handleFilterMovie={props.handleFilterMovie}
        handleFilterYear={props.handleFilterYear}
      />
    </form>
  );
}

export default Filters;
