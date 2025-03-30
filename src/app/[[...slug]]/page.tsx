import App from "src/App";

// export function generateStaticParams() {
//   return [{ slug: [""] }];
// }

export const dynamic = "force-dynamic";

export default function Page() {
  const randomSeed = Math.random();
  return <App stableRandSeed={randomSeed} />;
}
