import { useMemo } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Calendar, User, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogData";
import { motion } from "framer-motion";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  const relatedPosts = useMemo(() => {
    if (!post) return [];
    return blogPosts
      .filter((p) => p.id !== post.id)
      .sort((a, b) => (a.category === post.category ? -1 : 1))
      .slice(0, 3);
  }, [post]);

  if (!post) return <Navigate to="/blog" replace />;

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  const renderContent = (content: string) => {
    const lines = content.trim().split("\n");
    return lines.map((line, i) => {
      const trimmed = line.trim();
      if (!trimmed) return <br key={i} />;
      if (trimmed.startsWith("## "))
        return (
          <h2 key={i} className="text-2xl font-bold text-foreground mt-8 mb-4">
            {trimmed.slice(3)}
          </h2>
        );
      if (trimmed.startsWith("### "))
        return (
          <h3 key={i} className="text-xl font-semibold text-foreground mt-6 mb-3">
            {trimmed.slice(4)}
          </h3>
        );
      if (trimmed.startsWith("#### "))
        return (
          <h4 key={i} className="text-lg font-semibold text-foreground mt-4 mb-2">
            {trimmed.slice(5)}
          </h4>
        );
      if (trimmed.startsWith("> "))
        return (
          <blockquote
            key={i}
            className="border-l-4 border-axima-blue pl-4 my-4 italic text-muted-foreground"
          >
            {trimmed.slice(2)}
          </blockquote>
        );
      if (trimmed.startsWith("- **"))
        return (
          <li key={i} className="ml-6 mb-1 text-muted-foreground list-disc">
            <span
              dangerouslySetInnerHTML={{
                __html: trimmed
                  .slice(2)
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>'),
              }}
            />
          </li>
        );
      if (trimmed.startsWith("- "))
        return (
          <li key={i} className="ml-6 mb-1 text-muted-foreground list-disc">
            {trimmed.slice(2)}
          </li>
        );
      if (/^\d+\.\s/.test(trimmed))
        return (
          <li key={i} className="ml-6 mb-1 text-muted-foreground list-decimal">
            <span
              dangerouslySetInnerHTML={{
                __html: trimmed
                  .replace(/^\d+\.\s/, "")
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>'),
              }}
            />
          </li>
        );
      return (
        <p
          key={i}
          className="text-muted-foreground mb-3 leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: trimmed.replace(
              /\*\*(.*?)\*\*/g,
              '<strong class="text-foreground">$1</strong>'
            ),
          }}
        />
      );
    });
  };

  return (
    <>
      <Helmet>
        <title>{post.metaTitle}</title>
        <meta name="description" content={post.metaDescription} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            image: post.featuredImage,
            author: { "@type": "Person", name: post.author },
            datePublished: post.publishDate,
            description: post.metaDescription,
          })}
        </script>
      </Helmet>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero banner */}
        <div className="relative h-[50vh] min-h-[320px]">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>

        <article className="container mx-auto px-4 -mt-32 relative z-10 max-w-3xl pb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link
              to="/blog"
              className="inline-flex items-center gap-1 text-axima-blue text-sm mb-6 hover:underline"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </Link>

            <Badge variant="secondary" className="mb-4 text-axima-blue border-axima-blue/30">
              {post.category}
            </Badge>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
              <span className="flex items-center gap-1">
                <User className="h-4 w-4" /> {post.author}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />{" "}
                {new Date(post.publishDate).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>

            {/* Content */}
            <div className="prose-custom">{renderContent(post.content)}</div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-10 pt-6 border-t border-border">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-muted-foreground">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Share */}
            <div className="flex items-center gap-3 mt-6">
              <Share2 className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Share:</span>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-axima-blue transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-axima-blue transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-axima-blue transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-foreground mb-8">Related Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((rp) => (
                  <Link
                    key={rp.id}
                    to={`/blog/${rp.slug}`}
                    className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:shadow-axima-blue/10 transition-shadow"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={rp.featuredImage}
                        alt={rp.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4">
                      <Badge variant="secondary" className="mb-2 text-xs text-axima-blue border-axima-blue/30">
                        {rp.category}
                      </Badge>
                      <h3 className="text-sm font-semibold text-foreground group-hover:text-axima-blue transition-colors line-clamp-2">
                        {rp.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
};

export default BlogPost;
