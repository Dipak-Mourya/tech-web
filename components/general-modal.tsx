"use client"

import { useState } from "react"
import { X, Upload } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

interface GeneralModalProps {
  title: string
  submitType: string
  triggerText: string
  description?: string
  showFileUpload?: boolean
  children?: React.ReactNode
  className?: string
}

export default function GeneralModal({ 
  title, 
  submitType, 
  triggerText, 
  description,
  showFileUpload = false,
  children,
  className = ""
}: GeneralModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
    file: null as File | null
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You can add your form submission logic here
    setIsOpen(false)
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      message: '',
      file: null
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData(prev => ({ ...prev, file }))
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children || (
          <Button className={className}>
            {triggerText}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-md mx-4 sm:mx-auto max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">{title}</DialogTitle>
          {description && (
            <p className="text-gray-600 text-center mt-2">{description}</p>
          )}
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          <div>
            <Label htmlFor="fullName">Full Name *</Label>
            <Input
              id="fullName"
              type="text"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
            />
          </div>
          
          <div>
            <Label htmlFor="message">Message / Inquiry Description</Label>
            <Textarea
              id="message"
              placeholder="Tell us about your project or inquiry..."
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
            />
          </div>
          
          {showFileUpload && (
            <div>
              <Label htmlFor="file">Upload Document (Optional)</Label>
              <div className="relative">
                <Input
                  id="file"
                  type="file"
                  accept=".pdf,.doc,.docx,.txt"
                  onChange={handleFileChange}
                  className="cursor-pointer"
                />
                <Upload className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
              {formData.file && (
                <p className="text-sm text-gray-600 mt-1">
                  Selected: {formData.file.name}
                </p>
              )}
            </div>
          )}
          
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 mt-6">
            {submitType}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
