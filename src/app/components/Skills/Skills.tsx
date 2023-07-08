"use client";
import { AppBar, Tabs, Tab, createTheme, ThemeProvider } from "@mui/material";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Skill from "./Skill/Skill";
import { Skill as SkillType } from "@/app/types/typings";
type Props = {
  skills: SkillType[];
};

const Skills = ({ skills }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const animation = useAnimation();
  const [tab, setTab] = useState(0);
  const [filteredSkills, setFilteredSkills] = useState<SkillType[]>();

  useEffect(() => {
    tabHandler("", 0);
  }, []);

  useEffect(() => {
    if (isInView) {
      animation.start({
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
      animation.start({ opacity: 0, scale: 0 });
    }
  }, [isInView]);

  const filterSkills = (category: string) => {
    return skills.filter((skill) => category === skill.category);
  };

  const tabHandler = (event: any, i: number) => {
    setTab(i);
    switch (i) {
      case 0:
        setFilteredSkills(filterSkills("frontEnd"));
        break;
      case 1:
        setFilteredSkills(filterSkills("backEnd"));
        break;
      case 2:
        setFilteredSkills(filterSkills("languages"));
        break;
      case 3:
        setFilteredSkills(filterSkills("otherTools"));
        break;
      default:
        setFilteredSkills(filterSkills("frontEnd"));
    }
  };
  return (
    <div className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <motion.h3
        ref={ref}
        animate={animation}
        whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 0.7 }}
        className="absolute top-24 uppercase tracking-[20px] text-gray-400 text-xl cursor-pointer"
      >
        Skills
      </motion.h3>
      <div className="flex flex-col w-11/12 md:w-9/12">
        <AppBar
          position="static"
          elevation={4}
          style={{
            padding: "10px",
            backgroundColor: "#9ca3af",
            width: "100%",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
          }}
          color="secondary"
          className="skill-bar"
        >
          <Tabs
            value={tab}
            onChange={tabHandler}
            variant="fullWidth"
            indicatorColor="primary"
          >
            <Tab
              className="text-xs sm:text-sm lg:text-base md:text-lg"
              style={{
                cursor: "url(/cursor/xenon/blue/link.cur), pointer",
              }}
              label="Frontend"
            />
            <Tab
              className="text-xs sm:text-sm lg:text-base md:text-lg"
              style={{
                cursor: "url(/cursor/xenon/blue/link.cur), pointer",
              }}
              label="Backend"
            />
            <Tab
              className="text-xs sm:text-sm lg:text-base md:text-lg"
              style={{
                cursor: "url(/cursor/xenon/blue/link.cur), pointer",
              }}
              label="Languages"
            />
            <Tab
              className="text-xs sm:text-sm lg:text-base md:text-lg"
              style={{
                cursor: "url(/cursor/xenon/blue/link.cur), pointer",
              }}
              label="Others"
            />
          </Tabs>
        </AppBar>

        <div className="bg-customBlue border rounded-b-[20px] py-10 border-gray-400 flex flex-wrap gap-5 justify-center">
          {filteredSkills?.map((skill) => (
            <Skill key={skill?._id} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
