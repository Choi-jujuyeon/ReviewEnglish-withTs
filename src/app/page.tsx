import { NextPage } from "next";
const Home: NextPage = () => {
    return (
        <main className="bg-slate-100 py-24 px-12 min-h-screen flex flex-col justify-center items-center">
            {/* 상단 - 프로젝트 이름 */}
            <div className="font-semibold ">REVIEW ENGLISH</div>

            {/* 하단 - 버튼 3개(반복요소) */}
            <ul className="mt-12  w-full grid grid-cols-4 gap-4 text-center">
                {/* 테두리 색 시정해주기 - 색/ 두께 */}
                <li className=" border-black border-2  font-medium rounded-lg shadow-md shadow-slate-400">
                    <button>Day 1</button>
                </li>
                <li className=" border-black border-2  font-medium rounded-lg shadow-md shadow-slate-400">
                    <button>Day 2</button>
                </li>
                <li className=" border-black border-2  font-medium rounded-lg shadow-md shadow-slate-400">
                    <button>Day 3</button>
                </li>
            </ul>
        </main>
    );
};
export default Home;
