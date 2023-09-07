import { NextPage } from "next";
import Link from "next/link";
// 페이지 컴포넌트 == next-type인 NextPage로 타입 지정해주기
const Day: NextPage = () => {
    return (
        <main className="bg-slate-100 min-h-screen flex flex-col justify-start items-center py-24 px-12">
            <div className="relative  flex w-full justify-center">
                <Link href="/">
                    {/* absolute : 절대값을 준다== relative랑 꼭 같이 사용해야 한다 ! */}
                    <div className="absolute top-0 left-0">
                        <button className="btn-style text-xs font-semibold">
                            Back
                        </button>
                    </div>
                </Link>
                <div className="font-semibold mb-24 mt-2">Day 1</div>
            </div>
        </main>
    );
};
export default Day;
