import useStarWarsPeople, { actionType } from "./useStarWarsPeople";

import "./App.css";
import { useEffect } from "react";
import { FilterTransition } from "./components/FilterTransition";
import { FilterDeferred } from "./components/FilterDeferred ";

function App() {
  const initialState = { loading: true, data: [], error: "", dataCount: 0 };
  const [{ loading, data, error, dataCount }, dispatch] =
    useStarWarsPeople(initialState);
  useEffect(() => {
    const abortController = new AbortController();
    const loadPage = async (url) => {
      const response = await fetch(url, { signal: abortController.signal });
      const { results, count, next } = await response.json();
      dispatch({
        type: actionType.SET_DATA,
        payload: { data: results, dataCount: count },
      });
      if (next) {
        await loadPage(next);
      }
    };
    dispatch({ type: actionType.SET_STATE, payload: initialState });
    loadPage("https://swapi.dev/api/people/")
      .then(() => dispatch({ type: actionType.LOADING, payload: false }))
      .catch(() =>
        dispatch({ type: actionType.ERROR, payload: "something went wrong" })
      );
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <div className="App">
      {!!dataCount && (
        <div>
          Loaded {data.length} people of {dataCount}
        </div>
      )}
      <label for="sw_peoples"></label>
      <progress max={dataCount} value={data.length} id="sw_peoples" />
      <div className="filters">
        {!loading && data && <FilterTransition data={data} />}
        <FilterDeferred data={data} />
      </div>
    </div>
  );
}

export default App;
