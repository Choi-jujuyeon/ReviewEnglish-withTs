import DayCard from "@/components/DayCard";
import { NextPage } from "next";

import data from "@/data.json";

const Home: NextPage = () => {
    return (
        <main className="bg-slate-100 py-24 px-12 min-h-screen flex flex-col justify-center items-center">
            {/* 상단 - 프로젝트 이름 */}
            <div className="font-semibold ">REVIEW ENGLISH</div>

            {/* 하단 - 버튼 3개(반복요소) */}
            <ul className="mt-12  w-full grid grid-cols-4 gap-4 text-center">
                {/* 테두리 색 시정해주기 - 색/ 두께 */}
                {/* <DayCard index={0} />
                <DayCard index={1} />
                <DayCard index={2} /> */}

                {/* {data.map((v, i) => (
                    <DayCard key={i} index={i} />
                ))} */}
                {data.map((_, i) => (
                    <DayCard key={i} index={i} />
                ))}
            </ul>
        </main>
    );
};
export default Home;
