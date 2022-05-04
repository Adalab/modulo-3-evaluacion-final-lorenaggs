import FilterYear from "./FilterYear";
import FilterMovie from "./FilterMovie";

function Filters(props) {
  return (
    <form action="">
      <FilterMovie handleFilterMovie={props.handleFilterMovie} />
      <FilterYear handleFilterYear={props.handleFilterYear} year={props.year} />
    </form>
  );
}

export default Filters;
