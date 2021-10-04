export const ModalHeader = ({
  children,
  hideModalFunc,
}: {
  children: React.ReactNode;
  hideModalFunc: () => void;
}) => {
  return <div className="modal-header">{children}</div>;
};
