import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "plugin:jsx-a11y/recommended"
  ),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  // WCAG 2.1.1: scrollable regions need tabIndex={0} for keyboard scroll; jsx-a11y
  // treats role="region" wrappers as non-interactive (false positive for this pattern).
  {
    files: [
      "src/components/home/ComparisonTable.tsx",
      "src/components/home/HeroSection.tsx",
      "src/components/home/PerformanceSection.tsx",
      "src/components/legal/ComplaintStatusContent.tsx",
      "src/components/legal/GrievanceRedressalContent.tsx",
    ],
    rules: {
      "jsx-a11y/no-noninteractive-tabindex": "off",
    },
  },
];

export default eslintConfig;
