// Each local government references its parent state via state_id.
// Mirrors the `local_governments` table in Postgres.sql.
export const localGovernmentData = [
  // ── LAGOS, Nigeria ──────────────────────────────────────────────────────────
  {
    name: "Ikeja",
    lg_id: "ikeja",
    state_id: "lagos",
    general_info: {
      localGovernmentDescription:
        "Administrative capital of Lagos State, home to the state secretariat, major markets, and a dense Yoruba population.",
      ethnicGroupsCount: 12,
      endangeredGroupsCount: 0,
      endangeredLanguagesCount: 0,
      tribesCount: 8,
    },
  },
];
