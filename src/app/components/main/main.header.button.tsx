import Link from "next/link";
import React, { ReactElement } from "react";

type Props = {
  active: boolean;
  href: string;
  icon: ReactElement;
};

const HeaderButton = ({ active, href, icon }: Props) => {
  return (
    <Link href={href}>
      <div className={`
      ${active ? "bg-sky-700" : "bg-transparent hover:bg-sky-600"}
        flex items-center justify-center text-white text-3xl w-16 aspect-square`}>
        { icon }
      </div>
    </Link>
  );
};

export default HeaderButton;
