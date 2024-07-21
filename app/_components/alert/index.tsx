import {
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

type Props = {
  isOpen: boolean;
  action: (id: string) => void;
  closeDialog: () => void;
  title?: string;
  description?: string;
  message?: string;
  buttonTitle?: string;
  data: any;
};

function Alert({
  isOpen,
  action,
  closeDialog,
  title,
  description,
  message,
  buttonTitle,
  data,
}: Props) {
  return (
    <Dialog
      open={isOpen}
      onClose={closeDialog}
      className="relative z-50 bg-white"
    >
      <DialogBackdrop className="fixed inset-0 bg-black/30" />
      <div className="fixed inset-0 flex w-screen h-screen  items-center justify-center p-4">
        <DialogPanel className="bg-white rounded-lg p-3 flex flex-col space-y-2">
          {title && <DialogTitle>{title}</DialogTitle>}
          {description && <Description>{description}</Description>}
          {message && <p>{message}</p>}

          <div className="space-x-4 flex justify-end">
            <button onClick={closeDialog}>Cancel</button>
            {buttonTitle && (
              <button className="bg-red-500" onClick={() => action(data)}>{buttonTitle}</button>
            )}
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

export default Alert;
