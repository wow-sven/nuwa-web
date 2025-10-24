import Container from "./container";
import ThemeSwitch from "./theme-switch";

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-gray-100 dark:border-gray-800">
      <Container className="py-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Copyright © {new Date().getFullYear()} Stablo. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-1 text-sm text-gray-500 dark:text-gray-600">
            <span>
              Made by{" "}
              <a
                href="https://web3templates.com/?ref=stablo-astro"
                rel="noopener noreferrer"
                target="_blank"
                className="hover:text-blue-500"
              >
                Web3Templates
              </a>
            </span>
            <span>&middot;</span>
            <a
              href="https://github.com/web3templates/stablo-astro"
              rel="noopener noreferrer"
              target="_blank"
              className="hover:text-blue-500"
            >
              Github
            </a>
          </div>
          <ThemeSwitch />
        </div>
      </Container>
    </footer>
  );
}
