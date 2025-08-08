import type { Metadata } from "next"
import ProductsClient from "./products-client"

export const metadata: Metadata = {
  title: "Our Software Products - Cloud, Data, Web & Mobile Solutions | TechSolutions",
  description: "Explore TechSolutions' innovative software products including CloudSync Pro, DataViz Analytics, WebFlow Builder, and more. Request a demo today!",
  keywords: "software products, cloud management, data analytics, web development tools, mobile SDK, business intelligence",
  openGraph: {
    title: "Software Products - TechSolutions",
    description: "Discover our suite of innovative software products designed to streamline business operations and accelerate digital transformation.",
    url: "https://techsolutions.com/products",
  },
}

export default function ProductsPage() {
  return <ProductsClient />
}
