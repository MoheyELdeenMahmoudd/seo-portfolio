import { client } from '../../../../sanity/client';
import { postBySlugQuery } from '../../../../sanity/queries';
import { urlForImage } from '../../../../sanity/image';
import { PortableText } from 'next-sanity';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const revalidate = 60; // Revalidate every 60 seconds

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  const { slug, locale } = await params;
  const post = await client.fetch(postBySlugQuery, { slug });

  if (!post) {
    notFound();
  }

  // Determine text direction
  const isArabic = locale === 'ar' || locale.includes('-ar');
  const dir = isArabic ? 'rtl' : 'ltr';

  const imageUrl = post.mainImage ? urlForImage(post.mainImage).url() : '';
  const backgroundText = post.h1 || post.title;

  return (
    <main dir={dir} className="min-h-screen bg-[var(--bg)] pb-24">
      {/* Premium Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center overflow-hidden">
        {/* Background Image & Overlay */}
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={post.title}
            fill
            priority
            className="object-cover z-0"
          />
        ) : (
          <div className="absolute inset-0 bg-[var(--bg-card)] z-0" />
        )}
        {/* Dark Blue Overlay */}
        <div className="absolute inset-0 bg-blue-950/80 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent z-10" />

        {/* Faded Background Text */}
        <div className="absolute inset-0 flex items-center justify-center z-10 overflow-hidden opacity-5 select-none pointer-events-none">
          <span className="text-[15rem] font-black text-white whitespace-nowrap">
            {backgroundText}
          </span>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto w-full px-6 relative z-20">
          <div className={`flex flex-col max-w-3xl ${isArabic ? 'border-r-4 border-white pr-6' : 'border-l-4 border-white pl-6'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-tight">
              {post.h1 || post.title}
            </h1>
            
            {(post.ctaText && post.ctaLink) && (
              <div className="flex">
                <a
                  href={post.ctaLink}
                  className="bg-white text-blue-900 px-6 py-3 rounded-xl font-bold flex items-center gap-3 hover:bg-gray-100 transition-colors shadow-lg"
                >
                  {post.ctaText}
                  <svg className={`w-5 h-5 ${isArabic ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"/>
                    <path d="m12 5 7 7-7 7"/>
                  </svg>
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="max-w-4xl mx-auto px-6 mt-16 relative z-20">
        <div className="premium-card p-8 md:p-12 prose prose-lg dark:prose-invert max-w-none prose-headings:text-primary prose-a:text-secondary hover:prose-a:text-primary prose-img:rounded-2xl">
          {post.body ? (
            <PortableText value={post.body} />
          ) : (
            <p className="text-center text-[var(--text-muted)]">
              {isArabic ? 'المحتوى قريباً...' : 'Content coming soon...'}
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
