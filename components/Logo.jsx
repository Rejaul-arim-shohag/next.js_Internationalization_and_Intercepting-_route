import Link from "next/link"
import Image from "next/image"

const Logo = () => {
  return (
    <Link href="/">
      <p className="text-3xl font-bold">PhotoFeed</p>
      {/* <Image
        className="max-w-[100px] md:max-w-[165px]"
        src="/lws_logo.png"
        alt="Lws"
        height={100}
        width={165}
      /> */}
    </Link>
  )
}

export default Logo