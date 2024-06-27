import { useRouteError } from "react-router-dom";
const Error = () => {
  let err = useRouteError();
  console.log(err);
  return (
    <div>
      <br></br>
      <h1>Oops!!</h1>
      <h2>Something went wrong</h2>
      <br></br>
      <h4>
        {err.status} : {err.statusText}
      </h4>
    </div>
  );
};
export default Error;
