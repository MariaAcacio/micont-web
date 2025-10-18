export default function RoundedButton({
  onClick,
  icon,
}: {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  icon: React.ReactNode;
}): React.JSX.Element {
  return (
    <button
      onClick={onClick}
      className="w-8 h-8 hover:cursor-pointer bg-secondary/10 border border-gray-300 hover:bg-secondary/50 rounded-full flex items-center justify-center transition-all duration-300"
    >
      {icon}
    </button>
  );
}
