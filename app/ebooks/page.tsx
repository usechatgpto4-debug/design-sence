import Link from "next/link";
import { Book, ChevronRight } from "lucide-react";

export default function EbooksCatalog() {
  const ebooks = [
    { id: "1", title: "Design Sence ฉบับลัด", price: "590", desc: "รวม 55 พื้นฐานและจิตวิทยาดีไซน์" },
    { id: "2", title: "Canva Masterclass", price: "450", desc: "เปลี่ยนงานบ้านๆ เป็นงานหลักล้าน" },
    { id: "3", title: "Color Theory Pro", price: "390", desc: "สูตรลับการจับคู่สีแบบตัวท็อป" },
  ];

  return (
    <main className="w-full max-w-7xl mx-auto px-6 py-12">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h1 className="text-4xl font-black text-[#111827] flex items-center gap-3">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
              <Book className="w-6 h-6 text-[#111827]" />
            </div>
            คลังหนังสือ E-Book
          </h1>
          <p className="text-gray-600 mt-2 text-lg">เลือกซื้อหนังสือที่คุณสนใจได้ที่นี่</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ebooks.map((book) => (
          <Link href={`/ebooks/${book.id}`} key={book.id}>
            <div className="bg-white/60 backdrop-blur-md border border-white p-6 rounded-3xl shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all cursor-pointer group">
              <div className="w-full aspect-[3/4] bg-gray-100 rounded-2xl mb-6 shadow-inner flex items-center justify-center border border-gray-200 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-gray-50 opacity-50"></div>
                <span className="text-gray-400 font-medium z-10">[ รูปปก {book.id} ]</span>
              </div>
              <h2 className="text-2xl font-bold text-[#111827]">{book.title}</h2>
              <p className="text-gray-500 mt-2 line-clamp-2">{book.desc}</p>
              
              <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xl font-black bg-accent text-[#111827] px-4 py-1.5 rounded-full shadow-sm">{book.price} ฿</span>
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-accent group-hover:text-[#111827] transition-colors">
                  <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-[#111827]" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
