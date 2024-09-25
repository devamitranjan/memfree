import * as React from 'react';
import { buttonVariants } from '@/components/ui/button';
import { UserAccountNav } from '@/components/layout/user-account-nav';
import { SidebarMobile } from '@/components/sidebar/sidebar-mobile';
import type { User } from 'next-auth';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { NewSearchButton } from '@/components/shared/new-search-button';
import { SearchHistory } from '@/components/sidebar/search-history';

interface NavBarProps {
    user: User;
}

export default async function MobileHeader({ user }: NavBarProps) {
    return (
        <header>
            <div className="md:hidden flex items-center justify-between mx-6 pt-4">
                <SidebarMobile>
                    <SearchHistory user={user} />
                </SidebarMobile>
                <div className="my-2 px-4">
                    <NewSearchButton umamiEvent="New Search Click" className={buttonVariants({ variant: 'outline' })} />
                </div>
                <div className="my-2 mr-6">
                    {user ? (
                        <UserAccountNav user={user} />
                    ) : (
                        <Link href="/login" className={cn(buttonVariants({ variant: 'default' }), 'rounded-lg w-full h-10')}>
                            Sign In
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
}
