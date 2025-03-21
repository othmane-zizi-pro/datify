import { redirect } from 'next/navigation';

export default function BlogDetailsPage() {
  // Redirect to the blog listing page
  redirect('/blog');
}
