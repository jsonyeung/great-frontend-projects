interface TestimonialProps {
  name: string;
  handle: string;
  avatar: string;
  message: string;
}

function TestimonialCard({ name, handle, avatar, message }: TestimonialProps) {
  return (
    <div className="w-full max-w-[340px] bg-white shadow-md border-neutral-200 rounded-lg p-6">
      <div className="flex gap-4 mb-4">
        <img
          className="size-12 flex-shrink-0 overflow-hidden rounded-full"
          src={avatar}
        />

        <div>
          <h1 className="text-lg font-semibold mb-[1px]">{name}</h1>
          <p className="text-sm text-neutral-600">{handle}</p>
        </div>
      </div>

      <p className="text-base text-neutral-600 drop-shadow-sm">{message}</p>
    </div>
  );
}

export default TestimonialCard;
