"use client";

import Image from "next/image";
import { Phone, MessageCircle, ChevronDown, Zap, Shield, Clock, ArrowRight } from "lucide-react";

export default function Hero() {
  const marqueeText = "24시간 긴급출동 · 출장비 무료 · 내시경 무료 · 미해결시 0원 · 전국 출동 · ";

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-b from-primary-600 via-primary-700 to-navy-800">
      {/* Bright background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[80%] h-[50%] bg-primary-300/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-full h-[40%] bg-navy-800/50 blur-[80px]" />
      </div>

      {/* Geometric decorations - PC only */}
      <div className="hidden md:block absolute inset-0 pointer-events-none">
        <div className="absolute top-24 right-12 w-40 h-40 dot-grid opacity-15 float-slow" />
        <div className="absolute top-[30%] right-[8%] w-24 h-24 border border-white/10 rounded-full float-medium" />
        <div className="absolute top-[55%] right-[18%] w-8 h-8 bg-white/10 rounded-full float-slow" style={{ animationDelay: "-1s" }} />
        <div className="absolute bottom-[30%] left-[5%] w-20 h-20 border border-white/8 rounded-full float-medium" style={{ animationDelay: "-3s" }} />
      </div>

      {/* Top scrolling marquee */}
      <div className="relative z-10 mt-16 sm:mt-20 md:mt-24 border-y border-white/20 bg-white/10 md:backdrop-blur-sm py-2.5 sm:py-3 overflow-hidden">
        <div className="marquee-track">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="text-xs sm:text-sm text-white/70 font-medium tracking-wider whitespace-nowrap px-2">
              {marqueeText}
            </span>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-5 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Technician image - top */}
        <div className="relative w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] lg:w-[480px] lg:h-[480px] mb-3 sm:mb-4">
          {/* Glow behind image */}
          <div className="absolute inset-0 rounded-full bg-white/15 blur-[60px] scale-75" />
          <Image
            src="/images/technician-hero.png"
            alt="배관구조대 전문 기술자"
            fill
            className="object-contain drop-shadow-[0_5px_25px_rgba(255,255,255,0.15)]"
            priority
          />
        </div>

        {/* Text content - below */}
        <div className="text-center w-full max-w-2xl">
          {/* Live tag */}
          <div className="mb-3 sm:mb-5 flex items-center justify-center gap-2 sm:gap-3">
            <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
              <span className="ping-ring absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-emerald-400"></span>
            </span>
            <span className="text-white text-base sm:text-xl md:text-2xl font-black tracking-[0.12em] sm:tracking-[0.15em]">
              하수 누수 토탈케어
            </span>
          </div>

          {/* Giant brand */}
          <h1 className="text-[14vw] sm:text-[11vw] md:text-[9vw] lg:text-[7vw] font-black leading-[1] tracking-tight mb-3 sm:mb-4 hero-brand shine-text">
            배관구조대
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-lg md:text-xl text-white/85 max-w-md mx-auto leading-relaxed mb-6 sm:mb-8 px-2">
            하수구 막힘부터 누수까지,{" "}
            전문 기술진이 <span className="text-white font-semibold">직접 해결</span>합니다.
          </p>

          {/* Mini stat badges */}
          <div className="flex items-center justify-center gap-6 sm:gap-10 mb-7 sm:mb-10">
            {[
              { icon: Clock, value: "30분", label: "평균출동", neon: "neon-primary" },
              { icon: Zap, value: "10K+", label: "누적해결", neon: "neon-amber" },
              { icon: Shield, value: "₩0", label: "미해결시", neon: "neon-emerald" },
            ].map((s, i) => (
              <div key={i} className="text-center group">
                <s.icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${s.neon} mx-auto mb-1 sm:mb-1.5`} />
                <div className={`text-xl sm:text-2xl md:text-3xl font-black ${s.neon}`}>{s.value}</div>
                <div className="text-[9px] sm:text-[10px] text-white/80 mt-0.5 tracking-wider font-medium">{s.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-2.5 sm:gap-3 px-2">
            <a
              href="tel:01039712272"
              className="group relative inline-flex items-center justify-center gap-2.5 sm:gap-3 bg-gradient-to-r from-primary-400 to-primary-500 hover:from-primary-300 hover:to-primary-400 text-white font-bold text-base sm:text-lg py-4 sm:py-5 px-8 sm:px-10 rounded-full overflow-hidden"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" />
              <span className="relative z-10">010-3971-2272</span>
              <ArrowRight className="relative z-10 w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-50" />
            </a>
            <a
              href="sms:01039712272"
              className="inline-flex items-center justify-center gap-2.5 sm:gap-3 bg-white/20 border border-white/30 text-white font-bold text-base sm:text-lg py-4 sm:py-5 px-8 sm:px-10 rounded-full"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>문자상담</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 flex justify-center pb-4 sm:pb-6">
        <div className="flex flex-col items-center gap-1.5 sm:gap-2 text-white/60">
          <span className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-bounce" />
        </div>
      </div>

      {/* Bottom event banner */}
      <div className="relative z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
        <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 gradient-animate py-3 sm:py-4 px-4">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-2">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="bg-white text-amber-600 text-[10px] sm:text-xs font-black px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full animate-pulse-soft shrink-0">EVENT</span>
              <span className="text-white font-bold text-xs sm:text-base leading-tight">
                1만건 돌파 기념 — 출장비·내시경 검사 무료
              </span>
            </div>
            <a href="tel:01039712272" className="text-white/80 hover:text-white text-xs sm:text-sm font-medium transition-colors flex items-center gap-1">
              자세히 보기 <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
