import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import SEO from '@/components/SEO';
import CTASection from '@/components/CTASection';
import { blogPosts } from '@/data/blog';

export default function BlogPage() {
  return (
    <>
      <SEO
        title="Electrical Blog & Resources | RSY Electric"
        description="Read our latest articles on home electrical safety, maintenance tips, and when to call a professional electrician in Miami Gardens."
        canonical="/blog"
      />

      <section className="bg-neutral-900 py-16 text-white">
        <div className="container-page text-center">
          <BookOpen className="h-12 w-12 text-accent-400 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Electrical Resources & Blog</h1>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
            Helpful articles, safety tips, and advice from your local residential electrical experts in Miami Gardens.
          </p>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container-page">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="card overflow-hidden flex flex-col hover:-translate-y-1 transition-transform group">
                <Link to={`/blog/${post.slug}`} className="block h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </Link>
                <div className="p-6 flex flex-col flex-1">
                  <div className="text-sm text-primary-600 font-semibold mb-2">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <h2 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-700 transition-colors">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-neutral-600 mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700"
                  >
                    Read More <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
