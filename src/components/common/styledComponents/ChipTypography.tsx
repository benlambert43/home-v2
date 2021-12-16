import styled from "@emotion/styled";
import { colorTheme } from "../color/colorTheme";

export const ChipTypography = styled("div")({
  color: colorTheme.blackText,
  fontSize: "calc(10px + .15vw)",
  paddingRight: 10,
  paddingTop: 10,
  paddingBottom: 10,
});
