"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingSpinner from "./LoadingSpinner";
import UpdateNotice from "./UpdateNotice";

interface LoadingProviderProps {
  children: React.ReactNode;
}

const LoadingProvider: React.FC<LoadingProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showUpdateNotice, setShowUpdateNotice] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Show update notice after loading completes
      setTimeout(() => {
        setShowUpdateNotice(true);
      }, 500);
    }, 3500); // Show loading screen for 3.5 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleCloseUpdateNotice = () => {
    setShowUpdateNotice(false);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingSpinner />}
      </AnimatePresence>
      
      {!isLoading && (
        <>
          {children}
          <UpdateNotice 
            isVisible={showUpdateNotice} 
            onClose={handleCloseUpdateNotice} 
          />
        </>
      )}
    </>
  );
};

export default LoadingProvider;