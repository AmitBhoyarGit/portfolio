# Portfolio
A TanStack-based website for a personal portfolio. Experimenting with AI features and capabilities.

## Getting Started
Welcome to your new TanStack Start app!

To run this application:
```bash
npm install
npm run dev
```

## Building For Production
To build this application for production:
```bash
npm run build
```

## Testing
This project uses [Vitest](https://vitest.dev/) for testing. You can run the tests with:
```bash
npm run test
```

## Styling
This project uses [Tailwind CSS](https://tailwindcss.com/) for styling.

---

## Routing
This project uses [TanStack Router](https://tanstack.com/router) with file-based routing. Routes are managed as files in `src/routes`.

### Adding A Route
To add a new route, add a new file in the `./src/routes` directory. TanStack will automatically generate the content of the route file for you.

### Adding Links
To use SPA navigation, import `Link` from `@tanstack/react-router`:
```tsx
import { Link } from "@tanstack/react-router";
<Link to="/about">About</Link>
```

---

## Server Functions
TanStack Start provides server functions for seamless server-side code integration.

## API Routes
You can create API routes using the `server` property in your route definitions.

## Data Fetching
Use TanStack Router's `loader` functionality to load data for a route before it's rendered.

---

## Learn More
- [TanStack Documentation](https://tanstack.com)
- [TanStack Start](https://tanstack.com/start)
