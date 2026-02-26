import * as Dialog from '@radix-ui/react-dialog';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { useEffect } from 'react';

export default function TermsDialog({ open, onOpenChange, title, children }) {
  // Listen for close message from the iframe
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data?.type === 'CLOSE_DIALOG') {
        onOpenChange(false);
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [onOpenChange]);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <Motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
              />
            </Dialog.Overlay>
            <div className="fixed inset-0 z-[101] flex items-center justify-center p-0 sm:p-4">
              <Dialog.Content asChild>
                <Motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                  className={cn(
                    "bg-white rounded-none sm:rounded-3xl shadow-2xl w-full max-w-5xl h-full sm:max-h-[85vh] flex flex-col overflow-hidden outline-none relative"
                  )}
                >
                  <Dialog.Title asChild>
                    <VisuallyHidden>{title}</VisuallyHidden>
                  </Dialog.Title>
                  <Dialog.Description asChild>
                    <VisuallyHidden>{title}의 상세 내용입니다.</VisuallyHidden>
                  </Dialog.Description>

                  <div className="flex-1 w-full h-full overflow-hidden">
                    {children}
                  </div>
                </Motion.div>
              </Dialog.Content>
            </div>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
