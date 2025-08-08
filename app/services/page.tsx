import type { Metadata } from "next"
import Link from "next/link"
import { Cloud, Database, Globe, Smartphone, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import GeneralModal from "@/components/general-modal"

export const metadata: Metadata = {
  title: "Our Services - Cloud, Data, Web & Mobile Solutions | TechSolutions",
  description: "Comprehensive technology services including cloud solutions, data analytics, web development, and mobile app development. Get a free consultation for your project.",
  keywords: "cloud services, data analytics, web development, mobile app development, IT consulting, digital transformation services",
  openGraph: {
    title: "Technology Services - Cloud, Data, Web & Mobile | TechSolutions",
    description: "Transform your business with our comprehensive technology services. Cloud solutions, data analytics, web development, and mobile apps.",
    url: "https://techsolutions.com/services",
  },
}

const services = [
  {
    icon: <Cloud className="w-12 h-12 text-blue-600" />,
    title: "Cloud Solutions",
    description: "Comprehensive cloud infrastructure, migration, and optimization services to scale your business efficiently.",
    features: ["Cloud Migration", "Infrastructure as Code", "DevOps Implementation", "Cost Optimization"],
    link: "/services/cloud"
  },
  {
    icon: <Database className="w-12 h-12 text-blue-600" />,
    title: "Data Analytics",
    description: "Transform your raw data into actionable insights with our advanced analytics and business intelligence solutions.",
    features: ["Data Warehousing", "Business Intelligence", "Machine Learning", "Real-time Analytics"],
    link: "/services/data"
  },
  {
    icon: <Globe className="w-12 h-12 text-blue-600" />,
    title: "Web Development",
    description: "Modern, responsive web applications and platforms built with cutting-edge technologies and best practices.",
    features: ["Custom Web Apps", "E-commerce Platforms", "API Development", "Performance Optimization"],
    link: "/services/web"
  },
  {
    icon: <Smartphone className="w-12 h-12 text-blue-600" />,
    title: "Mobile Solutions",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
    features: ["iOS Development", "Android Development", "Cross-platform Apps", "Mobile Strategy"],
    link: "/services/mobile"
  }
]

export default function ServicesPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Technology Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform your business 
            and drive sustainable growth in the digital era.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-gray-600">
                              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Link href={service.link}>
                        <Button className="group-hover:bg-blue-700 transition-colors">
                          Explore Service
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your technology goals 
            and drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GeneralModal
              title="Get Free Consultation"
              submitType="Request Consultation"
              triggerText="Get Free Consultation"
              description="Tell us about your project and we'll provide expert guidance on the best technology solutions for your business."
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
            />
            <GeneralModal
              title="Request a Demo"
              submitType="Request Demo"
              triggerText="View Case Studies"
              description="See how we've helped other businesses transform with our technology solutions."
              className="border border-gray-300 hover:bg-gray-50 px-8 py-3 text-lg"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
