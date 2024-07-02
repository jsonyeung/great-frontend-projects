import { RiArrowRightLine } from "react-icons/ri";

interface BadgeProps {
  children: React.ReactNode;
}

function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-block bg-green-50 text-green-700 border border-green-200 rounded-full text-sm py-[1px] px-2">
      {children}
    </span>
  );
}

interface BlogCardProps {
  coverImage: string;
  title: string;
  category: string;
  link: string;
  blurb: string;
}

function BlogCard({ coverImage, title, category, link, blurb }: BlogCardProps) {
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
          <Badge>{category}</Badge>
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

export default BlogCard;
