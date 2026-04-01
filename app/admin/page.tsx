import { Users, DollarSign, BookOpen, MonitorPlay, PlusCircle, Edit, Trash2 } from "lucide-react";

export default function AdminDashboard() {
  return (
    <main className="w-full max-w-7xl mx-auto px-6 py-12">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h1 className="text-4xl font-black text-[#111827]">
            ระบบจัดการหลังบ้าน
          </h1>
          <p className="text-gray-600 mt-2 text-lg">Admin Dashboard</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        {[
          { label: "ยอดขายรวม", value: "฿ 45,200", icon: DollarSign, color: "text-green-600", bg: "bg-green-100" },
          { label: "สมาชิกทั้งหมด", value: "1,204", icon: Users, color: "text-blue-600", bg: "bg-blue-100" },
          { label: "หนังสือ E-book", value: "3 เล่ม", icon: BookOpen, color: "text-purple-600", bg: "bg-purple-100" },
          { label: "คอร์สเรียน", value: "2 คอร์ส", icon: MonitorPlay, color: "text-orange-600", bg: "bg-orange-100" },
        ].map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className="bg-white p-6 rounded-3xl shadow-md border border-gray-100 flex items-center gap-4">
              <div className={`w-14 h-14 rounded-full flex items-center justify-center ${stat.bg}`}>
                <Icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div>
                <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
                <p className="text-2xl font-black text-[#111827] mt-1">{stat.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Ebooks Table */}
        <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-[#111827] flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-accent" />
              จัดการหนังสือ 
            </h2>
            <button className="flex items-center gap-2 bg-[#111827] text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-gray-800 transition-colors">
              <PlusCircle className="w-4 h-4" />
              เพิ่มหนังสือ
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-100 text-gray-500 text-sm">
                  <th className="font-medium pb-3">ชื่อหนังสือ</th>
                  <th className="font-medium pb-3">ราคา</th>
                  <th className="font-medium pb-3 text-right">จัดการ</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  { name: "Design Sence", price: "590" },
                  { name: "Canva Masterclass", price: "450" },
                ].map((item, i) => (
                  <tr key={i} className="border-b border-gray-50 hover:bg-gray-50">
                    <td className="py-4 font-bold text-[#111827]">{item.name}</td>
                    <td className="py-4 text-gray-600">{item.price} ฿</td>
                    <td className="py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button className="p-2 bg-gray-100 rounded-lg text-gray-600 hover:text-[#111827] transition-colors"><Edit className="w-4 h-4" /></button>
                        <button className="p-2 bg-red-50 rounded-lg text-red-500 hover:text-red-700 transition-colors"><Trash2 className="w-4 h-4" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Courses Table */}
        <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-[#111827] flex items-center gap-2">
              <MonitorPlay className="w-5 h-5 text-accent" />
              จัดการคอร์สเรียน 
            </h2>
            <button className="flex items-center gap-2 bg-[#111827] text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-gray-800 transition-colors">
              <PlusCircle className="w-4 h-4" />
              เพิ่มคอร์ส
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-100 text-gray-500 text-sm">
                  <th className="font-medium pb-3">ชื่อคอร์ส</th>
                  <th className="font-medium pb-3">บทเรียน</th>
                  <th className="font-medium pb-3 text-right">จัดการ</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  { name: "Canva Pro Workshop", lessons: 12 },
                  { name: "Layout Secret", lessons: 8 },
                ].map((item, i) => (
                  <tr key={i} className="border-b border-gray-50 hover:bg-gray-50">
                    <td className="py-4 font-bold text-[#111827]">{item.name}</td>
                    <td className="py-4 text-gray-600">{item.lessons} EP</td>
                    <td className="py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button className="p-2 bg-gray-100 rounded-lg text-gray-600 hover:text-[#111827] transition-colors"><Edit className="w-4 h-4" /></button>
                        <button className="p-2 bg-red-50 rounded-lg text-red-500 hover:text-red-700 transition-colors"><Trash2 className="w-4 h-4" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
