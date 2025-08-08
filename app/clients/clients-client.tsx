"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Building2, Users, Calendar, MapPin, ExternalLink, ArrowUp } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import GeneralModal from "@/components/general-modal"

const clients = [
  {
    id: 1,
    name: "TechCorp Solutions",
    logo: "/placeholder.svg?height=120&width=180",
    industry: "Technology",
    location: "San Francisco, CA",
    partnership: "2019",
    employees: "5,000+",
    description: "Leading enterprise software company specializing in cloud infrastructure and digital transformation solutions.",
    services: ["Cloud Migration", "Data Analytics", "DevOps"],
    website: "www.techcorp.com",
    testimonial: "TechSolutions transformed our entire cloud infrastructure, resulting in 40% cost savings and improved performance.",
    projectValue: "$2.5M",
    featured: true
  },
  {
    id: 2,
    name: "DataFlow Analytics",
    logo: "/placeholder.svg?height=120&width=180",
    industry: "Financial Services",
    location: "New York, NY",
    partnership: "2020",
    employees: "1,200+",
    description: "Premier financial analytics firm providing data-driven insights for investment decisions and risk management.",
    services: ["Business Intelligence", "Machine Learning", "Data Warehousing"],
    website: "www.dataflow.com",
    testimonial: "The analytics platform built by TechSolutions revolutionized our decision-making process.",
    projectValue: "$1.8M",
    featured: true
  },
  {
    id: 3,
    name: "CloudFirst Enterprises",
    logo: "/placeholder.svg?height=120&width=180",
    industry: "E-commerce",
    location: "Seattle, WA",
    partnership: "2018",
    employees: "3,500+",
    description: "Global e-commerce platform serving millions of customers worldwide with innovative shopping experiences.",
    services: ["Web Development", "Mobile Apps", "Cloud Solutions"],
    website: "www.cloudfirst.com",
    testimonial: "Our partnership with TechSolutions enabled us to scale our platform to handle 10x more traffic.",
    projectValue: "$3.2M",
    featured: false
  },
  {
    id: 4,
    name: "InnovateLab Research",
    logo: "/placeholder.svg?height=120&width=180",
    industry: "Healthcare",
    location: "Boston, MA",
    partnership: "2021",
    employees: "800+",
    description: "Cutting-edge medical research facility developing breakthrough treatments and diagnostic solutions.",
    services: ["Data Analytics", "AI/ML Solutions", "Compliance Systems"],
    website: "www.innovatelab.com",
    testimonial: "TechSolutions helped us accelerate our research with advanced data analytics and AI capabilities.",
    projectValue: "$1.5M",
    featured: false
  },
  {
    id: 5,
    name: "FutureTech Industries",
    logo: "/placeholder.svg?height=120&width=180",
    industry: "Manufacturing",
    location: "Detroit, MI",
    partnership: "2019",
    employees: "12,000+",
    description: "Advanced manufacturing company leading the industry in automation and smart factory solutions.",
    services: ["IoT Solutions", "Data Analytics", "Cloud Infrastructure"],
    website: "www.futuretech.com",
    testimonial: "The IoT and analytics solutions transformed our manufacturing efficiency by 35%.",
    projectValue: "$4.1M",
    featured: true
  },
  {
    id: 6,
    name: "NextGen Startups",
    logo: "/placeholder.svg?height=120&width=180",
    industry: "Venture Capital",
    location: "Austin, TX",
    partnership: "2022",
    employees: "150+",
    description: "Leading venture capital firm investing in early-stage technology startups and disruptive innovations.",
    services: ["Web Development", "Mobile Apps", "Analytics Dashboard"],
    website: "www.nextgen.vc",
    testimonial: "TechSolutions built our portfolio management platform that streamlined our investment process.",
    projectValue: "$800K",
    featured: false
  },
  {
    id: 7,
    name: "SmartSys Corporation",
    logo: "/placeholder.svg?height=120&width=180",
    industry: "Smart Cities",
    location: "Chicago, IL",
    partnership: "2020",
    employees: "2,800+",
    description: "Smart city solutions provider creating connected urban environments through innovative technology.",
    services: ["IoT Platform", "Data Analytics", "Mobile Solutions"],
    website: "www.smartsys.com",
    testimonial: "Our smart city platform powered by TechSolutions is now deployed in over 50 cities.",
    projectValue: "$6.5M",
    featured: true
  },
  {
    id: 8,
    name: "DigitalEdge Media",
    logo: "/placeholder.svg?height=120&width=180",
    industry: "Media & Entertainment",
    location: "Los Angeles, CA",
    partnership: "2021",
    employees: "950+",
    description: "Digital media company creating engaging content and innovative streaming solutions for global audiences.",
    services: ["Streaming Platform", "Content Management", "Analytics"],
    website: "www.digitaledge.com",
    testimonial: "TechSolutions delivered a scalable streaming platform that handles millions of concurrent users.",
    projectValue: "$2.9M",
    featured: false
  },
  {
    id: 9,
    name: "GreenTech Solutions",
    logo: "/placeholder.svg?height=120&width=180",
    industry: "Renewable Energy",
    location: "Portland, OR",
    partnership: "2022",
    employees: "600+",
    description: "Renewable energy company developing sustainable solutions for clean power generation and storage.",
    services: ["Energy Management", "IoT Monitoring", "Data Analytics"],
    website: "www.greentech.com",
    testimonial: "The energy management system increased our operational efficiency by 45%.",
    projectValue: "$1.9M",
    featured: false
  },
  {
    id: 10,
    name: "FinanceFlow Bank",
    logo: "/placeholder.svg?height=120&width=180",
    industry: "Banking",
    location: "Charlotte, NC",
    partnership: "2018",
    employees: "8,500+",
    description: "Regional bank providing comprehensive financial services with a focus on digital banking innovation.",
    services: ["Digital Banking", "Security Solutions", "Data Analytics"],
    website: "www.financeflow.com",
    testimonial: "Our digital transformation with TechSolutions improved customer satisfaction by 60%.",
    projectValue: "$5.2M",
    featured: true
  },
  {
    id: 11,
    name: "EduTech Academy",
    logo: "/placeholder.svg?height=120&width=180",
    industry: "Education",
    location: "Cambridge, MA",
    partnership: "2021",
    employees: "1,500+",
    description: "Online education platform providing innovative learning solutions for students and professionals worldwide.",
    services: ["Learning Platform", "Mobile Apps", "Analytics Dashboard"],
    website: "www.edutech.edu",
    testimonial: "The learning platform built by TechSolutions serves over 100,000 students globally.",
    projectValue: "$1.3M",
    featured: false
  },
  {
    id: 12,
    name: "HealthCare Plus",
    logo: "/placeholder.svg?height=120&width=180",
    industry: "Healthcare",
    location: "Houston, TX",
    partnership: "2020",
    employees: "4,200+",
    description: "Healthcare network providing comprehensive medical services with advanced telemedicine capabilities.",
    services: ["Telemedicine Platform", "Patient Management", "Data Security"],
    website: "www.healthcareplus.com",
    testimonial: "TechSolutions enabled us to provide seamless telemedicine services to 50,000+ patients.",
    projectValue: "$3.7M",
    featured: true
  }
]

