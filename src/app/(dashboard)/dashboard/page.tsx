export default function DashboardPage() {
  return (
    <div className="min-h-screen p-8 bg-gray-palette">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-primary-dark mb-8">
          Welcome to the Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold text-primary-dark mb-2">
              General Summary
            </h3>
            <p className="text-secondary">
              Here you can see a summary of your main information.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold text-primary-dark mb-2">
              Statistics
            </h3>
            <p className="text-secondary">
              Visualize your most important data in a clear way.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold text-primary-dark mb-2">
              Quick Actions
            </h3>
            <p className="text-secondary">Access the most used functions.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
