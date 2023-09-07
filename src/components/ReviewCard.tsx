import LeftArrow from "@/app/icons/LeftArrow";
import RightArrow from "@/app/icons/RightArrow";
import Speaker from "@/app/icons/Speaker";

import { FC } from "react";

// 페이지는 아니기때문에 FC 타입 사용
const ReviewCard: FC = () => {
    return (
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
    );
};

export default ReviewCard;
