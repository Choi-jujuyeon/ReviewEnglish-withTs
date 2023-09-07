import { TReview } from "@/app/day/[id]/page";
import LeftArrow from "@/app/icons/LeftArrow";
import RightArrow from "@/app/icons/RightArrow";
import Speaker from "@/app/icons/Speaker";

import { Dispatch, FC, SetStateAction, useState } from "react";

type ReviewCardProps = Pick<TReview, "sentences"> & {
    currentReviewIndex: number;
    setCurrentReviewIndex: Dispatch<SetStateAction<number>>;
};
// 타입은 계속해서 좁혀 사용하는게 좋다
type TLanguage = "korean" | "english";

// 페이지는 아니기때문에 FC 타입 사용
const ReviewCard: FC<ReviewCardProps> = ({
    sentences,
    currentReviewIndex,
    setCurrentReviewIndex,
}) => {
    const [language, setLanguage] = useState<TLanguage>("korean");

    // 언어 선택 토글 기능 구현하기
    const onClickLang = () => {
        if (language === "korean") {
            setLanguage("english");
        } else {
            setLanguage("korean");
        }
    };

    const onClickNext = () => {
        if (currentReviewIndex >= sentences.length - 1) {
            setCurrentReviewIndex(0);
        } else {
            setCurrentReviewIndex(currentReviewIndex + 1);
        }
        setLanguage("korean");
    };

    //
    const onClickPreview = () => {
        // 배열의 가장 마지막 요소라고 판단
        if (currentReviewIndex <= 0) {
            setCurrentReviewIndex(sentences.length - 1);
        } else {
            setCurrentReviewIndex(currentReviewIndex - 1);
        }
        setLanguage("korean");
    };

    return (
        <div className=" w-full">
            <div className=" h-60">
                <div className="border-black border-2 px-4 py-2">
                    {sentences[currentReviewIndex][language]}
                </div>
                <div className="mt-2">
                    <button className="btn-style">
                        <Speaker />
                    </button>
                </div>
            </div>
            <div className="mt-4 flex justify-between">
                <button onClick={onClickPreview} className="btn-style">
                    <LeftArrow />
                </button>
                <button onClick={onClickLang} className="btn-style">
                    {/* 줄바꿈이 안 일어날 경우에는 span태그 활용함 */}
                    <span
                        className={`${
                            language === "korean" && "font-semibold"
                        } mr-1`}
                    >
                        KOR
                    </span>
                    /
                    <span
                        className={`${
                            language === "english" && "font-semibold"
                        } ml-1`}
                    >
                        ENG
                    </span>
                </button>
                <button onClick={onClickNext} className="btn-style">
                    <RightArrow />
                </button>
            </div>
        </div>
    );
};

export default ReviewCard;
