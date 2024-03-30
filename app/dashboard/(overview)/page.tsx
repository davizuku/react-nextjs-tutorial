import CardWrapper from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { CardsSkeleton, LatestInvoicesSkeleton, RevenueChartSkeleton } from '@/app/ui/skeletons';

// Note: unstable_noStore is an experimental API and may change in the future. If you prefer to use a stable API in your
// own projects, you can also use the Segment Config Option export const dynamic = "force-dynamic".
// URL: https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config
// export const dynamic = 'force-dynamic';

export default async function Page() {
    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Dashboard
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Suspense fallback={<CardsSkeleton/>}>
                    <CardWrapper/>
                </Suspense>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                <Suspense fallback={<RevenueChartSkeleton/>}>
                    <RevenueChart/>
                </Suspense>
                <Suspense fallback={<LatestInvoicesSkeleton/>}>
                    <LatestInvoices/>
                </Suspense>
            </div>
        </main>
    );
}
