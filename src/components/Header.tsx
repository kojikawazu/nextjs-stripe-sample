import Link from 'next/link';
import React from 'react'
import { Button } from './ui/button';
import AuthServerButton from './auth/AuthServerButton';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from "next/headers";
import { userAgent } from 'next/server';

const Header = async () => {
    const supabase = await createServerComponentClient({ cookies });
    const { data: user } = await supabase.auth.getSession();

    return (
        <div className="flex py-4 px-6 border-b border-gray-200">
            <Link href={"/"}>
                <Button variant={"outline"}>ホーム</Button>
            </Link>
            {user.session && (
                <Link href={"/dashboard"} className="ml-4">
                    <Button variant={"outline"}>ダッシュボード</Button>
                </Link>
            )}
            <Link href={"/price"} className="ml-4">
                <Button variant={"outline"}>価格</Button>
            </Link>
            <div>
                <AuthServerButton />
            </div>
        </div>
    );
}

export default Header;