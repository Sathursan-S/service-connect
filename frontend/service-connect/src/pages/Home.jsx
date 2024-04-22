import Search from "../components/Search";
import ServiceCard from "../components/ServiceCard";
import TaskRequsts from "../components/TaskRequsts";
import { Link } from "react-router-dom";

const props = {
  img: "https://cdn.langeek.co/photo/20974/original/",
  title: "Electrician",
};
const props2 = {
  img: "https://cdn.langeek.co/photo/21064/original/",
  title: "Plumber",
};
const props3 = {
  img: "https://cdn.langeek.co/photo/22317/original/",
  title: "Painter",
};

export default function Home() {
  return (
    <div className="flex flex-col items-center">
     
      {/* <TaskRequsts /> */}
      <div className="text-2xl font-bold m-5 text-slate-800">
        Popular Services
      </div>
      <div className="flex flex-wrap justify-center">
        {/* <Link to="/profile"> */}
          <ServiceCard post={props} />
        {/* </Link> */}
        <ServiceCard post={props2} />
        <ServiceCard post={props3} />
        <ServiceCard post={props2} />
        <ServiceCard post={props} />

      </div>
      <Search />
    </div>
  );
}
