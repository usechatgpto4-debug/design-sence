import { ShoppingCart, CheckCircle2 } from "lucide-react";

export default async function EbookDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  return (
    <main className="w-full max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-16 items-start relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute top-20 right-10 w-[600px] h-[600px] bg-accent/30 blur-[120px] rounded-full -z-10 mix-blend-multiply"></div>

      {/* Left Cover */}
      <div className="w-full md:w-1/3 flex flex-col gap-6 z-10">
        <div className="w-full aspect-[3/4] bg-white rounded-3xl shadow-2xl flex items-center justify-center border border-gray-100 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-white"></div>
          <span className="text-gray-400 font-medium z-10">[ รูปปกเล่ม {id} ]</span>
        </div>
        
        {/* Sneak Peek mini grid */}
        <h3 className="font-bold text-[#111827] mt-4">แอบดูเนื้อหาด้านใน</h3>
        <div className="flex gap-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="flex-1 aspect-[3/4] bg-white rounded-xl shadow-md border border-gray-100 flex items-center justify-center text-xs text-gray-400 font-medium cursor-pointer hover:scale-105 transition-transform">
              หน้า {i}
            </div>
          ))}
        </div>
      </div>

      {/* Right Content */}
      <div className="w-full md:w-2/3 flex flex-col gap-8 bg-white/70 backdrop-blur-2xl p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-white z-10">
        <div className="inline-block px-4 py-1.5 rounded-full bg-accent text-[#111827] font-bold text-sm self-start shadow-sm">
          BEST SELLER
        </div>
        
        <div>
          <h1 className="text-4xl md:text-5xl font-black text-[#111827] leading-tight">
            Design Sence หนังสือรวม 55 พื้นฐานและจิตวิทยาดีไซน์
          </h1>
          <p className="text-xl text-gray-500 mt-4 font-medium">ฉบับลัด นำไปใช้ได้ทันที</p>
        </div>

        <div className="prose prose-lg text-gray-600">
          <p>เรียนรู้วิธีการจัดวาง เลี่ยงสีเพี้ยน และการใช้จิตวิทยาเพื่อให้งานดีไซน์ของคุณออกมาดูแพงและหยุดสายตาคนดูได้ภายใน 3 วินาที!</p>
          <ul className="list-none pl-0 space-y-4 mt-8">
            <li className="flex items-center gap-3 font-medium text-gray-700">
              <div className="bg-accent/20 p-1.5 rounded-full"><CheckCircle2 className="text-[#111827] w-5 h-5 flex-shrink-0" /></div> 
              เหมาะกับคนเริ่มต้น
            </li>
            <li className="flex items-center gap-3 font-medium text-gray-700">
              <div className="bg-accent/20 p-1.5 rounded-full"><CheckCircle2 className="text-[#111827] w-5 h-5 flex-shrink-0" /></div> 
              สรุปมาให้แล้วเข้าใจง่าย
            </li>
            <li className="flex items-center gap-3 font-medium text-gray-700">
              <div className="bg-accent/20 p-1.5 rounded-full"><CheckCircle2 className="text-[#111827] w-5 h-5 flex-shrink-0" /></div> 
              มี Workshop ให้ทดลองทำจริง
            </li>
          </ul>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-300/50 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col">
            <span className="text-gray-400 line-through text-lg">990 THB</span>
            <span className="text-4xl font-black text-[#111827]">590 <span className="text-2xl font-bold">THB</span></span>
          </div>
          
          <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#111827] text-accent px-10 py-5 rounded-full font-black text-xl hover:scale-105 transition-all shadow-2xl hover:shadow-black/20">
            <ShoppingCart className="w-6 h-6" />
            ซื้อเลยตอนนี้
          </button>
        </div>
        
        <p className="text-center text-sm text-gray-400 mt-2 font-medium">ชำระเงินปลอดภัย 100% ผ่านระบบ Stripe</p>
      </div>
    </main>
  );
}
