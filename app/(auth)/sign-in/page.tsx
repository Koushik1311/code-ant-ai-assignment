import MaxWidthWrapper from "@/components/global/MaxWidthWrapper";
import { socialSignin } from "@/constants/social-signin";
import { companyStats } from "@/data/company-stats";
import { satoshi } from "@/utils/font";
import { ArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="min-h-screen py-14">
      <MaxWidthWrapper className="lg:grid grid-cols-2 min-h-screen py-8">
        {/* left */}
        <div className="hidden lg:flex flex-col items-center justify-center">
          <div className="max-w-md w-full border rounded-2xl shadow-[0px_0px_24px_0px_#08173529]">
            <div className="flex items-center justify-start gap-2 py-6 border-b mx-6">
              <Image
                src="/images/codeant.png"
                alt="CodeAnt AI"
                width={28}
                height={31}
              />
              <h1 className="text-lg font-extrabold">
                AI to Detect & Autofix Bad Code
              </h1>
            </div>

            <div className="flex items-center justify-between mx-6 my-7">
              {companyStats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center">
                  <span className="text-lg font-bold text-[#081735]">
                    {stat.value}
                  </span>
                  <p className="text-sm font-normal text-neutral-900">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="ml-[14rem] -mt-[1rem] w-[265px] bg-white px-8 py-4 shadow-[0px_0px_24px_0px_#08173529] border rounded-3xl">
            <div className="flex items-center justify-between">
              <div className="w-14 h-14 bg-[#9D90FA]/25 rounded-full flex items-center justify-center">
                <Image
                  src="/images/Vector.png"
                  alt="PieChart"
                  width={24}
                  height={24}
                />
              </div>
              <div className="flex flex-col items-start">
                <div className="flex items-center justify-center">
                  <ArrowUp color="#0049C6" size={20} />
                  <span className="text-[#0049C6] text-sm font-bold">14%</span>
                </div>
                <p className="text-xs font-normal text-neutral-900">
                  This week
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-4">
              <p className="text-sm font-bold">Issues Fixed</p>
              <span className="text-3xl font-bold">500K+</span>
            </div>
          </div>
        </div>

        {/* right */}
        <div className="max-w-2xl flex flex-col items-center justify-center">
          <div className="w-full flex flex-col items-center justify-center border-b">
            <div className="flex items-center justify-center gap-3">
              <Image
                src="/images/codeant.png"
                alt="CodeAnt AI"
                width={35}
                height={40}
                className="object-cover"
              />
              <p className={`text-3xl font-normal ${satoshi.className}`}>
                CodeAnt AI
              </p>
            </div>

            {/* Heading */}
            <h1 className="text-3xl font-semibold mt-9">
              Welcome to CodeAnt AI
            </h1>

            {/* Horizontal tabs */}
            <div className="grid grid-cols-2 w-full bg-[#E9EAEB] rounded-md mt-5 mb-9">
              <button className="bg-[#1570EF] rounded-lg border-2 text-xl font-semibold py-4 flex items-center justify-center text-white">
                SaaS
              </button>
              <button className="text-xl font-semibold py-4 flex items-center justify-center text-[#414651]">
                Self Hosted
              </button>
            </div>
          </div>

          {/* sign-in options */}
          <ul className="flex flex-col items-center w-full md:max-w-md gap-4 my-6">
            {socialSignin.map((social) => (
              <li key={social.label} className="w-full">
                <Link
                  href="#"
                  className="flex items-center justify-center gap-4 py-4 border rounded-md w-full hover:bg-gray-200 transition-colors duration-300"
                >
                  <Image
                    src={social.icon}
                    alt={social.label}
                    width={24}
                    height={24}
                  />
                  <span>Sign in with {social.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* privacy policy */}
          <p className="text-base font-normal mt-8">
            By signing up you agree to the{" "}
            <Link href="#" className="font-bold hover:underline">
              Privacy Policy.
            </Link>
          </p>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
