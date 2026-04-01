import { ArrowRight, ShoppingCart } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 py-20 lg:py-32 flex flex-col lg:flex-row items-center gap-12">
      {/* Abstract Yellow Background Blob */}
      <div className="absolute top-0 right-0 -z-10 w-full max-w-2xl h-[600px] bg-accent/20 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/4 pointer-events-none"></div>

      {/* Left: E-book Cover */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl bg-white shadow-2xl overflow-hidden border border-gray-100 flex items-center justify-center">
          {/* Placeholder for Cover */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-200"></div>
          <span className="relative text-gray-400 font-medium">[ E-book Cover Image ]</span>
          <div className="absolute bottom-6 right-6 w-20 h-20 bg-accent rounded-full flex items-center justify-center text-black font-bold -rotate-12 shadow-lg">
            SALE!
          </div>
        </div>
      </div>

      {/* Right: Text Content */}
      <div className="w-full lg:w-1/2 flex flex-col items-start gap-8 z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-[#111827] font-medium text-sm">
          <span className="w-2 h-2 rounded-full bg-accent"></span>
          เวิร์คชอป Canva By DesignMeee
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight tracking-tight text-[#111827]">
          Design <span className="bg-accent text-[#111827] px-4 py-1 rounded-2xl inline-block -rotate-2 ml-2 shadow-lg">Sence</span>
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
          หนังสือรวม 55 พื้นฐาน<br />และจิตวิทยาดีไซน์ ฉบับลัด
        </h2>
        
        <p className="text-xl text-gray-600 font-medium bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-white/40 shadow-sm">
          อัดแน่นด้วยเทคนิคที่นำไปใช้งานได้จริงทันที
        </p>
        
        <button className="group flex items-center gap-3 bg-accent text-[#111827] px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl hover:shadow-accent/50 active:scale-95">
          <ShoppingCart className="w-6 h-6" />
          สั่งซื้อทันที
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
