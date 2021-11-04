import { useParams } from "react-router-dom";

function Home() {
  let params = useParams();
  console.log(params);
  return <div>HOME{params.homeId}</div>;
}

export default Home;
