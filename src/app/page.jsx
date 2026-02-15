"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* ================= NAVBAR ================= */}
      <nav className="flex items-center justify-between px-6 py-4 border-b">
        <h1 className="text-2xl font-bold tracking-tight">
          StudySphere
        </h1>

        <div className="flex items-center gap-4">
          <Link href="/login">
            <Button variant="ghost">Login</Button>
          </Link>
          <Link href="/register">
            <Button>Get Started</Button>
          </Link>
        </div>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-b from-white to-gray-100">
        <h2 className="text-4xl md:text-5xl font-bold max-w-3xl leading-tight">
          Track Your Study.  
          Improve Your Focus.  
          Achieve More.
        </h2>

        <p className="mt-6 text-gray-600 max-w-xl">
          StudySphere helps you plan, track and analyze your study sessions
          so you can understand how you learn and boost productivity.
        </p>

        <div className="mt-8 flex gap-4">
          <Link href="/dashboard">
            <Button size="lg">Start Studying</Button>
          </Link>
          <Link href="/login">
            <Button size="lg" variant="outline">
              Login
            </Button>
          </Link>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          
          <div className="p-6 border rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">
              📚 Subject Management
            </h3>
            <p className="text-gray-600">
              Organize your subjects and set study goals efficiently.
            </p>
          </div>

          <div className="p-6 border rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">
              ⏱ Study Session Tracking
            </h3>
            <p className="text-gray-600">
              Log your study sessions and measure your focus level.
            </p>
          </div>

          <div className="p-6 border rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">
              📊 Analytics Dashboard
            </h3>
            <p className="text-gray-600">
              Visualize your progress with detailed charts and reports.
            </p>
          </div>

        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="px-6 py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold">
          Ready to Boost Your Productivity?
        </h2>

        <p className="mt-4 text-gray-600">
          Join StudySphere today and start tracking your progress.
        </p>

        <div className="mt-6">
          <Link href="/register">
            <Button size="lg">
              Create Free Account
            </Button>
          </Link>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="mt-auto border-t py-6 px-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} StudySphere. All rights reserved.
      </footer>

    </div>
  );
}
