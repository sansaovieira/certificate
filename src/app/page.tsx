import { Content } from "@/components/content";

export default function Home() {
  return (
    <>
      <span className="font-bold text-4xl">Página Inicial</span>
      <div className="border-dashed border border-zinc-500 w-full h-12 rounded-lg">
        <img src="../public/logo.png" alt="" />
      </div>
      <div className="m-auto 0">
        <Content />
      </div>
    </>
  );
}