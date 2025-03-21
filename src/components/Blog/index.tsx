import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";

const Blog = () => {
  // Sort blog posts by date (most recent first) and take the latest 3
  // Note: This assumes publishDate follows a format that can be compared correctly
  // For more complex date handling, we could parse with a library like date-fns
  const latestPosts = [...blogData]
    .sort((a, b) => {
      // Sort in descending order (newest first)
      // This is a simple string comparison which works for consistent date formats
      return b.publishDate.localeCompare(a.publishDate);
    })
    .slice(0, 3);

  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Our Latest Blogs"
          paragraph="Stay updated with our latest insights, tutorials, and industry trends in technology and development."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {latestPosts.map((blog) => (
            <div key={blog.id} className="w-full h-full flex">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
