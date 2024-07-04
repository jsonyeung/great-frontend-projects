import profileImg from "./assets/profile.png";
import ProfileCard from "./components/ProfileCard";

import "@fontsource-variable/noto-sans";
import "./app.css";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F9FAFB] to-[#D2D6DB]">
      <div className="grid justify-items-center pt-[12.5rem] px-4">
        <ProfileCard
          profileImage={profileImg}
          name="Sarah Dole"
          jobTitle="Front End Engineer"
          company="Microsoft"
          contactLink="#"
          blurb={`I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and ChatGPT developer.`}
        />
      </div>
    </div>
  );
}

export default App;
