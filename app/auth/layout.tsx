import Image from "next/image"
import { FC, PropsWithChildren } from "react";

type Props = {
  children: React.ReactNode
}

const Layout: FC<Props> = function ({children}){
  return (
    <main className="my-auto mx-auto flex flex-col justify-center min-h-screen content-center flex-wrap space-y-2">
      <Image
        src="/COZA-Logo-black.png"
        width={100}
        height={100}
        alt="COZA logo"
        className="self-center"
      />
      {children}
    </main>
  );
}

export default Layout;
