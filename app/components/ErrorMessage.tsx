const ErrorMessage = ({ error }: { error: string }) => {
  return (
    <p className="text-red-500 flex justify-center items-center h-full text-2xl">
      {error}
    </p>
  );
};

export default ErrorMessage;
