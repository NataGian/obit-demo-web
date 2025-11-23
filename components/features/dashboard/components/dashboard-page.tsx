import {ScheduledDepartures, StatisticsCard, UpcomingArrivals} from "@/components/features";

export const DashboardPage = () => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="w-full py-2 px-2">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Overview</h1>
                <p className="text-sm text-gray-500 mt-1">{formattedDate}</p>
            </div>

            <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-3">
                <StatisticsCard
                    title="Total Empty Spaces"
                    value={42}
                    description="Available parking spaces"
                    valueColor="text-green-600"
                />

                <StatisticsCard
                    title="Currently Occupied"
                    value={78}
                    description="Spaces in use right now"
                    valueColor="text-orange-600"
                />

                <StatisticsCard
                    title="Total Capacity"
                    value={120}
                    description="Maximum parking spaces"
                    valueColor="text-blue-600"
                />
            </div>

            <div className="grid gap-3 md:grid-cols-2 mt-4 overflow-x-hidden">
                <UpcomingArrivals/>
                <ScheduledDepartures/>
            </div>
        </div>
    )
}