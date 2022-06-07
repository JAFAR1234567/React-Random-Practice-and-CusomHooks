import useFetch from "./customHooks/useFetch";
const FetchData = () => {
  const {data, loding, error} = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );
  const lodingMassege = "Todos is loding.....";
  const errorMassege = <p>{error}</p>;

  return (
    <div>
      <h1>Todos</h1>
      {error && errorMassege}
      {loding && lodingMassege}
      {data && data.map((todo) => <p>{todo.title}</p>)}
    </div>
  );
};

export default FetchData;
/*
const getData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const result = response.data;
        console.log(result);
        getTOdo(result);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    ....fetch
       // fetch("https://jsonplaceholder.typicode.com/todos")
    //   .then((res) => res.json())
    //   .then((data) => setTOdos(data));
 */
