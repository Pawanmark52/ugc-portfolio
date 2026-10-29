# Pawan Soni - UGC Portfolio

React + TypeScript (Vite) client, Node + TypeScript GraphQL API (Apollo Server).

```bash
npm install
npm run dev        # API on :4000, site on :5173
npm run build
```

- Add work samples in `server/src/data.ts` (`works`): set `driveFileId` from the Drive share link
  (`drive.google.com/file/d/<ID>/view`). Thumbnail and click-through link are generated from it.
  The Drive file must be shared as "Anyone with the link" for the thumbnail to show.
- The contact form calls the `submitInquiry` mutation; entries are saved to `server/data/inquiries.json`.
- If the API is unreachable the client falls back to `client/src/fallback.ts` (keep in sync with `server/src/data.ts`).
- Deploy: set `VITE_GRAPHQL_URL` to the hosted API URL before `npm run build -w client`.
