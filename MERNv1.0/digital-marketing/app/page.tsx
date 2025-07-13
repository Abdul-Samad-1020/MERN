"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  BarChart3,
  Globe,
  Megaphone,
  Search,
  Share2,
  Star,
  Target,
  TrendingUp,
  Users,
  Zap,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
} from "lucide-react"
import Link from "next/link"

// Custom hook for intersection observer
const useInView = (threshold = 0.1) => {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  return [ref, isInView] as const
}

// Counter animation component
const AnimatedCounter = ({
  end,
  duration = 2000,
  suffix = "",
}: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const [ref, isInView] = useInView(0.5)

  useEffect(() => {
    if (isInView && !hasStarted) {
      setHasStarted(true)
      let startTime: number
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)
        setCount(Math.floor(progress * end))
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }
  }, [isInView, hasStarted, end, duration])

  return (
    <div ref={ref} className="text-2xl font-bold text-blue-600">
      {count}
      {suffix}
    </div>
  )
}

export default function DigitalMarketingAgency() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const [heroRef, heroInView] = useInView(0.3)
  const [servicesRef, servicesInView] = useInView(0.2)
  const [resultsRef, resultsInView] = useInView(0.2)
  const [testimonialsRef, testimonialsInView] = useInView(0.2)
  const [aboutRef, aboutInView] = useInView(0.2)
  const [contactRef, contactInView] = useInView(0.2)

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Header */}
      <header
        className={`px-4 lg:px-6 h-16 flex items-center border-b sticky top-0 z-50 transition-all duration-300 ${
          scrollY > 50 ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        <Link className="flex items-center justify-center group" href="#">
          <Zap className="h-8 w-8 text-blue-600 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
          <span className="ml-2 text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
            DigitalBoost
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
          {["Services", "About", "Results", "Contact"].map((item, index) => (
            <Link
              key={item}
              className="text-sm font-medium hover:text-blue-600 transition-all duration-300 hover:scale-105 relative group"
              href={`#${item.toLowerCase()}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        <Button className="ml-4 hidden sm:inline-flex bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg">
          Get Started
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="ml-auto md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`absolute top-16 left-0 right-0 bg-white border-b shadow-lg md:hidden transition-all duration-300 ${
            isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <nav className="flex flex-col p-4 space-y-4">
            {["Services", "About", "Results", "Contact"].map((item) => (
              <Link
                key={item}
                className="text-sm font-medium hover:text-blue-600 transition-colors duration-300 py-2"
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Button className="bg-blue-600 hover:bg-blue-700 transition-all duration-300">Get Started</Button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
            <div
              className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10" ref={heroRef}>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge
                  variant="outline"
                  className={`px-3 py-1 transition-all duration-1000 ${
                    heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ animationDelay: "200ms" }}
                >
                  🚀 #1 Digital Marketing Agency
                </Badge>
                <h1
                  className={`text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none transition-all duration-1000 ${
                    heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
                  style={{ animationDelay: "400ms" }}
                >
                  Grow Your Business with
                  <span className="text-blue-600 inline-block hover:scale-105 transition-transform duration-300">
                    {" "}
                    Digital Excellence
                  </span>
                </h1>
                <p
                  className={`mx-auto max-w-[700px] text-gray-500 md:text-xl transition-all duration-1000 ${
                    heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ animationDelay: "600ms" }}
                >
                  We help businesses scale through data-driven digital marketing strategies. From SEO to social media,
                  we deliver results that matter.
                </p>
              </div>
              <div
                className={`space-x-4 transition-all duration-1000 ${
                  heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ animationDelay: "800ms" }}
              >
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                >
                  Start Growing Today
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="transition-all duration-300 hover:scale-105 hover:shadow-lg bg-transparent"
                >
                  View Our Work
                </Button>
              </div>
              <div
                className={`flex items-center space-x-8 pt-8 transition-all duration-1000 ${
                  heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ animationDelay: "1000ms" }}
              >
                <div className="text-center group hover:scale-110 transition-transform duration-300">
                  <AnimatedCounter end={500} suffix="+" />
                  <div className="text-sm text-gray-500">Happy Clients</div>
                </div>
                <div className="text-center group hover:scale-110 transition-transform duration-300">
                  <AnimatedCounter end={250} suffix="%" />
                  <div className="text-sm text-gray-500">Avg ROI Increase</div>
                </div>
                <div className="text-center group hover:scale-110 transition-transform duration-300">
                  <AnimatedCounter end={5} suffix="+" />
                  <div className="text-sm text-gray-500">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32" ref={servicesRef}>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2
                  className={`text-3xl font-bold tracking-tighter sm:text-5xl transition-all duration-1000 ${
                    servicesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
                >
                  Our Services
                </h2>
                <p
                  className={`max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed transition-all duration-1000 ${
                    servicesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ animationDelay: "200ms" }}
                >
                  Comprehensive digital marketing solutions tailored to your business goals
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {[
                {
                  icon: Search,
                  title: "Search Engine Optimization",
                  description: "Dominate search results and drive organic traffic with our proven SEO strategies.",
                  features: ["Keyword Research & Strategy", "On-Page Optimization", "Link Building"],
                },
                {
                  icon: Target,
                  title: "Pay-Per-Click Advertising",
                  description: "Maximize ROI with targeted PPC campaigns across Google, Facebook, and more.",
                  features: ["Google Ads Management", "Facebook & Instagram Ads", "Campaign Optimization"],
                },
                {
                  icon: Share2,
                  title: "Social Media Marketing",
                  description: "Build brand awareness and engage your audience across all social platforms.",
                  features: ["Content Creation", "Community Management", "Influencer Partnerships"],
                },
                {
                  icon: Megaphone,
                  title: "Content Marketing",
                  description: "Create compelling content that converts visitors into customers.",
                  features: ["Blog Writing", "Video Production", "Email Campaigns"],
                },
                {
                  icon: BarChart3,
                  title: "Analytics & Reporting",
                  description: "Track performance and optimize campaigns with detailed analytics.",
                  features: ["Performance Tracking", "Custom Dashboards", "Monthly Reports"],
                },
                {
                  icon: Globe,
                  title: "Web Development",
                  description: "Build fast, responsive websites optimized for conversions.",
                  features: ["Responsive Design", "E-commerce Solutions", "CRO Optimization"],
                },
              ].map((service, index) => (
                <Card
                  key={service.title}
                  className={`hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group ${
                    servicesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
                  style={{ animationDelay: `${400 + index * 100}ms` }}
                >
                  <CardHeader>
                    <service.icon className="h-12 w-12 text-blue-600 mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" />
                    <CardTitle className="group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={feature}
                          className={`flex items-center transition-all duration-300 ${
                            servicesInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                          }`}
                          style={{ animationDelay: `${600 + index * 100 + featureIndex * 50}ms` }}
                        >
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 transition-transform duration-300 group-hover:scale-110" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section id="results" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50" ref={resultsRef}>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2
                  className={`text-3xl font-bold tracking-tighter sm:text-5xl transition-all duration-1000 ${
                    resultsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
                >
                  Proven Results
                </h2>
                <p
                  className={`max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed transition-all duration-1000 ${
                    resultsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ animationDelay: "200ms" }}
                >
                  See how we've helped businesses like yours achieve remarkable growth
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {[
                {
                  icon: TrendingUp,
                  iconColor: "text-green-500",
                  title: "E-commerce Store",
                  subtitle: "Fashion Retailer",
                  metrics: [
                    { label: "Revenue Increase", value: "+340%", color: "text-green-500" },
                    { label: "Organic Traffic", value: "+280%", color: "text-blue-500" },
                    { label: "Conversion Rate", value: "+150%", color: "text-purple-500" },
                  ],
                },
                {
                  icon: Users,
                  iconColor: "text-blue-500",
                  title: "SaaS Company",
                  subtitle: "B2B Software",
                  metrics: [
                    { label: "Lead Generation", value: "+420%", color: "text-green-500" },
                    { label: "Cost Per Lead", value: "-65%", color: "text-blue-500" },
                    { label: "Customer Acquisition", value: "+200%", color: "text-purple-500" },
                  ],
                },
                {
                  icon: Target,
                  iconColor: "text-purple-500",
                  title: "Local Business",
                  subtitle: "Restaurant Chain",
                  metrics: [
                    { label: "Local Visibility", value: "+500%", color: "text-green-500" },
                    { label: "Online Orders", value: "+380%", color: "text-blue-500" },
                    { label: "Customer Reviews", value: "+250%", color: "text-purple-500" },
                  ],
                },
              ].map((result, index) => (
                <Card
                  key={result.title}
                  className={`hover:shadow-xl transition-all duration-500 hover:scale-105 group ${
                    resultsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
                  style={{ animationDelay: `${400 + index * 200}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <result.icon
                        className={`h-8 w-8 ${result.iconColor} transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}
                      />
                      <div>
                        <CardTitle className="text-2xl group-hover:text-blue-600 transition-colors duration-300">
                          {result.title}
                        </CardTitle>
                        <CardDescription>{result.subtitle}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {result.metrics.map((metric, metricIndex) => (
                        <div
                          key={metric.label}
                          className={`flex justify-between transition-all duration-500 ${
                            resultsInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                          }`}
                          style={{ animationDelay: `${600 + index * 200 + metricIndex * 100}ms` }}
                        >
                          <span>{metric.label}</span>
                          <span
                            className={`font-bold ${metric.color} transition-all duration-300 group-hover:scale-110`}
                          >
                            {metric.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-12 md:py-24 lg:py-32" ref={testimonialsRef}>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2
                  className={`text-3xl font-bold tracking-tighter sm:text-5xl transition-all duration-1000 ${
                    testimonialsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
                >
                  What Our Clients Say
                </h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              {[
                {
                  quote:
                    "DigitalBoost transformed our online presence completely. Our revenue increased by 340% in just 6 months!",
                  author: "Sarah Mitchell",
                  role: "CEO, Fashion Forward",
                  initials: "SM",
                  bgColor: "bg-blue-100",
                  textColor: "text-blue-600",
                },
                {
                  quote:
                    "The team's expertise in PPC advertising helped us reduce our cost per lead by 65% while increasing quality leads.",
                  author: "Michael Johnson",
                  role: "Marketing Director, TechFlow",
                  initials: "MJ",
                  bgColor: "bg-green-100",
                  textColor: "text-green-600",
                },
              ].map((testimonial, index) => (
                <Card
                  key={testimonial.author}
                  className={`hover:shadow-xl transition-all duration-500 hover:scale-105 group ${
                    testimonialsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
                  style={{ animationDelay: `${400 + index * 200}ms` }}
                >
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 fill-yellow-400 text-yellow-400 transition-all duration-300 ${
                            testimonialsInView ? "opacity-100 scale-100" : "opacity-0 scale-0"
                          }`}
                          style={{ animationDelay: `${600 + index * 200 + i * 50}ms` }}
                        />
                      ))}
                    </div>
                    <blockquote
                      className={`text-lg font-medium mb-4 transition-all duration-1000 ${
                        testimonialsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      }`}
                      style={{ animationDelay: `${800 + index * 200}ms` }}
                    >
                      "{testimonial.quote}"
                    </blockquote>
                    <div
                      className={`flex items-center space-x-4 transition-all duration-1000 ${
                        testimonialsInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                      }`}
                      style={{ animationDelay: `${1000 + index * 200}ms` }}
                    >
                      <div
                        className={`w-12 h-12 ${testimonial.bgColor} rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110`}
                      >
                        <span className={`${testimonial.textColor} font-semibold`}>{testimonial.initials}</span>
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.author}</div>
                        <div className="text-sm text-gray-500">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50" ref={aboutRef}>
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2
                    className={`text-3xl font-bold tracking-tighter sm:text-5xl transition-all duration-1000 ${
                      aboutInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                    }`}
                  >
                    Why Choose DigitalBoost?
                  </h2>
                  <p
                    className={`max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed transition-all duration-1000 ${
                      aboutInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ animationDelay: "200ms" }}
                  >
                    We're not just another marketing agency. We're your growth partners, committed to delivering
                    measurable results.
                  </p>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      title: "Data-Driven Approach",
                      description: "Every decision backed by analytics and performance data",
                    },
                    {
                      title: "Transparent Reporting",
                      description: "Real-time dashboards and monthly performance reports",
                    },
                    {
                      title: "Dedicated Account Manager",
                      description: "Your personal marketing expert, always available",
                    },
                  ].map((item, index) => (
                    <div
                      key={item.title}
                      className={`flex items-start space-x-3 transition-all duration-1000 hover:translate-x-2 ${
                        aboutInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                      }`}
                      style={{ animationDelay: `${400 + index * 200}ms` }}
                    >
                      <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 transition-all duration-300 hover:scale-110" />
                      <div>
                        <h3 className="font-semibold transition-colors duration-300 hover:text-blue-600">
                          {item.title}
                        </h3>
                        <p className="text-gray-500">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className={`mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center transition-all duration-1000 hover:scale-105 ${
                  aboutInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
                }`}
                style={{ animationDelay: "600ms" }}
              >
                <div className="text-center">
                  <BarChart3 className="h-24 w-24 text-blue-600 mx-auto mb-4 transition-all duration-500 hover:scale-110 hover:rotate-12" />
                  <h3 className="text-2xl font-bold text-gray-900">Growth Analytics</h3>
                  <p className="text-gray-600">Real-time performance tracking</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32" ref={contactRef}>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2
                  className={`text-3xl font-bold tracking-tighter sm:text-5xl transition-all duration-1000 ${
                    contactInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
                >
                  Ready to Grow Your Business?
                </h2>
                <p
                  className={`max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed transition-all duration-1000 ${
                    contactInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ animationDelay: "200ms" }}
                >
                  Get a free consultation and discover how we can help you achieve your marketing goals.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Card
                className={`hover:shadow-xl transition-all duration-500 ${
                  contactInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ animationDelay: "400ms" }}
              >
                <CardHeader>
                  <CardTitle>Get Your Free Marketing Audit</CardTitle>
                  <CardDescription>
                    Tell us about your business and we'll provide a comprehensive marketing analysis.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        placeholder="First Name"
                        className="transition-all duration-300 focus:scale-105 focus:shadow-lg"
                      />
                      <Input
                        placeholder="Last Name"
                        className="transition-all duration-300 focus:scale-105 focus:shadow-lg"
                      />
                    </div>
                    <Input
                      type="email"
                      placeholder="Email Address"
                      className="transition-all duration-300 focus:scale-105 focus:shadow-lg"
                    />
                    <Input
                      placeholder="Company Name"
                      className="transition-all duration-300 focus:scale-105 focus:shadow-lg"
                    />
                    <Input
                      placeholder="Website URL"
                      className="transition-all duration-300 focus:scale-105 focus:shadow-lg"
                    />
                    <Textarea
                      placeholder="Tell us about your marketing goals..."
                      className="transition-all duration-300 focus:scale-105 focus:shadow-lg"
                    />
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-xl group">
                      Get Free Audit
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div
                className={`space-y-6 transition-all duration-1000 ${
                  contactInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
                }`}
                style={{ animationDelay: "600ms" }}
              >
                <div>
                  <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
                  <p className="text-gray-500 mb-6">
                    Ready to take your digital marketing to the next level? Contact us today for a free consultation.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: Phone, text: "(555) 123-4567" },
                    { icon: Mail, text: "hello@digitalboost.com" },
                    { icon: MapPin, text: "123 Marketing St, Digital City, DC 12345" },
                  ].map((contact, index) => (
                    <div
                      key={contact.text}
                      className={`flex items-center space-x-3 transition-all duration-500 hover:translate-x-2 hover:text-blue-600 ${
                        contactInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      }`}
                      style={{ animationDelay: `${800 + index * 100}ms` }}
                    >
                      <contact.icon className="h-5 w-5 text-blue-600 transition-all duration-300 hover:scale-110" />
                      <span>{contact.text}</span>
                    </div>
                  ))}
                </div>

                <div
                  className={`pt-6 transition-all duration-1000 ${
                    contactInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ animationDelay: "1000ms" }}
                >
                  <h4 className="font-semibold mb-4">What You'll Get:</h4>
                  <ul className="space-y-2">
                    {[
                      "Comprehensive website audit",
                      "Competitor analysis report",
                      "Custom growth strategy",
                      "30-minute strategy call",
                    ].map((item, index) => (
                      <li
                        key={item}
                        className={`flex items-center space-x-2 transition-all duration-500 hover:translate-x-2 ${
                          contactInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                        }`}
                        style={{ animationDelay: `${1200 + index * 100}ms` }}
                      >
                        <CheckCircle className="h-4 w-4 text-green-500 transition-all duration-300 hover:scale-110" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-50">
        <div className="flex items-center space-x-2 group">
          <Zap className="h-6 w-6 text-blue-600 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
          <span className="font-bold transition-colors duration-300 group-hover:text-blue-600">DigitalBoost</span>
        </div>
        <p className="text-xs text-gray-500 sm:ml-4">© 2024 DigitalBoost. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
            <Link
              key={item}
              className="text-xs hover:underline underline-offset-4 transition-all duration-300 hover:text-blue-600 hover:scale-105"
              href="#"
            >
              {item}
            </Link>
          ))}
        </nav>
      </footer>
    </div>
  )
}
