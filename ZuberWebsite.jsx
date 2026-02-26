import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ZuberWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Hi, I'm <span className="text-blue-400">Mohammed Zuber</span>
        </motion.h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-8">
          Trader | Entrepreneur | Digital Creator. I help people grow in trading
          and online business with smart strategies and discipline.
        </p>
        <Button className="rounded-2xl px-8 py-6 text-lg">
          Contact Me
        </Button>
      </section>

      {/* About Section */}
      <section className="px-6 py-16 max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        <Card className="bg-slate-800 border-none shadow-2xl rounded-2xl">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold mb-4">About Me</h2>
            <p className="text-slate-300 leading-relaxed">
              I specialize in gold trading (XAUUSD), funded account challenges,
              and risk management strategies. My goal is consistent profits and
              long-term financial freedom.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-none shadow-2xl rounded-2xl">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold mb-4">My Services</h2>
            <ul className="space-y-3 text-slate-300">
              <li>✔ Funded Account Strategy Guidance</li>
              <li>✔ Gold (XAUUSD) Trading Plans</li>
              <li>✔ Risk Management Coaching</li>
              <li>✔ Online Income Mentorship</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Contact Section */}
      <section className="bg-slate-800 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Get In Touch</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-slate-900 border-none rounded-2xl">
              <CardContent className="p-6 flex flex-col items-center">
                <Mail className="mb-4" />
                <p>Email@example.com</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-900 border-none rounded-2xl">
              <CardContent className="p-6 flex flex-col items-center">
                <Phone className="mb-4" />
                <p>+91 00000 00000</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-900 border-none rounded-2xl">
              <CardContent className="p-6 flex flex-col items-center">
                <MapPin className="mb-4" />
                <p>India</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-slate-400 text-sm">
        © {new Date().getFullYear()} Mohammed Zuber. All rights reserved.
      </footer>
    </div>
  );
}