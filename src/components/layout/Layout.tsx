import { ReactNode, useState } from 'react';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  breadcrumbs?: { label: string; href?: string }[];
  sidebarVariant?: 'drawer' | 'persistent';
  contentClassName?: string;
}

export function Layout({
  children,
  title = 'Dashboard',
  breadcrumbs,
  sidebarVariant = 'drawer',
  contentClassName = 'px-4 sm:px-6 lg:px-8 py-6',
}: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const isDrawer = sidebarVariant === 'drawer';

  return (
    /* APP CANVAS */
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <Sidebar
        variant={sidebarVariant}
        isOpen={isDrawer ? sidebarOpen : false}
        onClose={isDrawer ? () => setSidebarOpen(false) : undefined}
      />

      {/* Main Column */}
      <div className="flex flex-1 flex-col w-full">
        {/* Top Navigation */}
        <TopBar
          title={title}
          breadcrumbs={breadcrumbs}
          onMenuClick={isDrawer ? toggleSidebar : undefined}
        />

        {/* Page Content */}
        <main className={`flex-1 overflow-auto ${contentClassName}`}>
          {children}
        </main>
      </div>
    </div>
  );
}
