import type { Metadata } from "next"
import CareersClient from "./careers-client"

export const metadata: Metadata = {
  title: "Careers & Open Positions - Join Our Technology Team | TechSolutions",
  description: "Join TechSolutions' innovative technology team. Explore open positions in cloud architecture, data science, web development, and mobile app development. Apply today!",
  keywords: "tech careers, software jobs, cloud architect jobs, data scientist positions, web developer careers, mobile app developer jobs",
  openGraph: {
    title: "Careers at TechSolutions - Join Our Technology Team",
    description: "Explore exciting career opportunities at TechSolutions. Join our team of innovative technologists and help shape the future of business technology.",
    url: "https://techsolutions.com/careers",
  },
}

export default function CareersPage() {
  return <CareersClient />
}
