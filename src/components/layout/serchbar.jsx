import { SearchIcon } from "../common/searchIcon";
export const SearchBar = () => {
  return (
    <div className="search-bar">
      <button className="btn-search">
        <SearchIcon size={24} color={"hsl(var(--clr-pastelwhite))"} />
      </button>
      <input
        type="search"
        name="search"
        id="iSearch"
        placeholder="Buscar filme..."
      />
    </div>
  );
};
