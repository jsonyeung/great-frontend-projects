import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiInstagramFill,
  RiTwitterXFill,
} from "react-icons/ri";

function SocialMediaLinks(): JSX.Element {
  return (
    <ul className="flex gap-4" aria-label="social media links">
      <li className="size-9 flex justify-center items-center">
        <a href="#" aria-label="Github">
          <RiGithubFill className="size-5 fill-indigo-700" />
        </a>
      </li>
      <li className="size-9 flex justify-center items-center">
        <a href="#" aria-label="LinkedIn">
          <RiLinkedinBoxFill className="size-5 fill-indigo-700" />
        </a>
      </li>
      <li className="size-9 flex justify-center items-center">
        <a href="#" aria-label="Instagram">
          <RiInstagramFill className="size-5 fill-indigo-700" />
        </a>
      </li>
      <li className="size-9 flex justify-center items-center">
        <a href="#" aria-label="X">
          <RiTwitterXFill className="size-5 fill-indigo-700" />
        </a>
      </li>
    </ul>
  );
}

interface ProfileCardProps {
  profileImage: string;
  name: string;
  jobTitle: string;
  company: string;
  blurb: string;
  contactLink: string;
}

function ProfileCard({ 
  profileImage, 
  name, 
  jobTitle, 
  company, 
  blurb, 
  contactLink 
}: ProfileCardProps): JSX.Element {
  return (
    <article className="w-full max-w-[340px] overflow-hidden bg-white shadow-md rounded-lg px-4 py-6">
      <header className="flex flex-col items-center gap-6 text-center mb-10">
        <img 
          className="inline-block size-avatar rounded-full" 
          src={profileImage} 
          alt={`profile picture for ${name}`} 
        />

        <div>
          <h2 className="text-xl font-medium text-neutral-900 mb-1">{name}</h2>
          <p className="text-sm">{jobTitle} @ {company}</p>
        </div>

        <p className="font-medium text-base">{blurb}</p>
      </header>

      <footer className="flex flex-col items-center gap-6">
        <a
          href={contactLink}
          className="text-white font-medium bg-indigo-700 w-full text-center rounded p-2.5"
          aria-label={`Contact ${name}`}
        >
          Contact Me
        </a>

        <SocialMediaLinks />
      </footer>
    </article>
  );
}

export default ProfileCard;
