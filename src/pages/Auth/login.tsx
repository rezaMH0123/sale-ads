import Container from "../../components/Container";
import LoginForm from "../../sections/LoginForm";

export default function Login() {
  return (
    <Container outherClassName="">
      <div className="h-full col-span-full grid grid-cols-10">
        <div className="self-center col-span-full  md:col-span-4 md:col-start-4 py-16 px-8 shadow-card-3 rounded-lg ">
          <div className=" w-full  flex justify-center font-bold text-2xl text-cyan-500">
            جای نو
          </div>
          <LoginForm />
          <div className="flex justify-center mt-6  text-sm gap-x-2">
            <span className="block">حساب کاربری ندارید؟</span>
            <a className="block text-sky-900 underline" href="/register">
              ساخت حساب کاربری
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
