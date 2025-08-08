"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, ArrowRight, Users, Target, Award, ArrowUp } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const heroSlides = [
  {
    image: "/placeholder.svg?height=800&width=1200",
    title: "Innovative Cloud Solutions",
    description: "Transform your business with cutting-edge cloud technologies and data-driven insights.",
  },
  {
    image: "/placeholder.svg?height=800&width=1200",
    title: "Data-Driven Excellence",
    description: "Unlock the power of your data with our advanced analytics and business intelligence solutions.",
  },
  {
    image: "/placeholder.svg?height=800&width=1200",
    title: "Mobile & Web Innovation",
    description: "Create exceptional digital experiences with our expert development team.",
  },
]

const services = [
  {
    icon: "☁️",
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services",
    link: "/services/cloud"
  },
  {
    icon: "📊",
    title: "Data Analytics",
    description: "Transform raw data into actionable business insights",
    link: "/services/data"
  },
  {
    icon: "🌐",
    title: "Web Development",
    description: "Modern, responsive web applications and platforms",
    link: "/services/web"
  },
  {
    icon: "📱",
    title: "Mobile Solutions",
    description: "Native and cross-platform mobile applications",
    link: "/services/mobile"
  },
]

const clients = [
  { name: "TechCorp", logo: "/placeholder.svg?height=80&width=120" },
  { name: "DataFlow", logo: "/placeholder.svg?height=80&width=120" },
  { name: "CloudFirst", logo: "/placeholder.svg?height=80&width=120" },
  { name: "InnovateLab", logo: "/placeholder.svg?height=80&width=120" },
  { name: "FutureTech", logo: "/placeholder.svg?height=80&width=120" },
  { name: "NextGen", logo: "/placeholder.svg?height=80&width=120" },
  { name: "SmartSys", logo: "/placeholder.svg?height=80&width=120" },
  { name: "DigitalEdge", logo: "/placeholder.svg?height=80&width=120" },
]

const testimonials = [
  {
    quote: "Their cloud migration saved us 40% on infrastructure costs while improving performance.",
    author: "Sarah Johnson",
    company: "TechCorp",
    image: "/placeholder.svg?height=80&width=80"
  },
  {
    quote: "The data analytics platform they built transformed our decision-making process.",
    author: "Michael Chen",
    company: "DataFlow",
    image: "/placeholder.svg?height=80&width=80"
  },
]

const stats = [
  { number: 100, suffix: "+", label: "Projects Led", description: "Successfully delivered across various industries" },
  { number: 90, suffix: "+", label: "Business Solutions", description: "Custom solutions that drive real results" },
  { number: 24, suffix: "/7", label: "Support Available", description: "Round-the-clock technical assistance" },
]

// Animated Counter Component
function AnimatedCounter({ number, suffix, duration = 3000 }: { number: number, suffix: string, duration?: number }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (isVisible) {
      let startTime: number
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)
        
        setCount(Math.floor(progress * number))
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }
  }, [isVisible, number, duration])

  return (
    <div ref={ref} className="text-5xl font-bold text-blue-600 mb-4">
      {count}{suffix}
    </div>
  )
}

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

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentClient, setCurrentClient] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentClient((prev) => (prev + 1) % clients.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)

  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <section className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="relative h-full">
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                fill
                className="object-cover transition-transform duration-[8000ms] ease-out scale-100 hover:scale-105"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-4">
                  <div className="max-w-2xl text-white">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
                      {slide.title}
                    </h1>
                    <p className="text-xl mb-8 animate-fade-in animation-delay-300">
                      {slide.description}
                    </p>
                    <div className="flex gap-4 animate-fade-in animation-delay-600">
                      <Link href="/contact">
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                          Contact Us
                        </Button>
                      </Link>
                      <Link href="/services">
                        <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                          Explore
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </section>

      {/* About Us Snippet */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Our Company</h2>
              <p className="text-lg text-gray-600 mb-6">
                We are a leading technology solutions provider, specializing in cloud infrastructure, 
                data analytics, and digital transformation. With over a decade of experience, we help 
                businesses leverage cutting-edge technologies to drive growth and innovation.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our team of experts is dedicated to delivering tailored solutions that meet your 
                unique business needs and exceed your expectations.
              </p>
              <Link href="/about">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Our team"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Intro Strip */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="relative h-32">
              <Image
                src="/placeholder.svg?height=128&width=200"
                alt="Innovation"
                fill
                className="object-contain"
              />
            </div>
            <div className="text-center text-white">
              <h3 className="text-2xl font-bold mb-4">
                Transforming Businesses Through Technology
              </h3>
              <p className="text-lg">
                We bridge the gap between complex technology and business success
              </p>
            </div>
            <div className="relative h-32">
              <Image
                src="/placeholder.svg?height=128&width=200"
                alt="Growth"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Teaser */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link href="/about">
                    <Button variant="outline" className="group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Middle Banner */}
      <section className="relative py-32 bg-fixed bg-cover bg-center" 
               style={{backgroundImage: "url('/placeholder.svg?height=400&width=1200')"}}>
        <div className="absolute inset-0 bg-blue-900/80" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of companies that trust us to deliver innovative technology solutions
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>

      {/* Stats Section with Animated Counters */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-8">
                <AnimatedCounter number={stat.number} suffix={stat.suffix} />
                <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Carousel */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Existing Clients</h2>
            <p className="text-xl text-gray-600">Trusted by industry leaders worldwide</p>
          </div>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-48 mx-8 text-center"
                >
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={client.name}
                    width={120}
                    height={80}
                    className="mx-auto mb-2 grayscale hover:grayscale-0 transition-all duration-300"
                  />
                  <p className="text-sm font-medium text-gray-600">{client.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          </div>
          <div className="max-w-4xl mx-auto relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`text-center transition-opacity duration-500 ${
                  index === currentTestimonial ? "opacity-100" : "opacity-0 absolute inset-0"
                }`}
              >
                <blockquote className="text-2xl text-gray-700 mb-8 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get In Touch */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                Ready to start your digital transformation journey? Contact us today to discuss 
                how we can help your business leverage technology for growth and success.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Free consultation and project assessment</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Custom solutions tailored to your needs</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Ongoing support and maintenance</span>
                </div>
              </div>
            </div>
            <div className="px-4 sm:px-0">
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div>
                      <Input placeholder="Your Name" />
                    </div>
                    <div>
                      <Input type="email" placeholder="Email Address" />
                    </div>
                    <div>
                      <Input type="tel" placeholder="Phone Number" />
                    </div>
                    <div>
                      <Textarea placeholder="Your Message" rows={4} />
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <ScrollToTopButton />
    </div>
  )
}
