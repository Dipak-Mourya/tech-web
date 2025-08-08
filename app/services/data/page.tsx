import Image from "next/image"
import { Database, BarChart3, Brain, Zap, CheckCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const dataServices = [
  {
    icon: <Database className="w-8 h-8 text-blue-600" />,
    title: "Data Warehousing",
    description: "Centralized data storage solutions with optimized performance and scalability."
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
    title: "Business Intelligence",
    description: "Transform raw data into actionable insights with advanced analytics dashboards."
  },
  {
    icon: <Brain className="w-8 h-8 text-blue-600" />,
    title: "Machine Learning",
    description: "Predictive analytics and AI-powered solutions to drive business decisions."
  }
]

const benefits = [
  "Real-time data processing and analytics",
  "Custom dashboard and reporting solutions",
  "Advanced data visualization tools",
  "Predictive modeling and forecasting",
  "Data governance and security compliance",
  "Integration with existing business systems"
]

export default function DataServicesPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Data Analytics Solutions</h1>
              <p className="text-xl mb-8">
                Unlock the power of your data with our comprehensive analytics platform 
                that transforms raw information into strategic business insights.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                  View Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Data Analytics"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Data Services</h2>
            <p className="text-xl text-gray-600">
              Comprehensive data solutions to drive your business forward
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {dataServices.map((service, index) => (
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

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Data Solutions?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center p-4 bg-blue-50 rounded-lg">
                <CheckCircle className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Harness Your Data?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our data experts help you build a comprehensive analytics strategy that drives results.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Schedule Consultation
          </Button>
        </div>
      </section>
    </div>
  )
}
