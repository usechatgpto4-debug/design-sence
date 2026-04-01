import { Gift } from "lucide-react";

export function PromotionsSection() {
  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-16">
      <div className="bg-[#111827] text-white rounded-[2.5rem] p-10 md:p-16 shadow-2xl relative overflow-hidden">
        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
        
        <h2 className="text-3xl md:text-5xl font-black mb-8">โปรโมชั่นพิเศษ <span className="text-accent">เฉพาะวันนี้</span></h2>
        
        <ul className="space-y-6">
          {[
            "รับฟรี! คอร์สวิดีโอ Workshop ออกแบบด้วย Canva (มูลค่า 1,590.-)",
            "รับฟรี! Template สไลด์และกราฟิกพร้อมใช้กว่า 100 แบบ",
            "อัปเดตเนื้อหาฟรีตลอดชีพ ไม่มีหมดอายุ",
            "เข้ากลุ่มลับ ปรึกษางานออกแบบกับผู้เขียนได้โดยตรง"
          ].map((promo, i) => (
            <li key={i} className="flex items-start gap-4 text-lg text-gray-300">
              <div className="bg-white/10 p-2 rounded-full mt-1 flex-shrink-0">
                <Gift className="w-5 h-5 text-accent" />
              </div>
              <span className="pt-1">{promo}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
