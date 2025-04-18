import AuthButtons from "@/app/components/ui/login/AuthButtons";
import LoginLayout from "@/app/components/ui/login/LoginLayout";
import SignUpForm from "@/app/components/ui/login/SignUpForm";


const Page = () => {
  return (
    <LoginLayout>
      <div className="Flex flex-col  m-auto h-full py-[6rem]">
        <div className="flex flex-col gap-5">
          <h2 className="text-[3.2rem] font-medium">
            Welcome back! Please{" "}
            <span className='font-caveatRegular text-brandColor'>
              Sign Up
            </span>{" "}
            to continue.
          </h2>
          <p className="text-textlight">
            Unlock a world of exclusive content, enjoy special offers, and be
            the first to dive into exciting news and updates by joining our
            community!
          </p>
          <AuthButtons />
          <p className="text-textlight">
            {`We won't post anything without your permission and your personal details are kept private`}
          </p>
        </div>

        <hr className="flex-1 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

        <SignUpForm />
      </div>
    </LoginLayout>
  );
};

export default Page;
