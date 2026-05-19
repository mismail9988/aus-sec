import Link from "next/link";
import { ReactNode } from "react";

interface RelatedPost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
}

interface BlogPostProps {
  title: string;
  category: string;
  date: string;
  readTime: string;
  children: ReactNode;
  relatedPosts?: RelatedPost[];
}

export default function BlogPost({ title, category, date, readTime, children, relatedPosts }: BlogPostProps) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    author: {
      "@type": "Organization",
      name: "Security Guard Company Melbourne",
      url: "https://securityguardcompanymelbourne.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Security Guard Company Melbourne",
      url: "https://securityguardcompanymelbourne.com",
    },
    datePublished: date,
    articleSection: category,
    inLanguage: "en-AU",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

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
          <div className="max-w-none text-[#4a4a4a] leading-relaxed
            [&>p]:mb-6 [&>p]:text-[17px] [&>p]:leading-8
            [&>h2]:text-2xl [&>h2]:font-black [&>h2]:text-[#1a1a2e] [&>h2]:uppercase [&>h2]:mt-12 [&>h2]:mb-4 [&>h2]:tracking-wide
            [&>h3]:text-lg [&>h3]:font-black [&>h3]:text-[#1a1a2e] [&>h3]:uppercase [&>h3]:mt-8 [&>h3]:mb-3
            [&>ul]:mb-6 [&>ul]:pl-0 [&>ul]:space-y-2
            [&>ul>li]:flex [&>ul>li]:gap-3 [&>ul>li]:items-start [&>ul>li]:text-[17px] [&>ul>li]:leading-7
            [&>ul>li]:before:content-[''] [&>ul>li]:before:w-1.5 [&>ul>li]:before:h-1.5 [&>ul>li]:before:bg-[#c8102e] [&>ul>li]:before:rounded-full [&>ul>li]:before:mt-2.5 [&>ul>li]:before:shrink-0
            [&>ol]:mb-6 [&>ol]:pl-6 [&>ol]:space-y-2 [&>ol]:list-decimal
            [&>ol>li]:text-[17px] [&>ol>li]:leading-7 [&>ol>li]:pl-1 [&>ol>li]:marker:text-[#c8102e] [&>ol>li]:marker:font-black
            [&>blockquote]:border-l-4 [&>blockquote]:border-[#c8102e] [&>blockquote]:pl-6 [&>blockquote]:py-2 [&>blockquote]:my-8 [&>blockquote]:bg-[#f4f4f4] [&>blockquote]:italic [&>blockquote]:text-[#4a4a4a]
            [&_strong]:font-bold [&_strong]:text-[#1a1a2e]
            [&_a]:text-[#c8102e] [&_a]:underline [&_a:hover]:text-[#a00d25]">
            {children}
          </div>

          <div className="mt-16 pt-10 border-t border-gray-100">
            <div className="bg-[#1a1a2e] p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-white font-black uppercase text-lg mb-2">Ready to Talk Security?</h3>
                <p className="text-gray-400 text-sm">Get a free, no-obligation security assessment for your business.</p>
              </div>
              <Link href="/contact" className="shrink-0 bg-[#c8102e] text-white font-bold px-6 py-3 text-sm uppercase tracking-widest hover:bg-[#a00d25] transition-colors">
                Get a Free Security Assessment
              </Link>
            </div>
          </div>

          {relatedPosts && relatedPosts.length > 0 && (
            <div className="mt-14">
              <h3 className="text-xl font-black text-[#1a1a2e] uppercase tracking-wide mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-gray-200">
                {relatedPosts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-white p-6 hover:shadow-md transition-shadow flex flex-col">
                    <span className="text-[#c8102e] text-xs font-bold uppercase tracking-widest mb-3">{post.category}</span>
                    <h4 className="text-[#1a1a2e] font-black text-base uppercase leading-tight mb-3 group-hover:text-[#c8102e] transition-colors flex-1">
                      {post.title}
                    </h4>
                    <p className="text-[#767676] text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center gap-1 mt-4 text-[#c8102e] text-xs font-bold uppercase tracking-wide group-hover:gap-2 transition-all">
                      Read More
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

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
