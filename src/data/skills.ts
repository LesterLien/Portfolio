import { FaReact, FaHtml5, FaCss3, FaNodeJs, FaJava, FaGithub, FaFigma, FaGoogle } from "react-icons/fa";
import { RiTailwindCssFill  } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import { SiExpress, SiCplusplus, SiLatex } from "react-icons/si";
import { PiFileSqlLight } from "react-icons/pi";
import { TbAssembly } from "react-icons/tb";
import { DiGit } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";

export const skills = [
{
    title: "Frontend",
    skills: [
    {
        name: "React Js",
        image: FaReact
    },
    {
        name: "Tailwind CSS",
        image: RiTailwindCssFill
    },
    {
        name: "HTML",
        image: FaHtml5
    },
    {
        name: "CSS",
        image: FaCss3
    },
    ],
},
{
    title: "Backend",
    skills: [
    {
        name: "Node Js",
        image: FaNodeJs
    },
    {
        name: "Express Js",
        image: SiExpress
    },
    {
        name: "SQL",
        image: PiFileSqlLight
    },
    {
        name: "PostgreSQL",
        image: BiLogoPostgresql
    },
    ],
},
{
    title: "Languages",
    skills: [
    {
        name: "C++",
        image: SiCplusplus
    },
    {
        name:"Java",
        image: FaJava
    },
    {
        name: "JavaScript",
        image: IoLogoJavascript
    },
    {
        name: "TypeScript",
        image: BiLogoTypescript
    },
    {
        name: "LC-3 Assembly",
        image: TbAssembly
    }
    ],
},
{
    title: "Others",
    skills: [
    {
        name: "Git",
        image: DiGit
    },
    {
        name: "GitHub",
        image: FaGithub
    },
    {
        name: "Figma",
        image: FaFigma
    },
    {
        name: "LaTex",
        image: SiLatex
    },
    {
        name: "Google Test",
        image: FaGoogle
    },
    {
        name: "VS Code",
        image: VscVscode
    },
    ],
},
];