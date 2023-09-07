"use client";
import LeftArrow from "@/app/icons/LeftArrow";
import RightArrow from "@/app/icons/RightArrow";
import Speaker from "@/app/icons/Speaker";
import { NextPage } from "next";
import Link from "next/link";

//동적 라우팅으로 구현한 다른 day 1~를 title에도 설정해주자!
import { useParams } from "next/navigation";

// 페이지 컴포넌트 == next-type인 NextPage로 타입 지정해주기
const Day: NextPage = () => {
    // 주소창의 값을 가져온다
    // { } ~> 폴더명과 동일한 이름 사용학;
    const { id } = useParams();

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
                <div className="font-semibold mb-24 mt-2">Day {id}</div>
            </div>

            <div className="bg-red-100 w-full">
                <div className="bg-blue-100 h-60">
                    <div className="border-black border-2 px-4 py-2">
                        Working from home isn't for me. I always get distracted
                    </div>
                    <div className="mt-2">
                        <button className="btn-style">
                            <Speaker />
                        </button>
                    </div>
                </div>
                <div className="mt-4 flex justify-between">
                    <button className="btn-style">
                        <LeftArrow />
                    </button>
                    <button className="btn-style">
                        {/* 줄바꿈이 안 일어날 경우에는 span태그 활용함 */}
                        <span className="mr-1">KOR</span>/
                        <span className="ml-1 font-semibold">ENG</span>
                    </button>
                    <button className="btn-style">
                        <RightArrow />
                    </button>
                </div>
            </div>
        </main>
    );
};
export default Day;
