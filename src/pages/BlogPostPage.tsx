import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft, Calendar } from 'lucide-react';
import SEO from '@/components/SEO';
import CTASection from '@/components/CTASection';
import { blogPosts } from '@/data/blog';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      <SEO
        title={post.metaTitle}
        description={post.metaDescription}
        canonical={`/blog/${post.slug}`}
      />

      <article>
        {/* Header */}
        <header className="bg-neutral-900 py-16 lg:py-24 text-white">
          <div className="container-page max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent-400 hover:text-accent-300 mb-8 transition-colors">
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </Link>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-2 text-neutral-400">
              <Calendar className="h-5 w-5" />
              <span>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="container-page max-w-4xl -mt-8 relative z-10 hidden md:block">
           <img
             src={post.image}
             alt={post.title}
             className="w-full h-96 object-cover rounded-2xl shadow-xl"
           />
        </div>

        {/* Content */}
        <div className="section-padding bg-white">
          <div className="container-page max-w-3xl">
            <div 
              className="prose prose-lg prose-primary max-w-none prose-headings:font-bold prose-headings:text-neutral-900 prose-p:text-neutral-600 prose-a:text-primary-600 prose-img:rounded-xl"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </article>

      <CTASection />
    </>
  );
}
