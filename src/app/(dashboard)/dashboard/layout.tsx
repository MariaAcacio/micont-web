import NavBar from '@/components/nav-bar/NavBar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <NavBar>{children}</NavBar>;
}
