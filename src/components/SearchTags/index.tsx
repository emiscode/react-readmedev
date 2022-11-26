import "./SearchTags.css";
import { RdTag } from "readmedev-ds";
import { searchTags } from "../../data/searchTags";

const SearchTags = () => {
  return (
    <section className="search-tags">
      <h4>Mais Buscados</h4>
      <div className="container">
        {searchTags.map((tag) => (
          <RdTag text={tag} key={tag} />
        ))}
      </div>
    </section>
  );
};

export default SearchTags;
