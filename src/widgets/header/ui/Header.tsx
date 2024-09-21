import { NewClient } from "@/src/features/new-client";

export default function Header() {
  return (
    <>
      <div className="fixed bg-slate-300 left-0 top-0 w-full p-1">
        <div className="container mx-auto flex items-center gap-2">
          <NewClient />
          <NewClient />
        </div>
      </div>
      <div className=" h-[50px]"></div>
    </>
  );
}
