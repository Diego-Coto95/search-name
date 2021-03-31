import SearchResultsItem from "./SearchResultsItem";

export default function SearchResults({results, isSearching}) {
  return (
    <div style={{ width: "80%", padding: "0rem 2rem 0rem 2rem"}}>
        {!results.length && isSearching && <p style={{color: "white"}}>Not exists!</p>}
        {/* <p>Not exists!</p> */}
        {results?.map((value) => 
            <SearchResultsItem key={value.id} {...value}/> 
            // name={value.name} email={value.email} de esta manera o de la manera de la linea 8
        )}
    </div>
  );
}