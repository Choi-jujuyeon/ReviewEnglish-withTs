// 컴포넌트 타입 FC 활용하기
import { FC } from "react";

//props type을 적어줘야 한다 !
// interface vs type
type DayCardProps = {
    index: number;
};

// 컴포넌트명 == 파일 명
// 타입 == 함수형컴포넌트 ==FC

// 만들어준 props를 붙일 경우 == generic 형태로 붙여준다.
const DayCard: FC<DayCardProps> = ({ index }) => {
    return (
        <li className=" border-black border-2  font-medium rounded-lg shadow-md shadow-slate-400">
            <button>Day {index + 1}</button>
        </li>
    );
};

export default DayCard;
