import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Script from "next/script";
import {
  AIShoppingAssistant,
  FloatingDecoration,
  Footer,
  NavigationHeader,
  ToastNotifications,
} from "@/components/ecommercehome";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
      <div className="">
        <div className="font-sans antialiased bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 min-h-screen relative">
          {/* Animated Background */}
          <div className="parallax-bg" />
          {/* Floating Decoration Elements */}
          <div className="fixed inset-0 pointer-events-none z-0">
            <FloatingDecoration />
          </div>
          {/* Main Content */}

          {/* Voice Search Modal */}
          {/* <VoiceSearchModal 
                          isOpen={isVoiceModalOpen} 
                          onClose={handleVoiceModalClose} 
                      /> */}

          <div className="relative z-10">
            <NavigationHeader />
            {children}
            <Footer />
          </div>
          {/* Toast Notifications */}
          <div className="fixed top-20 right-6 z-50 space-y-3">
            <ToastNotifications />
          </div>
          {/* AI Shopping Assistant */}
          <div className="fixed bottom-8 right-8 z-40">
            <AIShoppingAssistant />
          </div>
        </div>
      </div>
  
  );
}
