![Cloud Build Production] https://wegugin-git-client-ashaldenkovs-projects.vercel.app?_vercel_share=F058aCq19wr2WRhvNeV8X2KYxDt5iEs5

## Development

- Copy the `.env.example` file and paste the necessary values into the `.env`
  file.
- For local development, use a local database (you can set up one using Docker
  and the `npm run db:up` command).
- Follow naming conventions stated below.
- Install `biome` in your code editor and use project's `biome.json`
  configuration file.
- The project uses the husky `pre-commit` script, which runs the linter on every
  commit. If you commit and encounter lint errors, you should fix them first,
  then run `git add .` and commit again.
- If you want to add a package or make a change to `prisma.schema`, first
  contact @lxhan.
- Always create PR to the `dev` branch first and send the PR link to the
  [mattermost channel](https://mattermost.habsida.com/habsida/channels/naonow)

> [!IMPORTANT] NODE_ENV=production and NODE_ENV=development is only used for
> CloudBuild. Do not set it at all or use `local` as value.

## Naming convention

### Types, interfaces and classes - Pascal case

```ts
interface User {}

type Session = {};

class User {
  constructor() {}
}
[!NOTE] Prefer interfaces over types.

Files - Kebab case
user.ts;
user-auth.ts;
Constants - ALL CAPS
const SESSION_TIMEOUT = 50;
Enums - Pascal case and members all caps
enum UserRoles {
  ADMIN = "admin",
  USER = "user",
}
Constant values - lower case
const USER_ROLE = "admin";
Variables and functions - Camel case
function getUser() {}
const userData = {};
Use absolute path imports
// Good:
import config from "@/config/common";
import config from "@/config";

// Bad:
import config from "../../../config";
