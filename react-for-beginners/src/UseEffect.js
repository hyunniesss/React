import { useState, useEffect } from "react";

function UseEffect() {
    const [counter, setValue] = useState(0);
    const [keyword, setKeyword] = useState("");

    const onClick = () => setValue((prev) => prev + 1);
    const onChange = (event) => {
        setKeyword(event.target.value);
    }

    // console.log("I run all the time");
    const iRunOnlyOnce = () => {
        console.log("I run only once.");
    };
    useEffect(() => (console.log("I RUN ONLY ONCE")), []);
    useEffect(() => {
        if(keyword !== ""){
            // console.log("I RUN WHEN 'KEYWORD' CHANGES");
        }
    }, [keyword]);
    useEffect(() => {
        // console.log("I RUN WHEN 'COUNTER' CHANGES");
    }, [counter]);
    useEffect(() => {
        // console.log("I RUN WHEN 'KEYWORD' OR 'COUNTER' CHANGES");
    }, [keyword, counter]);

    return (
        <div>
            <input type="text" placeholder="검색어를 입력하세요" value={keyword} onChange={onChange} />
            <h1>{counter}</h1>
            <button onClick={onClick}>CLICK ME</button>
        </div>
    );
}

export default UseEffect;