// Scroll to Top Button Component
function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button
      className={`fixed bottom-8 right-8 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 z-50 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  )
}

export default function ClientsClient() {
  const [filter, setFilter] = useState("all")
  const [hoveredClient, setHoveredClient] = useState<number | null>(null)

  const industries = ["all", ...Array.from(new Set(clients.map(client => client.industry)))]
  const filteredClients = filter === "all" ? clients : clients.filter(client => client.industry === filter)
  const featuredClients = clients.filter(client => client.featured)

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Valued Clients</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We're proud to partner with industry leaders across various sectors, 
            delivering innovative technology solutions that drive their success.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
              <p className="text-gray-600">Satisfied Clients</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <p className="text-gray-600">Industries Served</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">$50M+</div>
              <p className="text-gray-600">Project Value Delivered</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <p className="text-gray-600">Client Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Clients */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Success Stories</h2>
            <p className="text-xl text-gray-600">
              Highlighting our most impactful partnerships and transformative projects
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredClients.slice(0, 6).map((client) => (
              <Card 
                key={client.id} 
                className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                onMouseEnter={() => setHoveredClient(client.id)}
                onMouseLeave={() => setHoveredClient(null)}
              >
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="relative mb-4">
                      <Image
                        src={client.logo || "/placeholder.svg"}
                        alt={`${client.name} logo`}
                        width={180}
                        height={120}
                        className={`mx-auto transition-all duration-300 ${
                          hoveredClient === client.id ? 'grayscale-0 scale-110' : 'grayscale hover:grayscale-0'
                        }`}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{client.name}</h3>
                    <Badge variant="secondary" className="mb-3">{client.industry}</Badge>
                  </div>
                  
                  <div className="space-y-3 text-sm text-gray-600 mb-6">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                      {client.location}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-blue-600" />
                      {client.employees} employees
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                      Partner since {client.partnership}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {client.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Services Provided:</h4>
                    <div className="flex flex-wrap gap-1">
                      {client.services.map((service, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <blockquote className="italic text-gray-700 text-sm mb-4 border-l-4 border-blue-600 pl-4">
                    "{client.testimonial}"
                  </blockquote>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <p className="text-xs text-gray-500">Project Value</p>
                      <p className="font-semibold text-blue-600">{client.projectValue}</p>
                    </div>
                    <Button variant="outline" size="sm" className="group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Visit
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">All Our Clients</h2>
            <p className="text-xl text-gray-600 mb-8">
              Explore our complete client portfolio across different industries
            </p>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {industries.map((industry) => (
                <Button
                  key={industry}
                  variant={filter === industry ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter(industry)}
                  className={filter === industry ? "bg-blue-600 hover:bg-blue-700" : ""}
                >
                  {industry === "all" ? "All Industries" : industry}
                </Button>
              ))}
            </div>
          </div>

          {/* Client Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredClients.map((client) => (
              <Card 
                key={client.id} 
                className="group hover:shadow-lg transition-all duration-300"
                onMouseEnter={() => setHoveredClient(client.id)}
                onMouseLeave={() => setHoveredClient(null)}
              >
                <CardContent className="p-4 text-center">
                  <div className="mb-4">
                    <Image
                      src={client.logo || "/placeholder.svg"}
                      alt={`${client.name} logo`}
                      width={140}
                      height={90}
                      className={`mx-auto transition-all duration-300 ${
                        hoveredClient === client.id ? 'grayscale-0 scale-105' : 'grayscale hover:grayscale-0'
                      }`}
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm">{client.name}</h3>
                  <Badge variant="secondary" className="text-xs mb-2">{client.industry}</Badge>
                  <p className="text-xs text-gray-600 mb-2">{client.location}</p>
                  <p className="text-xs text-gray-500">Since {client.partnership}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Success Stories</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ready to become our next success story? Let's discuss how we can help 
            transform your business with innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GeneralModal
              title="Start Your Project"
              submitType="Start Project"
              triggerText="Start Your Project"
              description="Ready to join our success stories? Tell us about your project and let's discuss how we can help transform your business."
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg"
            />
            <GeneralModal
              title="Schedule Consultation"
              submitType="Schedule Consultation"
              triggerText="Schedule Consultation"
              description="Book a free consultation with our experts to discuss your technology needs and explore potential solutions."
              className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg"
            />
          </div>
        </div>
      </section>

      <ScrollToTopButton />
    </div>
  )
}
