// @ts-ignore
import { ReactComponent as GitIcon } from "./icons/github-icon.svg";
// @ts-ignore
import { ReactComponent as MUIIcon } from "./icons/material-ui-icons.svg";
// @ts-ignore
import { ReactComponent as JSIcon } from "./icons/js-icon.svg";
// @ts-ignore
import { ReactComponent as ReactIcon } from "./icons/react-icon.svg";
// @ts-ignore
import { ReactComponent as TailWindIcon } from "./icons/tailwindcss-icon.svg";
// @ts-ignore
import { ReactComponent as StorybookIcon } from "./icons/storybook-icon.svg";
// @ts-ignore
import { ReactComponent as PythonIcon } from "./icons/python-icon.svg";
// @ts-ignore
import { ReactComponent as TypeScriptIcon } from "./icons/typescript-icon.svg";

import { Tech } from "./Techs";

export const techsList: Tech[] = [
  {
    id: 1,
    name: "React",
    icon: <ReactIcon className="w-6 h-6" />,
  },
  {
    id: 2,
    name: "JavaScript",
    icon: <JSIcon className="w-6 h-6" />,
  },
  {
    id: 3,
    name: "MUI",
    icon: <MUIIcon className="w-6 h-6" />,
  },
  {
    id: 4,
    name: "Git",
    icon: <GitIcon className="w-6 h-6" />,
  },
  {
    id: 5,
    name: "Tailwind",
    icon: <TailWindIcon className="w-6 h-6" />,
  },
  {
    id: 6,
    name: "Storybook",
    icon: <StorybookIcon className="w-6 h-6" />,
  },
  {
    id: 7,
    name: "Python",
    icon: <PythonIcon className="w-6 h-6" />,
  },
  {
    id: 8,
    name: "TypeScript",
    icon: <TypeScriptIcon className="w-6 h-6" />,
  },
];

export const techsTexts = [
  {
    techId: 1,
    text: "React is a JavaScript library for building user interfaces.",
    icon: <ReactIcon className="w-32 h-32" />,
  },
  {
    techId: 2,
    text: "JavaScript is a programming language that conforms to the ECMAScript specification.",
    icon: <JSIcon className="w-32 h-32" />,
  },
  {
    techId: 3,
    text: "Material-UI is a simple and customizable component library to build faster, beautiful, and more accessible React applications.",
    icon: <MUIIcon className="w-32 h-32" />,
  },
  {
    techId: 4,
    text: "Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.",
    icon: <GitIcon className="w-32 h-32" />,
  },
  {
    techId: 5,
    text: "TailWind CSS is a utility-first CSS framework for rapidly building custom user interfaces.",
    icon: <TailWindIcon className="w-32 h-32" />,
  },
  {
    techId: 6,
    text: "Storybook is an open source tool for developing UI components in isolation for React, Vue, and Angular.",
    icon: <StorybookIcon className="w-32 h-32" />,
  },
  {
    techId: 7,
    text: "Python is an interpreted, high-level, general-purpose programming language.",
    icon: <PythonIcon className="w-32 h-32" />,
  },
  {
    techId: 8,
    text: "TypeScript is a superset of JavaScript that compiles to clean JavaScript output.",
    icon: <TypeScriptIcon className="w-32 h-32" />,
  },
];
