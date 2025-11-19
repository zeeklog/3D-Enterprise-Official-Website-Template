import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  showText?: boolean;
  imageClassName?: string;
  textClassName?: string;
};

const Logo = ({
  className,
  showText = true,
  imageClassName,
  textClassName,
}: LogoProps) => (
  <div className={cn("flex items-center space-x-2", className)}>
    <img
      src="/logo.png"
      alt="猫趴科技 Logo"
      className={cn("h-10 w-10 object-contain", imageClassName)}
      loading="lazy"
      decoding="async"
    />
    {showText && (
      <span className={cn("text-xl font-bold gradient-text", textClassName)}>
        猫趴科技
      </span>
    )}
  </div>
);

export default Logo;

