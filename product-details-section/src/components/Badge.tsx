interface BadgeProps {
  children: React.ReactNode;
}

function Badge({ children }: BadgeProps) {
  return (
    <span className="bg-green-50 text-green-700 border border-green-200 rounded-full text-sm py-1 px-2">
      {children}
    </span>
  );
}

export default Badge;
