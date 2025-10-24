"use client";

import { useTheme } from "next-themes";
import { useEffect, useState, type ChangeEvent } from "react";

const OPTIONS = [
  { value: "system", label: "System" },
  { value: "dark", label: "Dark" },
  { value: "light", label: "Light" },
];

export default function ThemeSwitch() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value);
  };

  const currentValue = mounted ? theme ?? resolvedTheme ?? "system" : "system";

  return (
    <div className="inline-flex items-center">
      <svg
        className="mr-2 h-4 w-4 text-yellow-500"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0 2a1 1 0 0 1 1 1v1h-2v-1a1 1 0 0 1 1-1Zm0-18a1 1 0 0 1-1-1V0h2v1a1 1 0 0 1-1 1Zm9 9a1 1 0 0 1 1 1h1v2h-1a1 1 0 0 1-1-1 1 1 0 0 1 1-1ZM3 12a1 1 0 0 1-1 1H1v-2h1a1 1 0 0 1 1 1Zm16.95 7.536-.707.707-1.414-1.414.707-.707a1 1 0 1 1 1.414 1.414ZM5.464 5.465 4.05 4.05l1.414-1.415 1.414 1.414A1 1 0 0 1 5.464 5.465Zm13.488-2.83L19.364 4.05l-1.414 1.414-1.414-1.414a1 1 0 0 1 1.414-1.414Zm-12.074 15.91-1.414 1.415-1.414-1.415.707-.707a1 1 0 1 1 1.414 1.415Z" />
      </svg>
      <select
        id="themeSwitch"
        name="themeSwitch"
        value={currentValue}
        onChange={handleChange}
        className="rounded-md border border-gray-200 bg-white px-2 py-1 text-sm dark:border-gray-700 dark:bg-gray-900"
      >
        {OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
