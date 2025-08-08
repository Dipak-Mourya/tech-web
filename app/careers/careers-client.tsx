"use client"

import { useState } from "react"
import { MapPin, Clock, DollarSign, Users } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import GeneralModal from "@/components/general-modal"

const jobs = [
  {
    id: 1,
    title: "Senior Cloud Architect",
    department: "Cloud Solutions",
    location: "Remote / New York",
    type: "Full-time",
    salary: "$120k - $150k",
    description: "Lead cloud architecture design and implementation for enterprise clients.",
    requirements: [
      "5+ years of cloud architecture experience",
      "AWS/Azure/GCP certifications",
      "Experience with Infrastructure as Code",
      "Strong communication skills"
    ],
    responsibilities: [
      "Design scalable cloud solutions",
      "Lead technical discussions with clients",
      "Mentor junior team members",
      "Ensure best practices and security compliance"
    ]
  },
  {
    id: 2,
    title: "Data Scientist",
    department: "Data Analytics",
    location: "San Francisco / Remote",
    type: "Full-time",
    salary: "$100k - $130k",
    description: "Develop machine learning models and analytics solutions for our clients.",
    requirements: [
      "PhD/MS in Data Science or related field",
      "3+ years of ML/AI experience",
      "Python, R, SQL proficiency",
      "Experience with big data technologies"
    ],
    responsibilities: [
      "Build predictive models",
      "Analyze complex datasets",
      "Present insights to stakeholders",
      "Collaborate with engineering teams"
    ]
  },
  {
    id: 3,
    title: "Full Stack Developer",
    department: "Web Development",
    location: "Austin / Remote",
    type: "Full-time",
    salary: "$90k - $120k",
    description: "Build modern web applications using cutting-edge technologies.",
    requirements: [
      "3+ years of full-stack development",
      "React, Node.js, TypeScript",
      "Database design experience",
      "Agile development experience"
    ],
    responsibilities: [
      "Develop web applications",
      "Write clean, maintainable code",
      "Participate in code reviews",
      "Collaborate with design team"
    ]
  },
  {
    id: 4,
    title: "Mobile App Developer",
    department: "Mobile Solutions",
    location: "Los Angeles / Remote",
    type: "Full-time",
    salary: "$85k - $115k",
    description: "Create exceptional mobile experiences for iOS and Android platforms.",
    requirements: [
      "3+ years mobile development",
      "React Native or Flutter",
      "Native iOS/Android experience",
      "App Store deployment experience"
    ],
    responsibilities: [
      "Develop mobile applications",
      "Optimize app performance",
      "Implement UI/UX designs",
      "Maintain app store presence"
    ]
  }
]

export default function CareersClient() {
  const [selectedJob, setSelectedJob] = useState<typeof jobs[0] | null>(null)
  const [showApplicationForm, setShowApplicationForm] = useState(false)

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Open Positions</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Join our team of innovative technologists and help shape the future of business technology. 
            We offer competitive compensation, flexible work arrangements, and opportunities for growth.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Great Team</h3>
              <p className="text-gray-600">Work with talented professionals who are passionate about technology</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Hours</h3>
              <p className="text-gray-600">Work-life balance with flexible schedules and remote work options</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Competitive Pay</h3>
              <p className="text-gray-600">Attractive compensation packages with performance bonuses</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Great Locations</h3>
              <p className="text-gray-600">Modern offices in prime locations or work from anywhere</p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Current Openings</h2>
            <p className="text-xl text-gray-600">Find your next career opportunity</p>
          </div>
          <div className="grid gap-6">
            {jobs.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                      <p className="text-gray-600 mb-4">{job.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {job.type}
                        </span>
                        <span className="flex items-center">
                          <DollarSign className="w-4 h-4 mr-1" />
                          {job.salary}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-6">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            onClick={() => setSelectedJob(job)}
                            className="bg-blue-600 hover:bg-blue-700"
                          >
                            Read More
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto mx-4 sm:mx-auto">
                          <DialogHeader>
                            <DialogTitle className="text-2xl">{job.title}</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-6">
                            <div>
                              <h4 className="font-semibold text-lg mb-2">Job Description</h4>
                              <p className="text-gray-600">{job.description}</p>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-lg mb-2">Requirements</h4>
                              <ul className="space-y-2">
                                {job.requirements.map((req, index) => (
                                  <li key={index} className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span className="text-gray-600">{req}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-lg mb-2">Responsibilities</h4>
                              <ul className="space-y-2">
                                {job.responsibilities.map((resp, index) => (
                                  <li key={index} className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span className="text-gray-600">{resp}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div className="pt-4 border-t">
                              <Dialog open={showApplicationForm} onOpenChange={setShowApplicationForm}>
                                <DialogTrigger asChild>
                                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                                    Apply Now
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-md mx-4 sm:mx-auto">
                                  <DialogHeader>
                                    <DialogTitle>Apply for {job.title}</DialogTitle>
                                  </DialogHeader>
                                  <form className="space-y-4">
                                    <div>
                                      <Label htmlFor="name">Full Name</Label>
                                      <Input id="name" placeholder="Enter your full name" />
                                    </div>
                                    <div>
                                      <Label htmlFor="email">Email</Label>
                                      <Input id="email" type="email" placeholder="Enter your email" />
                                    </div>
                                    <div>
                                      <Label htmlFor="phone">Phone</Label>
                                      <Input id="phone" type="tel" placeholder="Enter your phone number" />
                                    </div>
                                    <div>
                                      <Label htmlFor="position">Position Applying For</Label>
                                      <Select defaultValue={job.title}>
                                        <SelectTrigger>
                                          <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                          {jobs.map((j) => (
                                            <SelectItem key={j.id} value={j.title}>
                                              {j.title}
                                            </SelectItem>
                                          ))}
                                        </SelectContent>
                                      </Select>
                                    </div>
                                    <div>
                                      <Label htmlFor="resume">Resume/CV</Label>
                                      <Input id="resume" type="file" accept=".pdf,.doc,.docx" />
                                    </div>
                                    <div>
                                      <Label htmlFor="notes">Additional Notes</Label>
                                      <Textarea id="notes" placeholder="Tell us why you're interested in this position" />
                                    </div>
                                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                                      Submit Application
                                    </Button>
                                  </form>
                                </DialogContent>
                              </Dialog>
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
            Don't See the Right Position?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team. 
            Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <GeneralModal
            title="Send General Application"
            submitType="Submit Application"
            triggerText="Send General Application"
            description="Don't see the right position? Send us your information and we'll keep you in mind for future opportunities."
            showFileUpload={true}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
          />
        </div>
      </section>
    </div>
  )
}
