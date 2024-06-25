import "./ErrorNotify.scss";

interface ErrorNotifyProps {
  message: string;
}

const ErrorNotify: React.FC<ErrorNotifyProps> = ({ message }) => {
  return <div className="error-notify flexCenter">{message}</div>;
};

export default ErrorNotify;
