import { poppins } from "@/utils/fonts";
import Image from "next/image";

const Header = () => {
  return (
    <header className="p-3">
      <div className="max-w-screen-2xl mx-auto flex flex-col gap-2">
        <div className="flex items-center gap-1 justify-center cursor-pointer">
          <Image
            src={"/logo.webp"}
            alt={"logo"}
            width={40}
            height={40}
            className="w-9 md:w-auto h-9 md:h-auto"
            priority
          />
          <h1
            className={`${poppins.className} font-semibold md:font-bold text-base md:text-xl dark:text-white text-black`}
          >
            Todo CRUD API
          </h1>
        </div>
      </div>
    </header>
  );
};
export default Header;
