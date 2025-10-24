"use client";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function NavLogo() {
    const { theme } = useTheme();
    const logoPath = theme === "dark" ? "/logo/dark.png" : "/logo/light.png";
    return (
        <Image src={logoPath} alt="Nuwa Logo" width={100} height={100} priority />
    );
}
