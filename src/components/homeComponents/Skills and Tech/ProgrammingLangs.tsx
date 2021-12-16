import { Chip } from "@mui/material";
import { colorTheme } from "../../common/color/colorTheme";
import { ChipTypography } from "../../common/styledComponents/ChipTypography";
import { ParagraphTypography } from "../../common/styledComponents/ParagraphTypography";
import CodeIcon from "@mui/icons-material/Code";

export const ProgrammingLangs = () => {
  const renderChipsLanguages = [
    <Chip
      style={{
        padding: 5,
        backgroundColor: colorTheme.highest,
        color: colorTheme.blackText,
      }}
      icon={<CodeIcon />}
      label={<ChipTypography>TypeScript</ChipTypography>}
      variant="filled"
    />,
    <Chip
      style={{
        padding: 5,
        backgroundColor: colorTheme.highest,
        color: colorTheme.blackText,
      }}
      icon={<CodeIcon />}
      label={<ChipTypography>Vanilla JavaScript</ChipTypography>}
      variant="filled"
    />,
    <Chip
      style={{
        padding: 5,
        backgroundColor: colorTheme.intermediate,
        color: colorTheme.blackText,
      }}
      icon={<CodeIcon />}
      label={<ChipTypography>Python</ChipTypography>}
      variant="filled"
    />,
    <Chip
      style={{
        padding: 5,
        backgroundColor: colorTheme.intermediate,
        color: colorTheme.blackText,
      }}
      icon={<CodeIcon />}
      label={<ChipTypography>Lua</ChipTypography>}
      variant="filled"
    />,
    <Chip
      style={{
        padding: 5,
        backgroundColor: colorTheme.working,
        color: colorTheme.blackText,
      }}
      icon={<CodeIcon />}
      label={<ChipTypography>C</ChipTypography>}
      variant="filled"
    />,
    <Chip
      style={{
        padding: 5,
        backgroundColor: colorTheme.working,
        color: colorTheme.blackText,
      }}
      icon={<CodeIcon />}
      label={<ChipTypography>Java</ChipTypography>}
      variant="filled"
    />,
  ];

  return (
    <div>
      <ParagraphTypography>Programming Languages</ParagraphTypography>
      <div style={{ paddingTop: "1vh", paddingBottom: "1vh" }} />
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {renderChipsLanguages.map((c) => (
          <div style={{ padding: 5, margin: 1 }}>{c}</div>
        ))}
      </div>
    </div>
  );
};
