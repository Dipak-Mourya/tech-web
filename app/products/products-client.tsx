"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, Star, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import GeneralModal from "@/components/general-modal"

const products = [
  {
    id: 1,
    name: "CloudSync Pro",
    category: "Cloud Management",
    description: "Comprehensive cloud management platform for multi-cloud environments with automated scaling and cost optimization.",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Multi-cloud support", "Auto-scaling", "Cost optimization", "Security monitoring"],
    rating: 4.8,
    price: "Starting at $99/month",
    detailedDescription: "CloudSync Pro is an enterprise-grade cloud management platform that simplifies multi-cloud operations. With advanced automation, real-time monitoring, and intelligent cost optimization, it helps businesses maximize their cloud investments while maintaining security and compliance standards.",
    keyBenefits: [
      "Reduce cloud costs by up to 40%",
      "Automated scaling based on demand",
      "Unified dashboard for all cloud providers",
      "24/7 monitoring and alerting",
      "Compliance reporting and auditing"
    ]
  },
  {
    id: 2,
    name: "DataViz Analytics",
    category: "Business Intelligence",
    description: "Advanced data visualization and analytics platform that transforms complex data into actionable insights.",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Real-time dashboards", "Custom reports", "ML insights", "API integration"],
    rating: 4.9,
    price: "Starting at $149/month",
    detailedDescription: "DataViz Analytics empowers businesses to make data-driven decisions with intuitive visualizations and powerful analytics capabilities. Our platform integrates with your existing data sources to provide real-time insights and predictive analytics.",
    keyBenefits: [
      "Interactive dashboards and reports",
      "Machine learning-powered insights",
      "Real-time data processing",
      "Custom visualization options",
      "Seamless data source integration"
    ]
  },
  {
    id: 3,
    name: "WebFlow Builder",
    category: "Web Development",
    description: "No-code web application builder with enterprise-grade features and seamless deployment capabilities.",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Drag & drop builder", "Custom components", "API connections", "One-click deploy"],
    rating: 4.7,
    price: "Starting at $79/month",
    detailedDescription: "WebFlow Builder revolutionizes web development with its intuitive drag-and-drop interface. Create professional websites and web applications without coding, while maintaining full control over design and functionality.",
    keyBenefits: [
      "No coding required",
      "Professional templates library",
      "Custom component creation",
      "Responsive design automation",
      "Instant deployment and hosting"
    ]
  },
  {
    id: 4,
    name: "MobileFirst SDK",
    category: "Mobile Development",
    description: "Complete mobile development toolkit with cross-platform capabilities and native performance.",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Cross-platform", "Native performance", "Push notifications", "Analytics"],
    rating: 4.6,
    price: "Starting at $199/month",
    detailedDescription: "MobileFirst SDK provides everything you need to build high-performance mobile applications. With cross-platform compatibility and native performance, you can reach more users while maintaining exceptional user experiences.",
    keyBenefits: [
      "Single codebase for iOS and Android",
      "Native performance optimization",
      "Built-in analytics and crash reporting",
      "Push notification management",
      "Offline data synchronization"
    ]
  },
  {
    id: 5,
    name: "SecureVault",
    category: "Security",
    description: "Enterprise security solution with advanced threat detection and compliance management features.",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Threat detection", "Compliance tools", "Access control", "Audit trails"],
    rating: 4.8,
    price: "Starting at $299/month",
    detailedDescription: "SecureVault provides comprehensive security solutions for modern enterprises. With AI-powered threat detection, automated compliance reporting, and granular access controls, protect your business from evolving cyber threats.",
    keyBenefits: [
      "AI-powered threat detection",
      "Automated compliance reporting",
      "Multi-factor authentication",
      "Real-time security monitoring",
      "Incident response automation"
    ]
  },
  {
    id: 6,
    name: "AutoDeploy CI/CD",
    category: "DevOps",
    description: "Automated deployment pipeline with continuous integration and delivery capabilities for modern applications.",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Automated testing", "Pipeline management", "Rollback support", "Multi-environment"],
    rating: 4.7,
    price: "Starting at $129/month",
    detailedDescription: "AutoDeploy CI/CD streamlines your development workflow with automated testing, deployment, and monitoring. Reduce deployment time and increase reliability with our comprehensive DevOps platform.",
    keyBenefits: [
      "Automated testing and deployment",
      "Zero-downtime deployments",
      "Multi-environment management",
      "Rollback and recovery features",
      "Integration with popular tools"
    ]
  }
]

export default function ProductsClient() {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null)

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Software Products</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover our suite of innovative software products designed to streamline 
            your business operations and accelerate digital transformation.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={`${product.name} product screenshot`}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-blue-600">
                      {product.category}
                    </Badge>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-gray-600">{product.rating}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.features.map((feature, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-blue-600">{product.price}</span>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            onClick={() => setSelectedProduct(product)}
                            className="group-hover:bg-blue-700 transition-colors"
                          >
                            Learn More
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto mx-4 sm:mx-auto">
                          <DialogHeader>
                            <DialogTitle className="text-2xl flex items-center justify-between">
                              {product.name}
                              <Badge className="bg-blue-600">{product.category}</Badge>
                            </DialogTitle>
                          </DialogHeader>
                          <div className="space-y-6">
                            <div className="relative">
                              <Image
                                src={product.image || "/placeholder.svg"}
                                alt={`${product.name} detailed view`}
                                width={600}
                                height={300}
                                className="w-full h-48 object-cover rounded-lg"
                              />
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-lg mb-2">Product Overview</h4>
                              <p className="text-gray-600">{product.detailedDescription}</p>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-lg mb-2">Key Benefits</h4>
                              <ul className="space-y-2">
                                {product.keyBenefits.map((benefit, index) => (
                                  <li key={index} className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span className="text-gray-600">{benefit}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div className="flex items-center justify-between pt-4 border-t">
                              <div>
                                <div className="flex items-center space-x-1 mb-1">
                                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                  <span className="font-semibold">{product.rating}</span>
                                  <span className="text-gray-500">rating</span>
                                </div>
                                <p className="text-lg font-semibold text-blue-600">{product.price}</p>
                              </div>
                              <div className="flex gap-2">
                                <GeneralModal
                                  title="Request Product Demo"
                                  submitType="Request Demo"
                                  triggerText="Request Demo"
                                  description={`Get a personalized demo of ${product.name} and see how it can benefit your business.`}
                                >
                                  <Button variant="outline">Request Demo</Button>
                                </GeneralModal>
                                <GeneralModal
                                  title="Get Started with Product"
                                  submitType="Get Started"
                                  triggerText="Get Started"
                                  description={`Ready to start using ${product.name}? Let's get you set up.`}
                                >
                                  <Button className="bg-blue-600 hover:bg-blue-700">
                                    Get Started
                                  </Button>
                                </GeneralModal>
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact our sales team to learn more about our products and find the perfect 
            solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GeneralModal
              title="Request Product Demo"
              submitType="Request Demo"
              triggerText="Request Demo"
              description="Get a personalized demo of our products and see how they can transform your business operations."
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
            />
            <GeneralModal
              title="Contact Sales Team"
              submitType="Contact Sales"
              triggerText="Contact Sales"
              description="Speak with our sales team to find the perfect product solution for your business needs."
              className="border border-gray-300 hover:bg-gray-50 px-8 py-3 text-lg"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
