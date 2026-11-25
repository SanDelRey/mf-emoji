import { mkdirSync, writeFileSync } from 'node:fs';

// the one emoji, picked for the moment: a hug, warm to any stranger.
const EMOJI = '🫂';
const dir = (process.env.MAKEFUN_OUTPUT_DIR ?? '/output').replace(/\/+$/, '');
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, EMOJI);
// entry.txt carries the emoji alone: no words, no newline.
