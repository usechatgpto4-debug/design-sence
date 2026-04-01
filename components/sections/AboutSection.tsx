import { BookOpen, Target, Palette, CheckCircle2 } from "lucide-react";

export function AboutSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left: What is this book? */}
        <div className="flex flex-col gap-6">
          <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
            <BookOpen className="w-6 h-6 text-[#111827]" />
          </div>
          <h3 className="text-3xl font-bold text-[#111827]">หนังสือเล่มนี้เกี่ยวกับอะไร?</h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            รวบรวม 55 กฎเหล็กและจิตวิทยาการออกแบบที่ไม่มีสอนในห้องเรียน แต่เป็นสิ่งที่ Designer ระดับ Top ใช้กันทุกวัน สรุปมาให้แล้วแบบสั้น กระชับ เข้าใจง่าย นำไปใช้กับงานได้ทันที
          </p>
          <ul className="space-y-4 mt-4">
            {["พื้นฐานการจัดวาง (Layout)", "การเลือกใช้สี (Color Theory)", "จิตวิทยาการมองเห็น (Visual Psychology)", "Typography สำหรับงานโฆษณา"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Who is it for? */}
        <div className="flex flex-col gap-6 bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-bl-full -z-10"></div>
          <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
            <Target className="w-6 h-6 text-[#111827]" />
          </div>
          <h3 className="text-3xl font-bold text-[#111827]">หนังสือเล่มนี้เหมาะกับใคร?</h3>
          <ul className="space-y-6 mt-2">
            <li className="flex gap-4">
              <div className="mt-1"><Palette className="w-5 h-5 text-gray-400" /></div>
              <div>
                <strong className="text-lg text-[#111827] block">มือใหม่ที่เพิ่งเริ่มออกแบบ</strong>
                <span className="text-gray-500">อยากได้ทางลัดในการทำให้งานดูแพงขึ้นทันที</span>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="mt-1"><Palette className="w-5 h-5 text-gray-400" /></div>
              <div>
                <strong className="text-lg text-[#111827] block">Content Creator / Marketer</strong>
                <span className="text-gray-500">ที่ต้องทำภาพประกอบเอง แต่รู้สึกว่างานยังไม่ดึงดูด</span>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="mt-1"><Palette className="w-5 h-5 text-gray-400" /></div>
              <div>
                <strong className="text-lg text-[#111827] block">เจ้าของธุรกิจ (SME)</strong>
                <span className="text-gray-500">ที่ทำกราฟิกโปรโมทเองด้วย Canva หรือเครื่องมืออื่นๆ</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
