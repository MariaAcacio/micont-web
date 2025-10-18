import AddDashboardButton from '@/components/add-dashboard/AddDashboardButton';

export default function DashboardPage() {
  return (
    <div className="min-h-screen p-8 bg-gray-palette">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-primary-dark mb-8">
          Welcome to the Dashboard
        </h1>

        <AddDashboardButton />
      </div>
    </div>
  );
}
