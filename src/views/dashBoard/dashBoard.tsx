import Header from "../../components/header/header";
import SideBar from "../../components/sideBar/sideBar";
import Sites from "../../components/sites/sites";
import "./dashBoard.css";
import { useState } from "react";

const DashBoard = () => {
  const [search, setSearch] = useState(false);
  const searchBar = (data: any) => {
    setSearch(data);
  };

  return (
    <div>
      <div className="dashBoardContainer">
        <div className="sideBarMenu">
          <SideBar />
        </div>

        <div className="dashBoardHeader">
          <Header searchBar={searchBar} />
        </div>

        <div className="dashBoardSites">
          <Sites props={search} />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
