import Image from "next/image";
import Link from "next/link";

interface ArchivingCardProps {
  imgSrc: string;

  alt: string;

  label: string;

  desc: string;
}

function ArchivingCard({ imgSrc, alt, label, desc }: ArchivingCardProps) {
  return (
    <Link
      href={label}
      target="_blank"
      className="group w-full max-w-[26rem] break-words rounded-2xl bg-[#f5f5f5] p-[2rem] transition-transform duration-200 ease-linear hover:scale-105 hover:cursor-pointer active:scale-100"
    >
      <div className="mb-4">
        <Image
          src={imgSrc}
          width={352}
          height={77}
          alt={alt}
          className="h-auto w-full"
        />
      </div>

      <div className="mb-4 text-blue-500 group-hover:underline group-hover:decoration-blue-500">
        {label}
      </div>

      <div className="text-sm font-semibold text-[#444]">{desc}</div>
    </Link>
  );
}

export default ArchivingCard;
