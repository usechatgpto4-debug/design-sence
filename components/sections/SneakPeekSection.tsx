export function SneakPeekSection() {
  return (
    <section className="relative w-full py-24 overflow-hidden">
      {/* Organic Blob Background using CSS border-radius */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-50">
        <div className="w-full max-w-4xl h-[600px] bg-accent/40 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] blur-3xl mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-black text-[#111827] mb-16 text-center">
          แอบดูเนื้อหาด้านใน
        </h2>

        {/* Sneak Peek Pages - Staggered layout */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-16 w-full">
          {[1, 2, 3].map((page, i) => (
            <div 
              key={i} 
              className={`w-full max-w-xs aspect-[3/4] bg-white rounded-2xl shadow-2xl border border-gray-100 transform transition-transform duration-500 hover:-translate-y-4 hover:rotate-2 ${i === 1 ? 'md:-translate-y-12' : i === 2 ? 'md:translate-y-8' : ''}`}
            >
              <div className="w-full h-full flex flex-col">
                <div className="h-10 border-b border-gray-100 flex items-center px-4 bg-gray-50 rounded-t-2xl">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                  </div>
                </div>
                <div className="flex-1 flex items-center justify-center text-gray-400 font-medium">
                  [ ตัวอย่างหน้า {page} ]
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
