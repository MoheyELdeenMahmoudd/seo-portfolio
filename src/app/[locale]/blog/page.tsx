import { client } from '../../../sanity/client';
import { postsQuery } from '../../../sanity/queries';
import { urlForImage } from '../../../sanity/image';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const revalidate = 60;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isArabic = locale === 'ar' || locale.includes('-ar');
  return {
    title: isArabic ? 'المدونة | مقالات السيو' : 'Blog | SEO Articles',
    description: isArabic ? 'أحدث المقالات والاستراتيجيات في عالم السيو وتحسين محركات البحث.' : 'Latest articles and strategies in the world of SEO.',
  };
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const posts = await client.fetch(postsQuery);
  const isArabic = locale === 'ar' || locale.includes('-ar');
  const dir = isArabic ? 'rtl' : 'ltr';

  // Filter posts by the current base language (en or ar)
  const baseLocale = isArabic ? 'ar' : 'en';
  const localizedPosts = posts.filter((post: any) => post.language === baseLocale);

  return (
    <main dir={dir} className="min-h-screen bg-[var(--bg)] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 relative">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--text)] mb-6">
            {isArabic ? 'المدونة' : 'The Blog'}
          </h1>
          <p className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto">
            {isArabic ? 'أحدث المقالات والاستراتيجيات في عالم السيو وتحسين محركات البحث لتحقيق النمو المستدام.' : 'Latest articles and strategies in the world of SEO to achieve sustainable growth.'}
          </p>
        </div>

        {localizedPosts.length === 0 ? (
          <div className="text-center py-20 premium-card">
            <h2 className="text-2xl font-bold text-[var(--text-muted)]">
              {isArabic ? 'لا توجد مقالات منشورة حالياً.' : 'No articles published yet.'}
            </h2>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {localizedPosts.map((post: any) => (
              <Link key={post._id} href={`/${locale}/blog/${post.slug.current}`} className="group block h-full">
                <article className="premium-card overflow-hidden h-full flex flex-col transition-transform duration-300 group-hover:-translate-y-2">
                  {/* Image */}
                  <div className="relative w-full h-56 overflow-hidden">
                    {post.mainImage ? (
                      <Image
                        src={urlForImage(post.mainImage).url()}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-bold">{post.title}</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-xs text-primary font-bold mb-3 uppercase tracking-wider">
                      {new Date(post.publishedAt).toLocaleDateString(isArabic ? 'ar-EG' : 'en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                    <h2 className="text-2xl font-bold text-[var(--text)] mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.h1 || post.title}
                    </h2>
                    <p className="text-[var(--text-muted)] line-clamp-3 mb-6 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-secondary font-bold text-sm mt-auto">
                      {isArabic ? 'اقرأ المزيد' : 'Read More'}
                      <svg className={`w-4 h-4 ml-2 rtl:mr-2 rtl:ml-0 ${isArabic ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                      </svg>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
