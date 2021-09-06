import React from "react";
import "./Home.css";
import {} from "@material-ui/icons";
import FeaturedInfo from "../../components/featuredInfo/featuredInfo";
import Chart from "../../components/chart/chart";

import { userData } from "../../dummyData";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        title="User Analytics"
        data={userData}
        dataKey="Active User"
        grid
      />
    </div>
  );
}
