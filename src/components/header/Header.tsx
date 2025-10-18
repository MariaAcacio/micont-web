import { FiSettings } from 'react-icons/fi';
export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-primary-dark">Dashboard</h2>
        <div className="flex items-center space-x-4">
          <button
            className="p-2 text-gray-500 hover:text-primary-dark transition-colors"
            title="Notifications"
          ></button>
          <button
            className="p-2 text-gray-500 hover:text-primary-dark transition-colors"
            title="Settings"
          >
            <FiSettings />
          </button>
        </div>
      </div>
    </header>
  );
}
