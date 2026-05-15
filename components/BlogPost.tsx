import Link from "next/link";
import { ReactNode } from "react";

interface BlogPostProps {
  title: string;
  category: string;
  date: string;
  readTime: string;
  children: ReactNode;
}

export default function BlogPost({ title, category, date, readTime, children }: BlogPostProps) {
  return (
    <>
      <section className="bg-[#1a1a2e] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg,#ffffff08 0,#ffffff08 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-[#c8102e] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 mb-6">{category}</span>
          <h1 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight mb-6">{title}</h1>
          <div className="flex items-center gap-4 text-gray-400 text-sm">
            <span>{date}</span>
            <span>•</span>
            <span>{readTime}</span>
          </div>
        </div>
      </section>

      <div className="bg-[#f4f4f4] border-b border-gray-200 py-3">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-[#c8102e] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#c8102e] transition-colors">Insights</Link>
          <span>/</span>
          <span className="text-[#2d2d2d] font-semibold truncate max-w-[200px]">{title}</span>
        </div>
      </div>

      <article className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-[#4a4a4a] leading-relaxed">
            {children}
          </div>

          <div className="mt-16 pt-10 border-t border-gray-100">
            <div className="bg-[#1a1a2e] p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-white font-black uppercase text-lg mb-2">Ready to Talk Security?</h3>
                <p className="text-gray-400 text-sm">Get a free, no-obligation security assessment for your business.</p>
              </div>
              <Link href="/contact" className="shrink-0 bg-[#c8102e] text-white font-bold px-6 py-3 text-sm uppercase tracking-widest hover:bg-[#a00d25] transition-colors">
                Request a Quote
              </Link>
            </div>
          </div>

          <div className="mt-10">
            <Link href="/blog" className="inline-flex items-center gap-2 text-[#c8102e] font-bold text-sm uppercase tracking-wide hover:gap-3 transition-all">
              <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              Back to Insights
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
