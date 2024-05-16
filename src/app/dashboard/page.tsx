import React from 'react';
import { SupabaseClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/lib/database.types';
import SubscriptionManagement from '@/components/checkout/SubscriptionManagement';
import { supabaseServer } from '../utils/supabaseServer';

const getProfileData = async (supabase: SupabaseClient<Database>) => {
    const { data: profile } = await supabase
        .from("profile")
        .select("*")
        .single();
    return profile;
}

const Dashboard = async () => {
    const supabase = supabaseServer();
    const profile = await getProfileData(supabase);

    return (
        <div className="w-full max-w-3xl mx-auto py-16 px-8">
            <h1 className="text-3xl mb-6">ユーザー管理ダッシュボード</h1>
            <div>
                <div className="mb-3">
                    {profile?.is_subscribed 
                        ? `プラン契約中: ${profile.interval}` 
                        : "プラン未加入です"}
                </div>
                <SubscriptionManagement />
            </div>
        </div>
    );
}

export default Dashboard;