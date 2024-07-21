import { XMarkIcon } from "@heroicons/react/24/solid";
import useDrawerStore from "./drawer-store";

type Props = {
  children: React.ReactNode;
  title?: string;
  isOpen: boolean;
  closeDrawer: () =>  void;
  openDrawer: () => void;
};

export default function Drawer({ children, title, isOpen, closeDrawer, openDrawer }: Props) {
  // const { isOpen, closeDrawer, openDrawer } = useDrawerStore();

  return (
    <main
      className={`fixed overflow-hidden z-10 bg-white bg-opacity-90 inset-0 transform ease-in-out ${
        isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0 "
          : " transition-all delay-500 opacity-0 translate-x-full "
      }`}
    >
      <section
        className={`w-screen max-w-xl right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform ${
          isOpen ? " translate-x-0" : " translate-x-full "
        }`}
      >
        <div className="p-2">
          <div className="flex justify-between text-gray-400 items-center pb-5">
            <h2>{title}</h2>
            <XMarkIcon height={20} width={20} onClick={() => closeDrawer()} />
          </div>
          {children}
        </div>
      </section>
    </main>
  );
}
