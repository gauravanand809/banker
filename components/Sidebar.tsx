'use client'
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { useLocation } from 'react-router-dom';
import { usePathname } from "next/navigation";
const SideBar = ({ user }: { user: SiderbarProps }) => {
    const location = useLocation();
    const pathname = location.pathname;
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 cursor-pointer items-center gap-2">
          <Image
            className="size-[24px] max-xl:size-14"
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Logo"
          />
        </Link>
        {sidebarLinks.map((item) => {
        const isActive = 
        pathname === item.route || pathname.startsWith(`${item.route}/`);

        return (
            <Link href={item.route} key={item.label} className={cn('sidebar-link',{
                'bg-bank-gradient':isActive
            })}>
                {item.label}
            </Link>
        )
      })}
      </nav>
    </section>
  );
};

export default SideBar;
