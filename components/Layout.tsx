import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import LoadingProvider from "./LoadingProvider";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <LoadingProvider>
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  </LoadingProvider>
);

export default Layout; 