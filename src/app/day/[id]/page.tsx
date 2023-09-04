import { NextPage } from "next";
import Link from "next/link";
// 페이지 컴포넌트 == next-type인 NextPage로 타입 지정해주기
const Day: NextPage = () => {
    return (
        <main>
            <div>
                <Link href="/">
                    <div>
                        <button>Back</button>
                    </div>
                </Link>
                <div>Day 1</div>
            </div>
        </main>
    );
};
export default Day;
