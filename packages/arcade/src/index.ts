export {
  getFirebaseApp,
  getFirebaseAuth,
  getFirestoreDb,
  signInWithGoogle,
  signOutFirebase,
  subscribeAuthState,
  type AuthUser,
} from "./firebase";
export {
  buildSessionId,
  createArcadeSession,
  deleteArcadeSession,
  deletePlayerScore,
  getNextSequentialCode,
  normalizeSessionCode,
  subscribeAllSessions,
  subscribeArcadeConfig,
  subscribeSession,
  subscribeSessionLeaderboard,
  submitPlayerScore,
  updateArcadeConfig,
  updateArcadeSession,
  type ArcadeConfigDoc,
  type ArcadeSession,
  type PlayerScoreEntry,
  type ScoreMeta,
  type SessionStatus,
} from "./firestore";
export {
  ARCADE_GAMES,
  formatScoreMetric,
  getArcadeGame,
  type ArcadeGameMeta,
  type GameCategory,
  type GameSortOrder,
} from "./games";
export { generateQrDataUrl } from "./qr";
