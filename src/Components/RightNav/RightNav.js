import React from "react";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import DateRangeIcon from "@material-ui/icons/DateRange";
import MobileScreenShareIcon from "@material-ui/icons/MobileScreenShare";
import SettingsIcon from "@material-ui/icons/Settings";

const RightNav = () => {
  return (
    <Wrap>
      <div>
        <img
          src="https://cdn.pixabay.com/photo/2014/04/02/14/10/soccer-306385_960_720.png"
          alt="Img"
          className="img-fluid d-block h-60 w-60 pb-4"
        />
        <HomeIcon className="Icon" />
        <EqualizerIcon className="Icon" />
        <FileCopyIcon className="Icon" />
        <DateRangeIcon className="Icon" />
        <MobileScreenShareIcon className="Icon" />
      </div>
      <div>
        <SettingsIcon className="Icon" />
      </div>
    </Wrap>
  );
};

export default RightNav;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 5rem;
  height: 100vh;
  padding: 2rem;
  background: #444;

  .Icon {
    display: block;
    margin-bottom: 2rem;
    :hover {
      color: #12a4d9;
      border-bottom: 2px solid #12a4d9;
    }
  }
`;
