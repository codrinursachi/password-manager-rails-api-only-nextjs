import { RegisterForm } from "@/components/user-account-forms/user-register-form";

const RegisterPage = () => {
    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
                <RegisterForm />
            </div>
        </div>
    );
};

export default RegisterPage;
