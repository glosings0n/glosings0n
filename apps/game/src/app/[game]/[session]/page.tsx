import { SessionPlayerClient } from "@/components/SessionPlayerClient";
import { getArcadeGame } from "@repo/arcade";
import type { Metadata } from "next";

export async function generateMetadata(context: {
  params: Promise<{ game: string; session: string }>;
}): Promise<Metadata> {
  const { game: gameSlug, session } = await context.params;
  const game = getArcadeGame(gameSlug);
  if (!game) {
    return { title: "Game Not Found | glosings0n Arcade" };
  }
  return {
    title: `${game.titleEn} | #${session} | glosings0n Arcade`,
    description: game.taglineEn,
  };
}

export default async function GameSessionPage(context: {
  params: Promise<{ game: string; session: string }>;
}) {
  const { game, session } = await context.params;
  return <SessionPlayerClient gameSlug={game} rawSessionCode={session} />;
}
