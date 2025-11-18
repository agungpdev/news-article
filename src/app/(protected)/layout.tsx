import { AppSidebar } from '@/components/app-sidebar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { Toaster } from '@/components/ui/sonner';

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <SidebarProvider className="font-protected">
      <AppSidebar />
      <SidebarInset>{children}</SidebarInset>
      <Toaster position="top-right" />
    </SidebarProvider>
  );
};

export default DashboardLayout;
