import { Play } from "lucide-react";

export function VideoSection() {
  return (
    <section className="relative w-full max-w-5xl mx-auto px-6 py-16">
      <div className="relative w-full aspect-video rounded-3xl bg-gray-900 shadow-2xl overflow-hidden border-4 border-white group cursor-pointer flex items-center justify-center">
        {/* Placeholder for Video */}
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-800 to-gray-600 blur-sm"></div>
        <div className="relative z-10 w-24 h-24 bg-accent rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(255,243,42,0.4)] group-hover:scale-110 transition-transform">
          <Play className="w-10 h-10 text-[#111827] fill-[#111827] ml-2" />
        </div>
        <p className="absolute bottom-6 left-6 text-white text-lg font-medium opacity-80">ดูวิดีโอแนะนำ E-book (16:9)</p>
      </div>
    </section>
  );
}
