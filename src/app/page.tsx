
import {  HydrateClient } from "@/trpc/server";

export default async function Home() {

  return (
    <HydrateClient>
      <main className="flex min-h-[300px] flex-col items-center justify-center text-black">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            Future <span className="text-[hsl(280,100%,70%)]">project</span>
          </h1>
        </div>
      </main>
    </HydrateClient>
  );
}
