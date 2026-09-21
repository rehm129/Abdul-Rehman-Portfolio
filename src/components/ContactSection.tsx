import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MessageCircle, ArrowUpRight, Copy, Check, ExternalLink, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const copyToClipboard = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2500);
  };

  return (
    <section
      id="contact"
      className="relative w-full py-28 sm:py-40 bg-[#0B0B0F] text-[#F5F5F5] border-t border-white/5 overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7C3AED]/08 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
        {/* Availability Badge */}
        <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-[#101014] border border-white/10 text-xs font-mono mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-zinc-300 uppercase tracking-wider">
            {PERSONAL_INFO.status}
          </span>
        </div>

        {/* Section Headline */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <h2 className="font-display font-bold text-4xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-white leading-[1.05]">
            <span>LET'S BUILD </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
              SOMETHING{' '}
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#A78BFA] to-[#22D3EE]">
              WORTH SEEING.
            </span>
          </h2>

          <p className="mt-8 text-lg sm:text-xl text-zinc-400 font-normal max-w-xl leading-relaxed">
            Have a project? Need a website? Need design? Need AI automation? Let's talk.
          </p>
        </div>

        {/* Contact Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Primary Email Channel Card */}
          <div className="p-8 rounded-3xl bg-[#101016] border border-white/10 flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/5 flex items-center justify-center text-[#22D3EE] mb-6">
                <Mail className="w-6 h-6" />
              </div>

              <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                DIRECT INQUIRY CHANNELS
              </span>
              <h3 className="font-display font-bold text-2xl text-white mt-1 mb-4">
                EMAIL DIRECTLY
              </h3>
              <p className="text-sm text-zinc-400 mb-6">
                Available for design consultation, contract frontend engineering, or custom AI automation workflows.
              </p>

              {/* Email Options List */}
              <div className="space-y-3">
                {PERSONAL_INFO.emails.map((email) => {
                  const isCopied = copiedEmail === email;
                  return (
                    <div
                      key={email}
                      className="p-3.5 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between gap-2"
                    >
                      <a
                        href={`mailto:${email}`}
                        className="text-xs sm:text-sm font-mono text-zinc-200 hover:text-[#22D3EE] transition-colors truncate"
                      >
                        {email}
                      </a>
                      <button
                        onClick={() => copyToClipboard(email)}
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors shrink-0 text-xs font-mono flex items-center space-x-1"
                        title="Copy Email"
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-[10px] text-emerald-400">COPIED</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span className="text-[10px]">COPY</span>
                          </>
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5">
              <a
                href={`mailto:${PERSONAL_INFO.emails[0]}`}
                className="w-full inline-flex items-center justify-center space-x-2 py-3.5 rounded-full bg-white text-black font-display font-semibold text-sm hover:bg-zinc-200 transition-colors shadow-lg"
              >
                <span>OPEN EMAIL COMPOSER</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Instant Messaging & WhatsApp Card */}
          <div className="p-8 rounded-3xl bg-[#101016] border border-white/10 flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
                <MessageCircle className="w-6 h-6" />
              </div>

              <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                FAST RESPONSE
              </span>
              <h3 className="font-display font-bold text-2xl text-white mt-1 mb-4">
                WHATSAPP CHAT
              </h3>
              <p className="text-sm text-zinc-400 mb-6">
                Direct phone and WhatsApp messaging for expedited consultations, quick questions, and project kickoffs.
              </p>

              <div className="p-4 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between mb-6">
                <div className="flex flex-col">
                  <span className="text-[11px] font-mono text-zinc-500">PHONE / WHATSAPP</span>
                  <span className="font-mono text-base text-zinc-200 mt-0.5">
                    {PERSONAL_INFO.whatsapp}
                  </span>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5">
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 py-3.5 rounded-full bg-emerald-500 text-black font-display font-semibold text-sm hover:bg-emerald-400 transition-colors shadow-[0_0_20px_rgba(16,185,129,0.3)]"
              >
                <span>START WHATSAPP CHAT</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Social Presence Hub */}
        <div className="p-8 rounded-3xl bg-[#0F0F14] border border-white/5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
            <div>
              <span className="text-xs font-mono text-zinc-500 uppercase">OFFICIAL CHANNELS</span>
              <h4 className="font-display font-bold text-xl text-white mt-0.5">
                CREATIVE TECH & CODE PROFILES
              </h4>
            </div>
            <span className="text-xs font-mono text-zinc-500">
              ALL HANDLES VERIFIED @Balushi_Tech
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {PERSONAL_INFO.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#8B5CF6]/50 hover:bg-white/[0.05] transition-all flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-zinc-400 group-hover:text-white transition-colors">
                    {social.name}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-[#22D3EE] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <span className="font-mono text-sm font-semibold text-zinc-200 group-hover:text-cyan-200 truncate">
                  {social.handle}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
