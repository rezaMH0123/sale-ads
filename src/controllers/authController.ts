import httpService from "../core/services/http-service";
import { LoginT } from "../types/auth.type";
import toast from "react-hot-toast";
import { SetToStorage } from "../utils/storage";

export async function SignInController(data: LoginT) {
  try {
    const res = await httpService.post("login", data);
    if (res.status === 200 || res.status === 201) {
      toast.success("با موفقیت وارد شدید");
      SetToStorage({
        key: "accessToken",
        value: res.data.accessToken,
        expireTime: 1,
      });

      return res;
    }
  } catch (err: any) {
    const str = Object.values(err).join("");
    toast.error(str);
    throw err;
  }
}

export async function SignUpController(data: LoginT) {
  try {
    const res = await httpService.post("register", data);
    if (res.status === 200 || res.status === 201) {
      toast.success("حساب کاربری با موفقیت ساخته شد");
      SetToStorage({
        key: "accessToken",
        value: res.data.accessToken,
        expireTime: 1,
      });

      return res;
    }
  } catch (err: any) {
    console.log(err);
    const str = Object.values(err).join("");
    toast.error(str);
    throw err;
  }
}
