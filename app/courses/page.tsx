import Link from "next/link";
import { MonitorPlay, PlayCircle } from "lucide-react";

export default function CoursesHub() {
  const courses = [
    { id: "1", title: "Canva Pro Workshop", lessons: 12, duration: "3 ชม. 45 นาที", progress: 60 },
    { id: "2", title: "Layout Secret Secrets", lessons: 8, duration: "2 ชม. 10 นาที", progress: 0 },
  ];

  return (
    <main className="w-full max-w-7xl mx-auto px-6 py-12">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h1 className="text-4xl font-black text-[#111827] flex items-center gap-3">
            <div className="w-12 h-12 bg-[#111827] rounded-full flex items-center justify-center">
              <MonitorPlay className="w-6 h-6 text-accent" />
            </div>
            คอร์สเรียนของฉัน
          </h1>
          <p className="text-gray-600 mt-2 text-lg">เรียนต่อจากที่ค้างไว้ได้เลย</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <Link href={`/courses/${course.id}`} key={course.id}>
            <div className="bg-white/60 backdrop-blur-md border border-white p-6 rounded-3xl shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all cursor-pointer group">
              <div className="w-full aspect-video bg-gray-900 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden group-hover:ring-4 ring-accent transition-all">
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-800 to-gray-700 opacity-80"></div>
                <PlayCircle className="w-12 h-12 text-white/50 group-hover:text-accent group-hover:scale-110 transition-transform z-10" />
              </div>
              
              <h2 className="text-2xl font-bold text-[#111827]">{course.title}</h2>
              <p className="text-gray-500 mt-1 font-medium">{course.lessons} บทเรียน • {course.duration}</p>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex justify-between text-sm font-bold text-[#111827] mb-2">
                  <span>ความคืบหน้า</span>
                  <span>{course.progress}%</span>
                </div>
                <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-accent" 
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
