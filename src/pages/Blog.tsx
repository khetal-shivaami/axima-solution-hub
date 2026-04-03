import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Search, Calendar, User, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogPosts, blogCategories } from "@/data/blogData";
import { motion } from "framer-motion";

const POSTS_PER_PAGE = 6;

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        activeCategory === "All" || post.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;

  return (
    <>
      <Helmet>
        <title>Blog | Axima - Cloud Solutions & IT Insights</title>
        <meta
          name="description"
          content="Read expert insights on cloud solutions, cybersecurity, AI, and digital transformation from Axima's team of specialists."
        />
      </Helmet>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="pt-32 pb-16 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-axima-blue/10 to-transparent" />
          <div className="container mx-auto text-center relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-foreground mb-4"
            >
              Axima Blog
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8"
            >
              Expert insights on cloud, security, AI, and digital transformation.
            </motion.p>

            {/* Search */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(POSTS_PER_PAGE);
                }}
                className="pl-10 bg-secondary border-border"
              />
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="pb-8 px-4">
          <div className="container mx-auto flex flex-wrap justify-center gap-2">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setVisibleCount(POSTS_PER_PAGE);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-axima-blue text-white"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Grid */}
        <section className="pb-20 px-4">
          <div className="container mx-auto">
            {filteredPosts.length === 0 ? (
              <p className="text-center text-muted-foreground py-16">
                No articles found. Try a different search or category.
              </p>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {visiblePosts.map((post, i) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link to={`/blog/${post.slug}`} className="group block h-full">
                        <div className="bg-card border border-border rounded-xl overflow-hidden h-full flex flex-col transition-shadow hover:shadow-lg hover:shadow-axima-blue/10">
                          <div className="aspect-video overflow-hidden">
                            <img
                              src={post.featuredImage}
                              alt={post.title}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                              loading="lazy"
                            />
                          </div>
                          <div className="p-6 flex flex-col flex-1">
                            <Badge
                              variant="secondary"
                              className="w-fit mb-3 text-axima-blue border-axima-blue/30"
                            >
                              {post.category}
                            </Badge>
                            <h2 className="text-lg font-semibold text-foreground mb-2 group-hover:text-axima-blue transition-colors line-clamp-2">
                              {post.title}
                            </h2>
                            <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-1">
                              {post.shortDescription}
                            </p>
                            <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto pt-4 border-t border-border">
                              <span className="flex items-center gap-1">
                                <User className="h-3 w-3" /> {post.author}
                              </span>
                              <span className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />{" "}
                                {new Date(post.publishDate).toLocaleDateString("en-IN", {
                                  year: "numeric",
                                  month: "short",
                                  day: "numeric",
                                })}
                              </span>
                            </div>
                            <div className="mt-4 flex items-center gap-1 text-axima-blue text-sm font-medium group-hover:gap-2 transition-all">
                              Read More <ArrowRight className="h-4 w-4" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {hasMore && (
                  <div className="text-center mt-12">
                    <Button
                      variant="outline"
                      onClick={() => setVisibleCount((c) => c + POSTS_PER_PAGE)}
                      className="border-axima-blue text-axima-blue hover:bg-axima-blue hover:text-white"
                    >
                      Load More
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
