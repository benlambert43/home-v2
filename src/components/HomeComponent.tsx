import { Typography } from "@mui/material";
import { NavMenu } from "./homeComponents/NavMenu";
import { PageContent } from "./homeComponents/PageContent";
import { PageTitle } from "./homeComponents/PageTitle";

export const HomeComponent = () => {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
      }}
    >
      <PageContent />
    </div>
  );
};
