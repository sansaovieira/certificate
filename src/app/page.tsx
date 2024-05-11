import { Content } from "@/components/content";

export default function Home() {
  return (
    <>
      <span className="font-bold text-4xl">Página Inicial</span>
      <img src="../public/logo.png" alt="" />
      <div className="m-auto 0">
        <Content />
      </div>
    </>
  );
}