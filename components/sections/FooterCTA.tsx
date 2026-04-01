import { ArrowRight, ShoppingCart } from "lucide-react";

export function FooterCTA() {
  return (
    <section className="w-full bg-[#f7f6f4] py-24 pb-32 mt-12">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Cover Thumbnail */}
        <div className="w-48 aspect-[3/4] bg-white rounded-xl shadow-xl flex items-center justify-center border border-gray-100 rotate-[-5deg]">
          <span className="text-gray-400 text-sm font-medium">[ รูปปก ]</span>
        </div>
        
        {/* Text & Button */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6">
          <h2 className="text-4xl md:text-5xl font-black text-[#111827]">
            พร้อมอัปเกรดงานดีไซน์ของคุณหรือยัง?
          </h2>
          <p className="text-xl text-gray-600 mb-2">
            เป็นเจ้าของ &quot;Design Sence&quot; ได้แล้ววันนี้ ในราคาพิเศษ
          </p>
          
          <button className="group flex items-center justify-center md:justify-start gap-3 bg-accent text-[#111827] px-10 py-5 rounded-full font-black text-xl hover:scale-105 transition-all shadow-xl hover:shadow-accent/50 active:scale-95">
            <ShoppingCart className="w-7 h-7" />
            สั่งซื้อทันทีเพียง xxx บาท
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
