import { Link } from "@/i18n/navigation";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-3">
      <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
        <span className="text-white font-bold text-lg">N</span>
      </div>
      <span className="text-black text-xl font-extrabold tracking-wide">
        Novecento
      </span>
    </Link>
  );
};

export default Logo;
