import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, MapPin, Smartphone, Users, Leaf, QrCode, CheckCircle, Eye, Lock, Globe } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-amber-50">
      {/* Header */}
      <header className="bg-emerald-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="h-8 w-8 text-emerald-400" />
            <span className="text-2xl font-bold">HerbChain</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="hover:text-emerald-300 transition-colors">
              Features
            </a>
            <a href="#about" className="hover:text-emerald-300 transition-colors">
              About
            </a>
            <a href="#dashboards" className="hover:text-emerald-300 transition-colors">
              Dashboards
            </a>
            <a href="#transparency" className="hover:text-emerald-300 transition-colors">
              Transparency
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-white hover:bg-emerald-700">
              Log In
            </Button>
            <Button className="bg-emerald-600 hover:bg-emerald-500">Get Started</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <Badge className="mb-6 bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
            Free Traceability Solution
          </Badge>
          <h1 className="text-5xl lg:text-6xl font-bold text-emerald-900 leading-tight mb-6">
            Transparent herbs made simple for <span className="text-emerald-600">everyone</span>
          </h1>
          <p className="text-xl text-slate-700 mb-8 leading-relaxed">
            HerbChain is a free platform that shows the full story of Ayurvedic herbs with just one QR code scan. From
            farmer fields to consumer hands.
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 px-8">
              SEE IT IN ACTION
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="bg-gradient-to-br from-emerald-100 to-amber-100 rounded-3xl p-8 shadow-2xl">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <QrCode className="h-6 w-6 text-emerald-600" />
                <span className="font-semibold">Scan the QR Code</span>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg">
                  <MapPin className="h-5 w-5 text-emerald-600" />
                  <div>
                    <p className="font-medium">Organic ashwagandha</p>
                    <p className="text-sm text-slate-600">Farm: Rajesh Kumar, Rajasthan</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg">
                  <Shield className="h-5 w-5 text-amber-600" />
                  <div>
                    <p className="font-medium">Certified organic</p>
                    <p className="text-sm text-slate-600">Lab tested & verified</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Supply chain verified</p>
                    <p className="text-sm text-slate-600">Blockchain secured</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -top-4 -right-4 bg-emerald-600 text-white p-3 rounded-full shadow-lg">
            <Eye className="h-6 w-6" />
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="bg-amber-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">The truth shouldn't be hidden in herb trade.</h3>
                <img
                  src="/person-examining-herbs-in-traditional-market-with-.jpg"
                  alt="Traditional herb market"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>No ingredient authenticity</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Unknown origin</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Adulteration concerns</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">It should be one scan away.</h3>
                <img
                  src="/person-scanning-qr-code-on-herb-package-with-smart.jpg"
                  alt="QR code scanning"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                    <span>See what's inside</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                    <span>Know who made it</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                    <span>Understand the journey</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              We're building a future of Ayurveda, where transparency is the main ingredient.
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/farmer-using-smartphone-app-in-herb-field-with-blo.jpg"
                alt="Farmer using HerbChain app"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Transparency shouldn't come with a price tag.</h3>
              <p className="text-lg text-slate-700 mb-8">
                That's why we're sharing HerbChain for free, to connect producers and consumers through trust and
                transparency.
              </p>
              <Button className="bg-emerald-600 hover:bg-emerald-700">SEE HOW IT WORKS</Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="bg-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-900 mb-6">About HerbChain</h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Combining cutting-edge technology with India's traditional wisdom to create a globally trusted Ayurvedic
              ecosystem.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Our Mission</h3>
              <p className="text-lg text-slate-700 mb-6">
                The global demand for Ayurvedic medicines is rising rapidly, but trust and transparency remain major
                challenges. Issues like adulteration, mislabeling, and lack of origin verification reduce consumer
                confidence and threaten India's credibility as a leader in Ayurveda.
              </p>
              <p className="text-lg text-slate-700">
                HerbChain leverages Blockchain Technology, Geotagging, and AI to establish a tamper-proof, transparent,
                and efficient traceability system for Ayurvedic herbs from farmers to end consumers.
              </p>
            </div>
            <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl p-8">
              <img src="/traditional-ayurvedic-herbs-and-modern-technology-.jpg" alt="Traditional meets modern" className="w-full rounded-xl" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <Globe className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-3">Global Impact</h4>
                <p className="text-slate-600">
                  Strengthening consumer trust and promoting India's Ayurvedic exports on a global scale.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-3">Trust & Safety</h4>
                <p className="text-slate-600">
                  Immutable blockchain records ensure authenticity and prevent adulteration throughout the supply chain.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-3">Empowering Farmers</h4>
                <p className="text-slate-600">
                  Providing fair recognition to farmers and creating sustainable livelihoods in rural communities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dashboards Section */}
      <section id="dashboards" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Tailored Dashboards for Every Stakeholder</h2>
            <p className="text-xl text-slate-700">
              Each role in the supply chain gets a specialized interface designed for their specific needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-green-100 p-3 rounded-full w-fit mb-4">
                  <Leaf className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Farmer Dashboard</h3>
                <p className="text-slate-600 mb-4">
                  Upload geo-tagged farm data, cultivation methods, and harvest information with digital certificates.
                </p>
                <img src="/farmer-dashboard-interface-showing-field-mapping-a.jpg" alt="Farmer dashboard" className="w-full rounded-lg" />
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Processor Dashboard</h3>
                <p className="text-slate-600 mb-4">
                  Verify herb quality, update processing status, and manage batch information with lab reports.
                </p>
                <img src="/processor-dashboard-showing-quality-control-and-ba.jpg" alt="Processor dashboard" className="w-full rounded-lg" />
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-purple-100 p-3 rounded-full w-fit mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Distributor Dashboard</h3>
                <p className="text-slate-600 mb-4">
                  Track shipments, manage inventory, and update distribution records in real-time.
                </p>
                <img src="/distributor-dashboard-showing-logistics-tracking-a.jpg" alt="Distributor dashboard" className="w-full rounded-lg" />
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-red-100 p-3 rounded-full w-fit mb-4">
                  <Lock className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Regulator Dashboard</h3>
                <p className="text-slate-600 mb-4">
                  Monitor compliance, conduct audits, and verify certifications across the entire supply chain.
                </p>
                <img src="/regulator-dashboard-showing-compliance-monitoring-.jpg" alt="Regulator dashboard" className="w-full rounded-lg" />
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-orange-100 p-3 rounded-full w-fit mb-4">
                  <Smartphone className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Consumer Portal</h3>
                <p className="text-slate-600 mb-4">
                  Scan QR codes to view complete herb journey, authenticity certificates, and quality reports.
                </p>
                <img src="/consumer-mobile-app-showing-qr-scanner-and-herb-tr.jpg" alt="Consumer portal" className="w-full rounded-lg" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-amber-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">FOR HERB PRODUCERS</h2>
            <h3 className="text-3xl font-bold text-slate-800 mb-6">Transparency shouldn't be complicated.</h3>
            <p className="text-xl text-slate-700">HerbChain helps you show it. Simply and clearly.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="bg-emerald-100 p-4 rounded-full w-fit mx-auto mb-6">
                  <Leaf className="h-8 w-8 text-emerald-600" />
                </div>
                <h4 className="text-xl font-bold mb-4">Use it for free</h4>
                <p className="text-slate-600 mb-6">
                  Transparency should be the standard, not a privilege. Our platform is free for both producers and
                  consumers.
                </p>
                <img src="/free-platform-interface-showing-no-cost-barriers.jpg" alt="Free platform" className="w-full rounded-lg" />
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-6">
                  <QrCode className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold mb-4">Show what makes your product special</h4>
                <p className="text-slate-600 mb-6">
                  By telling your story, you highlight the ingredients, their origins, the care, and the values behind
                  the product.
                </p>
                <img src="/product-story-interface-showing-herb-journey-from-.jpg" alt="Product story" className="w-full rounded-lg" />
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="bg-purple-100 p-4 rounded-full w-fit mx-auto mb-6">
                  <Shield className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="text-xl font-bold mb-4">Build trust that lasts</h4>
                <p className="text-slate-600 mb-6">
                  When you stand behind your product, people feel it. HerbChain helps you show it clearly.
                </p>
                <img src="/trust-building-interface-showing-verified-certific.jpg" alt="Trust building" className="w-full rounded-lg" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Leaf className="h-8 w-8 text-emerald-400" />
                <span className="text-2xl font-bold">HerbChain</span>
              </div>
              <p className="text-emerald-200 mb-6">Building trust in Ayurveda through blockchain transparency.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Platform</h4>
              <ul className="space-y-2 text-emerald-200">
                <li>
                  <a href="#" className="hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Dashboards
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    API
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-emerald-200">
                <li>
                  <a href="#" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-emerald-200">
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-emerald-800 mt-12 pt-8 text-center text-emerald-200">
            <p>&copy; 2024 HerbChain. Building trust in traditional medicine through modern technology.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
