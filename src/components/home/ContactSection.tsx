import Link from "next/link";
import { Mail, Phone, MapPin, Calendar, MessageCircle } from "lucide-react";

const EMAIL = "clients@hedgium.ai";
const PHONE = process.env.NEXT_PUBLIC_PHONE_NUMBER ?? "";
const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";

export default function ContactSection() {
  return (
    <section className="relative bg-base-100 py-20">

      <div className="max-w-4xl mx-auto px-4 lg:px-8">

        {/* headline */}
        <div className="text-center mb-12 space-y-6">

          <h2 className="text-2xl md:text-4xl font-semibold text-primary leading-relaxed">
            In a market dominated by directional risk,
            <br className="hidden md:block"/>
            we focus on systematic probability-driven alpha.
          </h2>

          <div className="flex justify-center">
            <Link href="/get-started" className="btn btn-primary lg:btn-md gap-2">
              <Calendar size={18} aria-hidden="true" />
              Let&apos;s get started — schedule an expert call
            </Link>
          </div>
        </div>


        {/* contact card */}
        <div className="bg-base-200 border rounded-xl p-4 md:p-6 border-base-300">

          <div className="grid md:grid-cols-2 gap-0">

            {/* contact info */}
            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <Mail className="text-primary" size={22} aria-hidden="true"/>
                <div>
                  <p className="text-sm text-base-content/90">Email</p>
                  <a href={`mailto:${EMAIL}`} className="font-semibold link link-hover">
                    {EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-primary" size={22} aria-hidden="true"/>
                <div>
                  <p className="text-sm text-base-content/90">Phone / WhatsApp</p>
                  {PHONE ? (
                    <a href={`tel:+91${PHONE.replace(/\D/g, "")}`} className="font-semibold link link-hover">
                      +91 {PHONE}
                    </a>
                  ) : (
                    <p className="font-semibold">—</p>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="text-primary mt-1" size={22} aria-hidden="true"/>
                <div>
                  <p className="text-sm text-base-content/90">Locations</p>
                  <p className="font-semibold leading-relaxed">
                    Haware City, Thane <br/>
                    Powai, Mumbai <br/>
                    Seawoods, Navi Mumbai
                  </p>
                </div>
              </div>

            </div>

            {/* whatsapp CTA */}
            <div className="flex flex-col md:border-l border-base-300 md:px-4 py-4 justify-center items-center md:items-start gap-4">

              <p className="text-base-content/90 text-base">
                Prefer WhatsApp? Send us a quick message and our team will get back to you shortly.
              </p>

              {WHATSAPP ? (
                <a
                  href={`https://wa.me/+91${WHATSAPP.replace(/\D/g, "")}?text=${encodeURIComponent("Hi, I'm interested in Hedgium. I'd like to schedule a call or learn more.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-primary gap-2"
                >
                  <MessageCircle size={18} aria-hidden="true" />
                  Send us a “Hi” on WhatsApp
                  <span className="sr-only"> (opens in new tab)</span>
                </a>
              ) : null}

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
