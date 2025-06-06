import type { Config } from "@react-router/dev/dist/config";

export default {
  ssr: true,
  future: {
    unstable_viteEnvironmentApi: true,
  },
} satisfies Config;
