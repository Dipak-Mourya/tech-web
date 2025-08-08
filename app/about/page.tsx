import type { Metadata } from "next"
import Image from "next/image"
import { Users, Target, Award, Lightbulb } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About TechSolutions - Our Mission, Vision & Expert Team",
  description: "Learn about TechSolutions' journey, mission, and values. Meet our expert team of technology professionals dedicated to transforming businesses through innovation.",
  keywords: "about techsolutions, company mission, technology experts, innovation team, business transformation",
  openGraph: {
    title: "About TechSolutions - Our Mission & Expert Team",
    description: "Discover our journey, mission, and the expert team behind TechSolutions' innovative technology solutions.",
    url: "https://techsolutions.com/about",
  },
}

const values = [
  {
    icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
    title: "Innovation",
    description: "We constantly push the boundaries of technology to deliver cutting-edge solutions."
  },
  {
    icon: <Users className="w-8 h-8 text-blue-600" />,
    title: "Collaboration",
    description: "We work closely with our clients to understand their unique needs and challenges."
  },
  {
    icon: <Target className="w-8 h-8 text-blue-600" />,
    title: "Excellence",
    description: "We strive for perfection in every project, ensuring the highest quality deliverables."
  },
  {
    icon: <Award className="w-8 h-8 text-blue-600" />,
    title: "Integrity",
    description: "We build trust through transparency, honesty, and ethical business practices."
  }
]

const timeline = [
  { year: "2010", event: "Company founded with a vision to transform businesses through technology" },
  { year: "2013", event: "Expanded to cloud solutions and data analytics services" },
  { year: "2016", event: "Reached 50+ successful project deliveries" },
  { year: "2019", event: "Launched mobile development division" },
  { year: "2022", event: "Achieved 100+ projects milestone and expanded internationally" },
  { year: "2024", event: "Leading provider with 200+ satisfied clients worldwide" }
]

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About TechSolutions</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We are a team of passionate technologists dedicated to helping businesses 
            harness the power of modern technology to achieve their goals and drive innovation.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To empower businesses with innovative technology solutions that drive growth, 
                efficiency, and competitive advantage in the digital age.
              </p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600">
                To be the global leader in technology consulting, recognized for our expertise, 
                innovation, and commitment to client success.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Our office and team workspace"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">
              Key milestones in our growth and evolution
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-center mb-8">
                <div className="flex-shrink-0 w-24 text-right mr-8">
                  <span className="text-2xl font-bold text-blue-600">{item.year}</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mr-8"></div>
                <div className="flex-1">
                  <p className="text-lg text-gray-700">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expert Team</h2>
            <p className="text-xl text-gray-600">
              Meet the talented professionals behind our success
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="text-center">
                <CardContent className="p-6">
                  <Image
                    src={`/placeholder.svg?height=200&width=200&query=professional headshot ${i}`}
                    alt={`Team member ${i} professional headshot`}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">Team Member {i}</h3>
                  <p className="text-blue-600 mb-3">Senior Technology Consultant</p>
                  <p className="text-gray-600">
                    Expert in cloud architecture and digital transformation with 10+ years of experience.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
