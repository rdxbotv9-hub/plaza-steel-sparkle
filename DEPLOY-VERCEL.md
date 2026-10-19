# Vercel par deploy karne ka tareeqa (Plaza Steel & Crockery)

## 1. Code Vercel tak pohanchayein

- Lovable me upar right side **GitHub** button se project apne GitHub account me export karein.
- Vercel.com par login karein → **Add New → Project** → wahi GitHub repo select karein.

## 2. Build settings

Vercel ke project setup screen par:

| Setting | Value |
| --- | --- |
| Framework Preset | **Other** |
| Build Command | `NITRO_PRESET=vercel bun run build` |
| Output Directory | `.vercel/output` |
| Install Command | `bun install --frozen-lockfile` |

Project me `vercel.json` ye settings pehle se set karta hai; Vercel ke purane manual overrides hon to unhein reset karein. Is se wahi package versions install hoti hain jo preview me test hain.

## 3. Environment Variables (bohat zaroori)

**Settings → Environment Variables** me ye 3 add karein (Production + Preview dono):

| Name | Value |
| --- | --- |
| `ADMIN_USERNAME` | `adminplaza` |
| `ADMIN_PASSWORD` | `34402` |
| `SESSION_SECRET` | koi bhi 40+ characters ki random line (kisi ko na batayein) |

`vercel.json` ka build command khud `NITRO_PRESET=vercel` set karta hai; isay alag environment variable me add karna zaroori nahi. Lovable ke internal environment variables Vercel par copy na karein. Apna admin password aur secret sirf Vercel Environment Variables me rakhein, public code me nahi.

## 4. Deploy

**Deploy** dabayein. 2-3 minute me live link mil jayega, jaise
`https://plaza-steel.vercel.app`.

Deploy ke baad Rate List me item search, West Point quantity, estimate bill aur admin login check karein. Graceware aur West Point ke external links har page ke upar milenge aur nayi tab me khulenge. Local preview ki jaanch Vercel deployment ki guarantee nahi; Vercel ka live link milne par ye checks wahan bhi zaroor karein.

## 5. Rate list update karna

Project ke root me **`list/`** folder hai. Nayi rate list aane par:

1. Nayi JSON file (purani file jaisi hi shape) `list/` folder me add karein — naam aisa rakhein
   jo alphabetically baad me aaye, jaise `ALL_STOCK_2.json`, `ALL_STOCK_3.json`.
2. GitHub par commit/push karein (ya Lovable se dobara push karein).
3. Vercel khud dobara deploy karega aur poori website nayi rates par aa jayegi.
   Ek hi item code purani aur nayi file dono me ho to **nayi file** wali rate chalti hai.

## 6. App install (Android + iPhone)

Site khulne par neeche **"Install Plaza App"** ka notification aata hai.

- **Android (Chrome):** "Install" dabayein — app home screen par aa jayegi.
- **iPhone/iPad (Safari):** neeche **Share** → **Add to Home Screen**.

Ye kaam sirf `https://` link par hota hai, is liye Vercel par deploy hone ke baad hi test karein.
