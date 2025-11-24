import Image from "next/image";
import Logo from "@/public/aakarlogo.webp";

const Navlogo = () => {
  return (
    <div>
      <Image
        src={Logo}
        alt="Aakar Infra Services"
        width={150}
        height={30}
        className="hidden md:block"
      />
      <Image
        src={Logo}
        alt="Aakar Infra Services"
        width={110}
        height={30}
        className="block md:hidden"
      />
    </div>
  );
};

export default Navlogo;
