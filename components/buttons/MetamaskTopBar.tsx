import Image from "next/image";
import MetamaskIcon from "../icons/MetamaskIcon";

export default function MetamaskTopBar() {
  return (
    <div className="flex gap-3 py-1 px-3 rounded-xl bg-[#1F1D2F] items-center">
      <Image src="/static/images/avatars/avatar.png" alt="Avatar" width={20} height={20} />
      <MetamaskIcon />
    </div>
  )
}
