import Sidebar from '@/components/sidebar/Sidebar';
import Header from '@/components/header/Header';

interface NavBarProps {
  children: React.ReactNode;
}

export default function NavBar({ children }: NavBarProps) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 bg-gray-50">{children}</main>
      </div>
    </div>
  );
}
