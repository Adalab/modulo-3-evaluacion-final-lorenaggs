import FilterYear from "./FilterYear";
import FilterMovie from "./FilterMovie";
import Reset from "./Reset";
import FilterLong from "./FilterLong";

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
      <FilterLong
        handleFilterLong={props.handleFilterLong}
        filterLong={props.filterLong}
      />
      <Reset
        handleFilterMovie={props.handleFilterMovie}
        handleFilterYear={props.handleFilterYear}
        handleFilterLong={props.handleFilterLong}
      />
    </form>
  );
}

export default Filters;
