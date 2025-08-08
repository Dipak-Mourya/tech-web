import Image from "next/image"
import { Cloud, Server, Shield, Zap, CheckCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const cloudServices = [
  {
    icon: <Server className="w-8 h-8 text-blue-600" />,
    title: "Cloud Migration",
    description: "Seamless migration of your existing infrastructure to the cloud with minimal downtime."
  },
  {
    icon: <Shield className="w-8 h-8 text-blue-600" />,
    title: "Security & Compliance",
    description: "Enterprise-grade security measures and compliance with industry standards."
  },
  {
    icon: <Zap className="w-8 h-8 text-blue-600" />,
    title: "Performance Optimization",
    description: "Optimize your cloud resources for maximum performance and cost efficiency."
  }
]

const benefits = [
  "Reduced infrastructure costs by up to 40%",
  "99.9% uptime guarantee",
  "Scalable resources on demand",
  "Enhanced security and compliance",
  "24/7 monitoring and support",
  "Disaster recovery and backup solutions"
]

export default function CloudServicesPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Cloud Solutions</h1>
              <p className="text-xl mb-8">
                Transform your business with scalable, secure, and cost-effective cloud infrastructure 
                that grows with your needs.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Cloud Solutions"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Cloud Services</h2>
            <p className="text-xl text-gray-600">
              Comprehensive cloud solutions tailored to your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {cloudServices.map((service, index) => (
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

      {/* Snowflake Data Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Snowflake Data Solutions</h2>
              <p className="text-lg text-gray-600 mb-6">
                Leverage the power of Snowflake's cloud data platform to unlock insights 
                from your data with unmatched performance, scalability, and ease of use.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span>Data warehousing and analytics</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span>Real-time data sharing</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span>Machine learning integration</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span>Multi-cloud deployment</span>
                </li>
              </ul>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Learn About Snowflake
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Snowflake Solutions"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Cloud Solutions?</h2>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Move to the Cloud?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our experts help you design and implement a cloud strategy that drives your business forward.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Schedule Consultation
          </Button>
        </div>
      </section>
    </div>
  )
}
