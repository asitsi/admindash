import React from "react";
import styled from "styled-components";
import Heding from "../Components/Heding";
import Cardboxs from "../Components/Cardboxs";
import AreaChart from "../Components/Charts/AreaChart";
import ProgressCard from "../Components/ProgressCard";
import DonutChartCard from "../Components/DonutChartCard";
import Campaing from "../Components/Campaing";
import RightNav from "../Components/RightNav/RightNav";

const container = () => {
  return (
    <Wrap>
      <div>
        <RightNav />
      </div>
      <div>
        <Heding />
        <FlexDiv>
          <Cardboxs />
        </FlexDiv>
        <FlexDiv>
          <AreaChart />
          <ProgressCard />
        </FlexDiv>
        <FlexDiv>
          <Campaing />
          <DonutChartCard />
        </FlexDiv>
      </div>
    </Wrap>
  );
};

const AdminDashboard = () => {
  return <Wrap>{container()}</Wrap>;
};

export default AdminDashboard;

const Wrap = styled.div`
  background: #222;
  display: flex;
  width: 100vw;
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: start;
  :nth-child(2) {
    margin-top: 1rem;
  }
`;
