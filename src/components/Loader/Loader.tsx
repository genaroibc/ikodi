import Image from "next/image";

type Props = {
  width: number;
  height: number;
};

export function Loader(props: Props) {
  return <Image src="/svg/loader.svg" alt="animated loader" {...props} />;
}
