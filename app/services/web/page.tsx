import Image from "next/image"
import { Globe, Smartphone, Code, Zap, CheckCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const webServices = [
  {
    icon: <Globe className="w-8 h-8 text-blue-600" />,
    title: "Custom Web Applications",
    description: "Tailored web solutions built with modern frameworks and best practices."
  },
  {
    icon: <Smartphone className="w-8 h-8 text-blue-600" />,
    title: "Responsive Design",
    description: "Mobile-first designs that work seamlessly across all devices and screen sizes."
  },
  {
    icon: <Code className="w-8 h-8 text-blue-600" />,
    title: "API Development",
    description: "Robust APIs and integrations to connect your systems and third-party services."
  }
]

const technologies = [
  "React & Next.js",
  "Node.js & Express",
  "TypeScript",
  "GraphQL & REST APIs",
  "MongoDB & PostgreSQL",
  "AWS & Vercel Deployment"
]

export default function WebServicesPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Web Development Solutions</h1>
              <p className="text-xl mb-8">
                Create exceptional web experiences with our modern development approach 
                using cutting-edge technologies and industry best practices.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Start Project
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                  View Portfolio
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Web Development"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Web Development Services</h2>
            <p className="text-xl text-gray-600">
              Full-stack development solutions for modern businesses
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {webServices.map((service, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technologies We Use</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="flex items-center p-4 bg-blue-50 rounded-lg">
                <CheckCircle className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your Web Solution?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's create a powerful web application that drives your business growth and engages your users.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Start Your Project
          </Button>
        </div>
      </section>
    </div>
  )
}
