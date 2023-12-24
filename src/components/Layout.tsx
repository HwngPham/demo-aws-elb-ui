import { Container, Tab, TabList, Tabs } from "@mui/joy";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Container sx={{ width: "100vw" }}>
      <Tabs
        value={window.location.pathname ?? "/"}
        sx={{ position: "sticky", top: 0, zIndex: 9999, marginBottom: "30px" }}
      >
        <TabList>
          <a href="/">
            <Tab variant="plain" color="neutral" value="/">
              Home
            </Tab>
          </a>

          <a href="/new-post">
            <Tab variant="plain" color="neutral" value="/new-post">
              Add Post
            </Tab>
          </a>
        </TabList>
      </Tabs>
      {children}
    </Container>
  );
};
