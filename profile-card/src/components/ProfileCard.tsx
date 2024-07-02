import { RiArrowRightLine } from "react-icons/ri";

function ProfileCard({ coverImage, title, category, link, blurb }) {
  return (
    <article className="w-full max-w-[340px] relative overflow-hidden bg-white shadow-md rounded-lg">
      <div
        className="w-full h-[288px]"
        role="image"
        style={{
          backgroundImage: `url(${coverImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "100%",
          backgroundSize: "cover",
        }}
      ></div>

      <div className="px-4 py-6">
        <div className="flex flex-col items-start gap-2 mb-3">
          <a href={link}>
            <h2 className="text-lg font-semibold text-neutral-900 mb-[1px]">{title}</h2>
          </a>
        </div>

        <div className="flex flex-col items-start gap-6">
          <p className="font-medium text-base text-neutral-600">{blurb}</p>
          <a
            href={link}
            className="flex items-center gap-2.5 font-medium text-indigo-700"
          >
            Read more
            <RiArrowRightLine size={"1.25em"} />
          </a>
        </div>

        <a href={link} className="absolute inset-0" aria-label={title}></a>
      </div>
    </article>
  );
}

export default ProfileCard;
