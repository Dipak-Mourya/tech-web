import type { Metadata } from "next"
import ClientsClient from "./clients-client"

export const metadata: Metadata = {
  title: "Our Clients & Success Stories - Trusted by 200+ Companies | TechSolutions",
  description: "Discover how TechSolutions has helped 200+ companies across various industries transform their business with innovative technology solutions. View our client success stories.",
  keywords: "techsolutions clients, client success stories, technology case studies, business transformation, client testimonials",
  openGraph: {
    title: "Our Clients & Success Stories - TechSolutions",
    description: "Trusted by 200+ companies worldwide. See how we've helped businesses transform with innovative technology solutions.",
    url: "https://techsolutions.com/clients",
  },
}

export default function ClientsPage() {
  return <ClientsClient />
}
