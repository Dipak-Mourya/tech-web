import Image from "next/image"
import { Smartphone, Tablet, Zap, Shield, CheckCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const mobileServices = [
  {
    icon: <Smartphone className="w-8 h-8 text-blue-600" />,
    title: "Native App Development",
    description: "High-performance native applications for iOS and Android platforms."
  },
  {
    icon: <Tablet className="w-8 h-8 text-blue-600" />,
    title: "Cross-Platform Solutions",
    description: "Cost-effective apps that work seamlessly across multiple platforms."
  },
  {
    icon: <Shield className="w-8 h-8 text-blue-600" />,
    title: "App Security",
    description: "Enterprise-grade security features to protect user data and transactions."
  }
]

const features = [
  "iOS and Android development",
  "React Native & Flutter",
  "UI/UX design optimization",
  "App Store deployment",
  "Push notifications",
  "Offline functionality"
]

export default function MobileServicesPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Mobile App Development</h1>
              <p className="text-xl mb-8">
                Create engaging mobile experiences that connect with your users 
                through intuitive design and powerful functionality.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Start Project
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                  View Apps
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Mobile Development"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mobile Development Services</h2>
            <p className="text-xl text-gray-600">
              Comprehensive mobile solutions for every business need
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {mobileServices.map((service, index) => (
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

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center p-4 bg-blue-50 rounded-lg">
                <CheckCircle className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Launch Your Mobile App?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Transform your idea into a powerful mobile application that engages users and drives business growth.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Discuss Your App
          </Button>
        </div>
      </section>
    </div>
  )
}
