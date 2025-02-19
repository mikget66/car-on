import Image from "next/image";
const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      id="login"
      className="w-full lg:w-10/12 grid grid-cols-1 lg:grid-cols-3 py-5 m-auto"
    >
      {children}
      <div className="hidden col-span-2 bg-light m-auto rounded-3xl p-[5rem] lg:flex flex-col items-center justify-center text-center">
        <h2>Effortlessly organize your workspace with ease.</h2>
        <p className="text-textlight">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <Image
          src={"/images/background/login-bg.jpeg"}
          width={700}
          height={700}
          alt="login"
          className="blur-sm"
        />
      </div>
    </div>
  );
};

export default LoginLayout;
