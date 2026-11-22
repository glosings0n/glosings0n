import { LeaderboardClient } from "@/components/LeaderboardClient";
import { getArcadeGame } from "@repo/arcade";
import type { Metadata } from "next";

export async function generateMetadata(context: {
  params: Promise<{ game: string; session: string }>;
}): Promise<Metadata> {
  const { game: gameSlug, session } = await context.params;
  const game = getArcadeGame(gameSlug);
  if (!game) {
    return { title: "Leaderboard | glosings0n Arcade" };
  }
  return {
    title: `${game.titleEn} Leaderboard | #${session} | glosings0n Arcade`,
    description: `Real-time event leaderboard for ${game.titleEn} (#${session}).`,
  };
}

export default async function GameLeaderboardPage(context: {
  params: Promise<{ game: string; session: string }>;
}) {
  const { game, session } = await context.params;
  return <LeaderboardClient gameSlug={game} rawSessionCode={session} />;
}
