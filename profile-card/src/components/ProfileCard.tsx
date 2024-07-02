import { RiGithubFill, RiLinkedinBoxFill, RiInstagramFill, RiTwitterXFill  } from "react-icons/ri";

function ProfileCard({ profileImage, title, category, link, blurb }) {
  return (
    <article className="w-full max-w-[340px] relative overflow-hidden bg-white shadow-md rounded-lg px-4 py-6">
      <div className="text-center mb-10">
        <img className="inline-block size-[3.75rem]" src={profileImage} />

        <div>
          <h2 className="text-lg font-semibold text-neutral-900 mb-[1px]">{title}</h2>
          <p>Front End Engineer @ Microsoft</p>
        </div>

        <p className="font-medium text-base text-neutral-600">{blurb}</p>
      </div>

      <div className="flex flex-col items-start gap-6">
        <a href={link}>Contact Me</a>

        <ul>
          <li><RiGithubFill/></li>
          <li><RiLinkedinBoxFill/></li>
          <li><RiInstagramFill/></li>
          <li><RiTwitterXFill/></li>
        </ul>
      </div>
    </article>
  );
}

export default ProfileCard;
