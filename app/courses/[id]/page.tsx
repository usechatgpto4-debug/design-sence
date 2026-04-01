import { Play, Lock, CheckCircle, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default async function CoursePlayer({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <main className="w-full max-w-[1400px] mx-auto px-6 py-8 flex flex-col lg:flex-row gap-8">
      
      {/* Left: Video Player Area */}
      <div className="w-full lg:w-2/3 flex flex-col gap-6">
        <Link href="/courses" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#111827] font-medium w-fit transition-colors">
          <ChevronLeft className="w-5 h-5" />
          กลับไปหน้าคอร์สเรียน
        </Link>
        
        <div className="w-full aspect-video bg-black rounded-3xl shadow-2xl flex items-center justify-center border-4 border-[#111827] relative overflow-hidden">
          <Play className="w-16 h-16 text-white/20" />
          <div className="absolute bottom-4 right-4 bg-black/60 px-3 py-1 rounded-md text-white text-sm">
            [ Video Player Placeholder {id} ]
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-black text-[#111827]">EP 1: พื้นฐานการใช้ Canva เบื้องต้น</h1>
          <p className="text-gray-600 mt-2 text-lg">คอร์ส Canva Workshop By DesignMeee</p>
        </div>
        
        <div className="p-6 bg-white/60 backdrop-blur-md rounded-2xl border border-white shadow-sm mt-4">
          <h3 className="font-bold text-[#111827] mb-2 text-lg">รายละเอียดเนื้อหา</h3>
          <p className="text-gray-600 leading-relaxed">
            ในบทเรียนนี้เราจะมาเรียนรู้การตั้งค่าหน้ากระดาษ การใช้เครื่องมือพื้นฐาน และคีย์ลัดสำคัญที่จะช่วยให้คุณทำงานได้ไวขึ้นถึง 2 เท่า
          </p>
        </div>
      </div>

      {/* Right: Chapter List */}
      <div className="w-full lg:w-1/3 flex flex-col gap-6">
        <div className="bg-white/80 backdrop-blur-xl p-6 rounded-[2rem] shadow-xl border border-white lg:sticky lg:top-28">
          <h2 className="text-2xl font-black text-[#111827] mb-6 flex items-center gap-3">
            <span className="w-3 h-8 bg-accent rounded-full"></span>
            บทเรียนทั้งหมด
          </h2>
          
          <div className="flex flex-col gap-3">
            {[
              { ep: 1, title: "พื้นฐานการใช้ Canva", duration: "12:45", status: "playing" },
              { ep: 2, title: "การเลือกใช้ฟอนต์และสี", duration: "15:20", status: "completed" },
              { ep: 3, title: "สร้างเทมเพลต Social Media", duration: "20:10", status: "locked" },
              { ep: 4, title: "การทำภาพโฆษณา (Ads)", duration: "25:00", status: "locked" },
              { ep: 5, title: "Export และนำไปใช้งาน", duration: "10:15", status: "locked" },
            ].map((lesson, i) => (
              <div 
                key={i} 
                className={`p-4 rounded-2xl flex items-center gap-4 transition-all ${
                  lesson.status === 'playing' 
                    ? 'bg-[#111827] text-white shadow-lg scale-[1.02]' 
                    : 'bg-white hover:bg-gray-50 border border-gray-100 cursor-pointer'
                }`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  lesson.status === 'playing' ? 'bg-accent text-[#111827]' : 'bg-gray-100 text-gray-400'
                }`}>
                  {lesson.status === 'playing' ? <Play className="w-4 h-4 ml-0.5 fill-current" /> : 
                   lesson.status === 'completed' ? <CheckCircle className="w-5 h-5 text-green-500" /> : 
                   <Lock className="w-4 h-4" />}
                </div>
                
                <div className="flex-1">
                  <h4 className={`font-bold line-clamp-1 ${lesson.status === 'playing' ? 'text-white' : 'text-[#111827]'}`}>
                    EP {lesson.ep}: {lesson.title}
                  </h4>
                  <p className={`text-sm mt-0.5 ${lesson.status === 'playing' ? 'text-gray-300' : 'text-gray-500'}`}>
                    {lesson.duration}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </main>
  );
}
