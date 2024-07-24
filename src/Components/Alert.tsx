//alert with custom warning
interface Props {
  warning: string;
}

function Alert({ warning }: Props) {
  return (
    <div className="alert alert-warning" role="alert">
      {warning}
    </div>
  );
}

export default Alert;
