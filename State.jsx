import React, { useState } from 'react'

function State() {
    const [first, setFirst] = useState(0);
    const [sirst, setSirst] = useState("");
    const [liked, setLiked] = useState(true);
    function handleClick() {
      setFirst(first + 1);
    }
    function handleChange(e) {
      setSirst(e.target.value);
    }
    function handleChack(e) {
      setLiked(e.target.checked);
    }
  return (
    <>
 <button onClick={handleClick}>hello</button> <p>{first}</p>
      <input type="text" onChange={handleChange} value={sirst} />
      <p>you typed: {sirst}</p>
      <button onClick={() => setSirst("")}>resat</button>
      <br />
      <input type="checkbox" checked={liked} onChange={handleChack} /> I liked
      this
      <p>You {liked ? "liked" : "did not like"} this.</p>
    </>
  )
}

export default State