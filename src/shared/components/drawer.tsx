import { ElementType, ReactNode } from "react";
import { Drawer as DrawerVaul } from "vaul";

type DrawerProps = {
  trigger: ReactNode;
  children: ReactNode;
};

export function Drawer({ trigger, children }: DrawerProps) {
  return (
    <DrawerVaul.Root>
      <DrawerVaul.Trigger asChild>{trigger}</DrawerVaul.Trigger>

      <DrawerVaul.Portal>
        <DrawerVaul.Overlay className="fixed inset-0 bg-black/40 z-2" />

        <DrawerVaul.Content className="flex flex-col rounded-t-lg h-[80%] fixed left-0 right-0 bottom-0 z-3">
          <div className="p-4 bg-white rounded-t-[10px] flex-1 overflow-y-auto">
            <DrawerVaul.Handle className="mb-8" />
            {children}
          </div>
        </DrawerVaul.Content>
      </DrawerVaul.Portal>
    </DrawerVaul.Root>
  );
}
