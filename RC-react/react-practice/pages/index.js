import Link from "next/link";

const userName = "Gyubin";

const IndexPage = () => {
    return(
        <div>
            <p>hello world {userName}</p>
            <Link href ="/counter">
                <a>move</a>
            </Link>
        </div>
    );
};
// arrow funcion 여기서 주요 쓰일 내용
// lambda function
//java scripty 의 디스 사용법
//functional programming - 상수나 변수에 함수를 할당한것

//data binding 이란 data->ui bind에 묶는다

export default IndexPage;