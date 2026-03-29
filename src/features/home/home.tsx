import { banners } from "./data/banner-data";
import { Banners } from "./sections/banner/banners";

export default function Home() {
  const data = banners;
  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Home</h1>
      <p>Bem-vindo à página inicial do DevStore!</p>

      <Banners banners={data} />
    </main>
  );
}
