interface BadgeProps {
  children: React.ReactNode;
}

const Badge = ({ children }: BadgeProps) => {
  return (
    <span
      role="status"
      className="bg-yellow-50 text-orange-700 border border-yellow-300 rounded-full text-sm py-1 px-2"
    >
      {children}
    </span>
  );
};

export default Badge;
