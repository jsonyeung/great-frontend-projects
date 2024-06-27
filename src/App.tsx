import profileImg from "./assets/profile-thumbnail.png";

function App() {
  return (
    <div className="grid min-h-screen">
      <div className="bg-gradient-to-br from-[#F9FAFB] to-[#D2D6DB] pt-[12.5rem] px-4">
        {/* Testimonial Card */}
        <div className="max-w-[340px] bg-white shadow-md border-neutral-200 rounded-lg m-auto p-6">
          <div className="flex gap-4">
            <img
              className="size-12 overflow-hidden rounded-full"
              src={profileImg}
            />

            <div>
              <h1 className="text-lg font-semibold">Sarah Dole</h1>
              <p className="text-sm text-neutral-600">@sarahdole</p>
            </div>
          </div>

          <p className="text-base shadow-sm mt-4">
            I've been searching for high-quality abstract images for my design
            projects, and I'm thrilled to have found this platform. The variety
            and depth of creativity are astounding!
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
