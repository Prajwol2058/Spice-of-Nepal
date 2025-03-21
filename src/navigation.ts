import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['en', 'ne'];

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({
    locales,
});
