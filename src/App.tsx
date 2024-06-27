import avatarImg from "./assets/profile-thumbnail.png";
import TestimonialCard from "./components/TestimonialCard";

import "@fontsource-variable/noto-sans";
import "./app.css";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F9FAFB] to-[#D2D6DB]">
      <div className="grid justify-items-center pt-[12.5rem] px-4">
        <TestimonialCard
          name="Sarah Dole"
          handle="@sarahdole"
          avatar={avatarImg}
          message={`I've been searching for high-quality abstract images for my design
          projects, and I'm thrilled to have found this platform. The variety
          and depth of creativity are astounding!`}
        />
      </div>
    </div>
  );
}

export default App;
