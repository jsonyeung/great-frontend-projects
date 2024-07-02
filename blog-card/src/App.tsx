import coverImg from "./assets/blog-post-thumbnail.jpg";
import BlogCard from "./components/BlogCard";

import "@fontsource-variable/noto-sans";
import "./app.css";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F9FAFB] to-[#D2D6DB]">
      <div className="grid justify-items-center pt-[7.5rem] px-4">
        <BlogCard
          title="Top 5 Living Room Inspirations"
          link="#"
          category="Interior"
          coverImage={coverImg}
          blurb={`Curated vibrants colors for your living, make it pop & calm in the same time.`}
        />
      </div>
    </div>
  );
}

export default App;
