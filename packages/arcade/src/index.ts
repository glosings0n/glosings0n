export {
  ensureAnonymousParticipant,
  getFirebaseApp,
  getFirebaseAuth,
  getFirestoreDb,
  signInWithGoogle,
  signOutFirebase,
  subscribeAuthState,
  type AuthUser,
} from "./firebase";
export {
  adminRecordPlayerScore,
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
export {
  DEFAULT_MASCOT_ID,
  getTechMascot,
  normalizeMascotId,
  TECH_MASCOTS,
  type TechMascotId,
  type TechMascotMeta,
} from "./mascots";
export { generateQrDataUrl } from "./qr";
