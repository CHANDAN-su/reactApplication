// import React, { useEffect, useRef, useState } from 'react'

// function UseRef() {

//     const [count, setCount] = useState(0);
//     // let val = 1;
//     let val = useRef(0);
//     let btnRef = useRef();

//     const hendleincrement = () => {
//         // val = val + 1;
//         val.current = val.current + 1
//         console.log(val.current);
//         setCount(count + 1);
//     }

//     const colorChange = () => {
//         btnRef.current.style.backgroundColor = "red";
//     }

//     // it runs on every render
//     useEffect(() => {
//         console.log("me fir se render hogya hu");
//     });

//   return (
//     <div>
//         <h1>Count: {count}</h1>
//         <button ref={btnRef} onClick={hendleincrement}>Increment</button>
//         <br />
//         <br />
//         <button onClick={colorChange}>Change Color of 1st Button</button>
//     </div>
//   )
// }

// export default UseRef



import React, { useRef, useState } from 'react'

function UseRef() {

    const [time, setTime] = useState(0);
    const [isPlaying, setPlaying] = useState(false);

    let timeRef = useRef(null);
    let ref = useRef(0);
    let inputRef = useRef(null);
    let listRef = useRef(null);
    let videoRef = useRef(null);

    const startTimer = () => {
        timeRef.current = setInterval(() => {
            setTime(time => time + 1);
        }, 1000);
    }

    const stopTimer = () => {
        clearInterval(timeRef.current);
        timeRef.current = null;
    }

    const resetTimer = () => {
        stopTimer();
        setTime(0);
    }

    const handleClick = () => {
        ref.current = ref.current + 1
        alert('You clicked ' + ref.current + ' times!');
    }

    const handleClick1 = () => {
        inputRef.current.focus();
    }

    function scrollToIndex(index) {

        const listNode = listRef.current;

        const imageNode = listNode.querySelectorAll("li > img")[index];

        imageNode.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        })
    }

    const videhandle = () => {
        const newPlaying = !isPlaying;
        setPlaying(newPlaying);

        if(newPlaying){
            videoRef.current.play();
        }else {
            videoRef.current.pause();
        }

    }

    return (
        <div>

            <h1>Stopwatch: {time} second</h1>

            <button onClick={startTimer}>
                Start
            </button>
            <br />
            <br />

            <button onClick={stopTimer}>
                Stop
            </button>
            <br />
            <br />

            <button onClick={resetTimer}>
                Reset
            </button>
            <br />
            <br />

            <button onClick={handleClick}>Click me</button>
            <br />
            <br />

            <input ref={inputRef} type="text" />
            <button onClick={handleClick1}>Focus the input</button>
            <br />
            <br />

            <nav>
                <button onClick={() => scrollToIndex(0)}>Neo</button>
                <button onClick={() => scrollToIndex(1)}>Millie</button>
                <button onClick={() => scrollToIndex(2)}>Bella</button>
            </nav>

            <div style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
                <ul ref={listRef} style={{ display: 'flex', gap: '10px', padding: 0, listStyle: 'none' }}>
                    <li><img src="https://placecats.com/neo/300/200" alt="Neo" /></li>
                    <li><img src="https://placecats.com/millie/200/200" alt="Millie" /></li>
                    <li><img src="https://placecats.com/bella/199/200" alt="Bella" /></li>
                </ul>
            </div>
            <br />
            <br />


            <div className='videPlayer'>
                
                <button onClick={videhandle}>
                    {isPlaying ? "Pause" : "Play"}
                </button>
                <br />
                <br />

                <video width="250" ref={videoRef} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)}>
                    <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                        type="video/mp4" />
                </video>
            </div>

        </div>
    )
}

export default UseRef