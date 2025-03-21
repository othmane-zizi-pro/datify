import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Page | Datify",
  description: "Explore our latest articles and insights on technology, development, and innovation.",
};

// Define number of posts per page
const POSTS_PER_PAGE = 3;

type Props = {
  searchParams: {
    page?: string;
  };
};

export default function Blog({ searchParams }: Props) {
  // Get the current page from the URL or default to 1
  const currentPage = searchParams.page ? parseInt(searchParams.page) : 1;
  
  // Calculate total pages
  const totalPages = Math.ceil(blogData.length / POSTS_PER_PAGE);
  
  // Validate current page
  const validPage = Math.min(Math.max(1, currentPage), Math.max(1, totalPages));
  
  // Check if we should show pagination
  const shouldShowPagination = blogData.length > POSTS_PER_PAGE;
  
  // Get posts for the current page
  const startIndex = (validPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = blogData.slice(startIndex, endIndex);
  
  // Generate page numbers to display
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;
    
    if (totalPages <= maxPagesToShow) {
      // Show all pages if there are fewer than maxPagesToShow
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always include first page
      pageNumbers.push(1);
      
      // Calculate start and end of middle pages
      let start = Math.max(2, validPage - 1);
      let end = Math.min(totalPages - 1, validPage + 1);
      
      // Adjust if we're near the beginning
      if (validPage <= 3) {
        end = Math.min(totalPages - 1, 4);
      }
      
      // Adjust if we're near the end
      if (validPage >= totalPages - 2) {
        start = Math.max(2, totalPages - 3);
      }
      
      // Add ellipsis after first page if needed
      if (start > 2) {
        pageNumbers.push('...');
      }
      
      // Add middle pages
      for (let i = start; i <= end; i++) {
        pageNumbers.push(i);
      }
      
      // Add ellipsis before last page if needed
      if (end < totalPages - 1) {
        pageNumbers.push('...');
      }
      
      // Always include last page if it's not already included
      if (totalPages > 1) {
        pageNumbers.push(totalPages);
      }
    }
    
    return pageNumbers;
  };

  return (
    <>
      <Breadcrumb
        pageName="Blog"
        description="Explore our latest articles and insights on technology, development, and innovation."
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          {/* Display message if no posts are available */}
          {currentPosts.length === 0 ? (
            <div className="text-center py-10">
              <h3 className="text-xl font-bold">No blog posts available.</h3>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
              {currentPosts.map((blog) => (
                <div key={blog.id} className="w-full h-full flex">
                  <SingleBlog blog={blog} />
                </div>
              ))}
            </div>
          )}

          {shouldShowPagination && (
            <div className="flex justify-center mt-10">
              <div className="w-full px-4">
                <ul className="flex items-center justify-center pt-8">
                  {/* Previous page button */}
                  <li className="mx-1">
                    <Link
                      href={validPage > 1 ? `/blog?page=${validPage - 1}` : '#'}
                      className={`flex h-9 min-w-[36px] items-center justify-center rounded-md 
                        ${validPage === 1 
                          ? 'bg-body-color bg-opacity-30 cursor-not-allowed text-body-color' 
                          : 'bg-body-color bg-opacity-[15%] text-body-color hover:bg-primary hover:bg-opacity-100 hover:text-white'
                        } px-4 text-sm transition`}
                      aria-disabled={validPage === 1}
                      tabIndex={validPage === 1 ? -1 : undefined}
                    >
                      Prev
                    </Link>
                  </li>
                  
                  {/* Page numbers */}
                  {getPageNumbers().map((pageNum, index) => (
                    <li className="mx-1" key={index}>
                      {pageNum === '...' ? (
                        <span className="flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color">
                          ...
                        </span>
                      ) : (
                        <Link
                          href={`/blog?page=${pageNum}`}
                          className={`flex h-9 min-w-[36px] items-center justify-center rounded-md ${
                            validPage === pageNum 
                              ? "bg-primary text-white" 
                              : "bg-body-color bg-opacity-[15%] text-body-color hover:bg-primary hover:bg-opacity-100 hover:text-white"
                          } px-4 text-sm transition`}
                        >
                          {pageNum}
                        </Link>
                      )}
                    </li>
                  ))}
                  
                  {/* Next page button */}
                  <li className="mx-1">
                    <Link
                      href={validPage < totalPages ? `/blog?page=${validPage + 1}` : '#'}
                      className={`flex h-9 min-w-[36px] items-center justify-center rounded-md 
                        ${validPage >= totalPages 
                          ? 'bg-body-color bg-opacity-30 cursor-not-allowed text-body-color' 
                          : 'bg-body-color bg-opacity-[15%] text-body-color hover:bg-primary hover:bg-opacity-100 hover:text-white'
                        } px-4 text-sm transition`}
                      aria-disabled={validPage >= totalPages}
                      tabIndex={validPage >= totalPages ? -1 : undefined}
                    >
                      Next
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
