import { Star } from "lucide-react";

export function ReviewsSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black text-[#111827] mb-4">เสียงตอบรับจากผู้เรียน</h2>
        <p className="text-xl text-gray-500">ผลงานและยอดขายที่เปลี่ยนไปหลังนำเทคนิคไปใช้</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { name: "คุณเอิง", role: "พนักงานออฟฟิศ", text: "ปกติทำสไลด์นำเสนองานแล้วดูรกมาก พอได้อ่านเล่มนี้และจัดวางตามกฎ Rule of Thirds งานดูโปรขึ้นทันที หัวหน้าชมเลยค่ะ" },
          { name: "คุณแบงค์", role: "เจ้าของแบรนด์ออนไลน์", text: "เทคนิคการใช้สีกับตัวหนังสือช่วยได้เยอะมากครับ ยิงแอดแล้วค่า CTR ดีขึ้นชัดเจน เพราะคนหยุดดูภาพเรามากขึ้น" },
          { name: "คุณมายด์", role: "Content Creator", text: "ชอบที่มี Workshop Canva ให้ทำตามด้วย ไม่ใช่แค่ทฤษฎี แต่พาทำจนได้งานจริง เอาไปรับงานฟรีแลนซ์ได้เลย คุ้มมาก!" }
        ].map((review, i) => (
          <div key={i} className="bg-white/60 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-white flex flex-col">
            <div className="flex gap-1 mb-6">
              {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-5 h-5 fill-accent text-accent" />)}
            </div>
            <p className="text-gray-700 leading-relaxed mb-8 flex-1">&quot;{review.text}&quot;</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-200"></div>
              <div>
                <strong className="block text-[#111827]">{review.name}</strong>
                <span className="text-sm text-gray-500">{review.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
