import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

 export const projects = [
    {
      title: "Dhaman for projects-منصة ضمان الرقمية للمشاريع",
      description:
        "Dhaman – the Digital Assurance Platform for Iraqi Projects – is a comprehensive solution that connects government entities and private companies to manage a project’s full lifecycle: registration, validation, approvals, status updates, and final reporting. It’s built on a scalable architecture with modern, user-friendly interfaces, role-based permissions, and automated workflows that minimize errors and speed up delivery. Dhaman emphasizes transparency, security, and accessibility, serving as a single source of truth for project data and documentation in Iraq.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "scss"],
      image: "dhamanProjects.png?height=200&width=300",
      github: "#",
      live: "https://project.rss.gov.iq/",
    },
    {
      title: "Dhaman for Control Panel-منصة ضمان الرقمية واجهة التحكم",
      description:
        "Dhaman Control Panel: the central command hub for permissions, workflow oversight, and real‑time insights.",
      tech: ["Nextjs", "TypeScript", "Tailwind"],
      image: "/placeholder.svg?height=200&width=300",
      github: "#",
      live: "#",
    },
    {
      title: "Dhaman for user-منصة ضمان الرقمية الاختياري",
      description:
        "The Dhaman User Portal is the primary touchpoint for beneficiaries to interact with services: initiating and updating requests, uploading documents, monitoring status at every stage, and receiving direct alerts or feedback. It’s built with a responsive, intuitive UI that follows modern accessibility and usability standards. Multilingual support and an interactive help center reduce errors and boost user satisfaction.",
      tech: ["React.js", "TypeScript", "Tailwind CSS"],
      image: "dhamanUser.png?height=200&width=300",
      github: "#",
      live: "https://www.user.rss.gov.iq/",
    },
    {
      title:
        "Technical Support Dashboard for Dhaman-لوحة معلومات الدعم الفني للضمان",
      description:
        "This project is a centralized web-based dashboard designed to help the technical support team at Dhaman (الضمان) efficiently manage and monitor customer support activities.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      image: "",
      github: "#",
      live: "#",
    },
    {
      title:
        "web for the Gilgamesh University-موقع ويب لجامعة كلكامش ",
      description:
        "",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      image: "gilgamesh.png?height=200&width=300",
      github: "#",
      live: "#",
    },
  ];

   export const skills = [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "ReactNative",
    "expo",
    "Zustand",
    "Tailwind CSS",
    "Shadcn",
    "HTML5",
    "CSS3",
    "Node.js",
    "Git",
    "postgreSQL",
    "Prisma ORM",
    // "Figma",
    "Responsive Design",
    "Performance Optimization",
  ];