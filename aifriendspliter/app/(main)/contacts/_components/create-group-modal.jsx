import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";


export const CreateGroupModal = ({isOpen,onClose,onSuccess}) => {
    const handleClose = () => {

        onClose();
    }
    return (
        <Dialog open={isOpen} onOpenChange={handleClose} >
 
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>Footer</DialogFooter>
  </DialogContent>
</Dialog>
    )
}