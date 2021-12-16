import { Avatar, Chip, Divider, Icon, Typography } from "@mui/material";
import { colorTheme } from "../common/color/colorTheme";
import { TitleTypography } from "../common/styledComponents/TitleTypography";
import profPic from "../../assets/profile.jpg";
import { ParagraphTypography } from "../common/styledComponents/ParagraphTypography";
import { minWidth } from "@mui/system";
import { SubtitleTypography } from "../common/styledComponents/SubtitleTypography";
import { Title2Typography } from "../common/styledComponents/Title2Typography";
import { ChipTypography } from "../common/styledComponents/ChipTypography";
import { ChipIconStyle } from "../common/styledComponents/ChipIconStyle";

export const PageContent = () => {
  const renderChips = [
    <Chip
      icon={
        <ChipIconStyle>
          <Icon>i</Icon>
        </ChipIconStyle>
      }
      label={<ChipTypography>TypeScript</ChipTypography>}
      variant="outlined"
    />,
    <Chip
      icon={
        <ChipIconStyle>
          <Icon>i</Icon>
        </ChipIconStyle>
      }
      label={<ChipTypography>Vanilla JavaScript</ChipTypography>}
      variant="outlined"
    />,
    <Chip
      icon={
        <ChipIconStyle>
          <Icon>i</Icon>
        </ChipIconStyle>
      }
      label={<ChipTypography>Python</ChipTypography>}
      variant="outlined"
    />,
    <Chip
      icon={
        <ChipIconStyle>
          <Icon>i</Icon>
        </ChipIconStyle>
      }
      label={<ChipTypography>C</ChipTypography>}
      variant="outlined"
    />,
    <Chip
      icon={
        <ChipIconStyle>
          <Icon>i</Icon>
        </ChipIconStyle>
      }
      label={<ChipTypography>Java</ChipTypography>}
      variant="outlined"
    />,
  ];

  return (
    <div
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: "10%",
      }}
    >
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <div style={{ maxWidth: "30%" }}>
          <Avatar
            alt="Ben Lambert"
            src={profPic}
            style={{ minWidth: 64, minHeight: 64 }}
          />
        </div>
        <div style={{ maxWidth: "70%", paddingLeft: 15, paddingRight: 30 }}>
          <TitleTypography>benlambert.tech</TitleTypography>
          <SubtitleTypography>
            redirects to benlambert43.github.io/home/
          </SubtitleTypography>
        </div>
      </div>
      <div style={{ paddingTop: "1.5vh", paddingBottom: "1.5vh" }} />
      <Divider />
      <div style={{ paddingTop: "1.5vh", paddingBottom: "1.5vh" }} />

      <TitleTypography>Hi!</TitleTypography>
      <div style={{ paddingTop: "1.5vh", paddingBottom: "1.5vh" }} />
      <ParagraphTypography>
        I am a 22 year old full stack software developer with a focus on web
        technologies and building solutions to complex business problems.
      </ParagraphTypography>
      <div style={{ paddingTop: "1vh", paddingBottom: "1vh" }} />

      <ParagraphTypography>
        I am currently a software developer working at CDW, living in Far Hills
        NJ. Source code for this website{" "}
        <a
          href="https://github.com/benlambert43/PersonalWebsite"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
        <div style={{ paddingTop: "1vh", paddingBottom: "1vh" }} />
        <ParagraphTypography>
          My mission is to use database, backend, frontend and deployment
          technologies to create cutting-edge software that is reliable,
          performant, and inviting to use.
        </ParagraphTypography>
        <div style={{ paddingTop: "3vh", paddingBottom: "3vh" }} />
      </ParagraphTypography>
      {renderChips.map((c) => c)}
    </div>
  );
};
