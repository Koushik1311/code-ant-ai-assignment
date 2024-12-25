import SigninPanel from "@/components/auth/SigninPanel";
import MaxWidthWrapper from "@/components/global/MaxWidthWrapper";
import { companyStats } from "@/data/company-stats";
import { ArrowUp } from "lucide-react";
import Image from "next/image";

export default function SignInPage() {
  return (
    <div className="relative min-h-screen">
      <div className="py-14">
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
                <h1 className="text-lg font-extrabold text-[#081735]">
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
                    <span className="text-[#0049C6] text-sm font-bold">
                      14%
                    </span>
                  </div>
                  <p className="text-xs font-normal text-neutral-900">
                    This week
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-4">
                <p className="text-sm font-bold text-neutral-900">
                  Issues Fixed
                </p>
                <span className="text-3xl font-bold text-[#081735]">500K+</span>
              </div>
            </div>
          </div>

          {/* right */}
          <SigninPanel />
        </MaxWidthWrapper>
      </div>

      <div className="hidden lg:block absolute bottom-0 left-0 -z-40">
        <Image
          src="/images/Subtract.png"
          alt="Logo icon"
          width={284}
          height={319}
        />
      </div>
    </div>
  );
}
