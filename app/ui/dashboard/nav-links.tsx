'use client';
// This component is used to display the navigation links in the dashboard.
// It is a client component because it uses the `usePathname` hook from `next/navigation`
// to determine the current path and highlight the active link.
// It is also used to display the links in the side navigation.
// The links are stored in a map and are displayed using the `Link` component from `next/link`.
// The links are displayed as a list of items with icons and text.
// The icons are imported from the `@heroicons/react` package.
// The `Link` component is used to navigate to the different pages in the application.
// The `usePathname` hook is used to determine the current path and highlight the active link.
// The `usePathname` hook is used to get the current path.
// The `usePathname` hook is used to get the current path and highlight the active link.
// The `usePathname` hook is used to get the current path and highlight the active link.

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  // Get the current path using the usePathname hook.
  const pathname = usePathname();
  // Check if the current path matches any of the links.
  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              isActive(link.href) && 'bg-sky-100 text-blue-600',
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
