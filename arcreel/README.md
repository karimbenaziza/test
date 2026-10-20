# ArcReel deployment

Deploy config for [ArcReel](https://github.com/ArcReel/ArcReel), an open-source,
self-hosted AI video production workspace (novel / script / product assets →
storyboards → generated video). It runs the official Docker image
[`arcreel/arcreel`](https://hub.docker.com/r/arcreel/arcreel), pinned to `0.33.0`.
This folder doesn't contain ArcReel's source code.

ArcReel is licensed under AGPL-3.0.

## Requirements

- Docker + Docker Compose v2
- ~2 GB RAM. You also need disk space for the generated media in `./projects`.
- An API key for each AI provider you want to use (text, image, video, TTS). You
  enter these in the ArcReel **Settings** page after you sign in.

## Run locally

```bash
cd arcreel
cp .env.example .env
docker compose up -d
```

Open <http://localhost:1241> and sign in as `admin`. If you leave `AUTH_PASSWORD`
empty, ArcReel generates a password on first start and writes it to `.env`:

```bash
grep AUTH_PASSWORD .env
```

## Deploy on a server with HTTPS

1. Point a DNS record (e.g. `arcreel.example.com`) at the server, and open ports 80 and 443.
2. Copy this folder to the server. In `.env`, set `DOMAIN=arcreel.example.com`
   and a strong `AUTH_PASSWORD` and `AUTH_TOKEN_SECRET` (`openssl rand -hex 32`).
3. Start ArcReel with the Caddy reverse proxy:

   ```bash
   docker compose --profile https up -d
   ```

Caddy gets a Let's Encrypt certificate and serves ArcReel at `https://$DOMAIN`.
ArcReel itself listens only on `127.0.0.1:1241`, so the only public way in is
HTTPS. Don't set `AUTH_ENABLED=false` on a reachable server.

## Operations

| Task    | Command |
| ------- | ------- |
| Logs    | `docker compose logs -f arcreel` |
| Upgrade | bump `ARCREEL_VERSION` in `.env`, then `docker compose pull && docker compose up -d` |
| Stop    | `docker compose --profile https down` |
| Backup  | archive `.env`, `projects/` (data + SQLite DB) and `claude_data/` |

To run with PostgreSQL instead of SQLite, set `DATABASE_URL` in `.env`. Upstream
provides a ready-made Postgres stack in
[`deploy/production/docker-compose.yml`](https://github.com/ArcReel/ArcReel/blob/main/deploy/production/docker-compose.yml).

The container runs with `seccomp:unconfined`, `apparmor:unconfined` and the
`NET_ADMIN` capability, as upstream requires. These are needed by the bubblewrap
sandbox that ArcReel's agent uses to run Bash commands.

More information is in the upstream docs:
[Getting started](https://docs.arc-reel.com/en/guide/getting-started) and
[Deployment & operations](https://docs.arc-reel.com/en/ops/deployment).
