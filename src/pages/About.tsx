import Header from "@/components/Header";
import { Activity, Heart, Users, Target } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container px-4 py-12 md:py-20">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Activity className="h-4 w-4" />
              About Us
            </div>
            <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
              About Jarurat Care
            </h1>
            <p className="text-lg text-muted-foreground">
              Transforming healthcare management through innovative technology
            </p>
          </div>

          {/* Mission */}
          <div className="mb-12 rounded-lg border border-border bg-card p-8 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold text-foreground">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              Jarurat Care is dedicated to revolutionizing patient record management by providing 
              healthcare professionals with a modern, intuitive, and efficient platform. Our mission 
              is to streamline healthcare workflows, improve patient care quality, and make medical 
              information accessible when and where it's needed most.
            </p>
          </div>

          {/* Core Values */}
          <div className="mb-12">
            <h2 className="mb-8 text-center text-2xl font-bold text-foreground">
              Our Core Values
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  Patient-Centric
                </h3>
                <p className="text-muted-foreground">
                  Every feature we build is designed with patient care and safety as the top priority.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  Innovation
                </h3>
                <p className="text-muted-foreground">
                  We continuously improve and adapt to meet the evolving needs of modern healthcare.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  Collaboration
                </h3>
                <p className="text-muted-foreground">
                  We believe in empowering healthcare teams to work together seamlessly.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Activity className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  Reliability
                </h3>
                <p className="text-muted-foreground">
                  Our platform is built on robust technology to ensure 24/7 availability and data security.
                </p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="rounded-lg border border-border bg-gradient-to-br from-primary/5 to-accent/5 p-8">
            <h2 className="mb-6 text-2xl font-bold text-foreground">Key Features</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Comprehensive Patient Records:</strong> Access complete patient information including contact details, medical history, and more.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Advanced Search:</strong> Quickly find patients by name with our intuitive search functionality.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Add New Patients:</strong> Easily register new patients with our streamlined form system.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Responsive Design:</strong> Access patient information on any device - desktop, tablet, or mobile.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Local Storage:</strong> Patient data is securely stored and persists across sessions.
                </span>
              </li>
            </ul>
          </div>

          {/* Technology Stack */}
          <div className="mt-12 text-center">
            <h2 className="mb-4 text-2xl font-bold text-foreground">Built With Modern Technology</h2>
            <p className="text-muted-foreground">
              React • TypeScript • Vite • Tailwind CSS • shadcn/ui
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
