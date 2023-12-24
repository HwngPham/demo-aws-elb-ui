import { Container, Tab, TabList, Tabs } from "@mui/joy";
import React from "react";
import { Link, useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  return (
    <Container sx={{ width: "100vw" }}>
      <Tabs
        value={location.pathname ?? "/"}
        sx={{ position: "sticky", top: 0, zIndex: 9999, marginBottom: "30px" }}
      >
        <TabList>
          <Link to="/">
            <Tab variant="plain" color="neutral" value="/">
              Home
            </Tab>
          </Link>

          <Link to="/new-post">
            <Tab variant="plain" color="neutral" value="/new-post">
              Add Post
            </Tab>
          </Link>
        </TabList>
      </Tabs>
      {children}
    </Container>
  );
};
