"use client";
import { AppBar, Tabs, Tab, createTheme, ThemeProvider } from "@mui/material";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
type Props = {};

const Skills = (props: Props) => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Chilanka", "cursive"].join(","),
    },
  });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const skills = useAnimation();
  const [tab, setTab] = useState(0);
  useEffect(() => {
    if (isInView) {
      skills.start({
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.3,
        },
      });
    }
    if (!isInView) {
      skills.start({ opacity: 0, scale: 0 });
    }
  }, [isInView]);
  return (
    <div
      ref={ref}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <motion.h3
        animate={skills}
        whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 0.7 }}
        className="absolute top-24 uppercase tracking-[20px] text-gray-400 text-xl cursor-pointer"
      >
        Skills
      </motion.h3>
      <div className="flex flex-col w-11/12">
        <ThemeProvider theme={theme}>
          <AppBar
            position="static"
            elevation={4}
            style={{
              backgroundColor: "#9ca3af",
              width: "100%",
            }}
            className="skill-bar"
          >
            <Tabs
              value={tab}
              onChange={(event, i) => {
                console.log(i);
                setTab(i);
              }}
              variant="fullWidth"
              indicatorColor="primary"
            >
              <Tab
                style={{ cursor: "url(/cursor/blue-pointer.png), pointer" }}
                label="Frontend"
              />
              <Tab
                style={{ cursor: "url(/cursor/blue-pointer.png), pointer" }}
                label="Backend"
              />
              <Tab
                style={{ cursor: "url(/cursor/blue-pointer.png), pointer" }}
                label="Languages"
              />
              <Tab
                style={{ cursor: "url(/cursor/blue-pointer.png), pointer" }}
                label="Other Tools"
              />
            </Tabs>
          </AppBar>
          {/* <Panel index={0} value={tab}>
              <FrontendPanel />
              </Panel>
              <Panel index={1} value={tab}>
              <BackendPanel />
              </Panel>
              <Panel index={2} value={tab}>
              <CompetitivePanel />
            </Panel> */}
        </ThemeProvider>
        <div className="bg-customblue border border-gray-400">Hello</div>
      </div>
    </div>
  );
};

export default Skills;
