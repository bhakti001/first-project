import { useEffect,useRef, useState } from "react";

export default function UseRef() {
  const [count, setCount] = useState(0);
  const btnRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      document.title = `use Ref Component called ${count}`;
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [count]);

  function onclick() {
    btnRef.current.style.backgroundColor = "red";
    btnRef.current.style.fontSize = "50px";
  }

  return (
    <>
      <button ref={btnRef} onClick={onclick} className="form-btn">
        Change color
      </button>
      <br />
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi labore non
      sunt ab neque expedita placeat quaerat, sit deserunt amet hic dignissimos
      similique illo. Quaerat cum adipisci, corrupti temporibus ad pariatur sunt
      sit. Temporibus distinctio ducimus nostrum culpa. Doloribus consectetur
      fugiat commodi quo nostrum totam dolorum neque odit doloremque, pariatur
      vitae quis ducimus provident sapiente a quisquam quae qui dolore? Ducimus
      suscipit, doloribus nulla eum placeat perspiciatis nam illum maxime
      dignissimos, sed molestiae libero qui delectus, quam quaerat molestias
      magnam consequuntur corrupti minus. Culpa aperiam ipsam, eos modi
      explicabo quae, dicta numquam, voluptates ut nesciunt pariatur fugit.
      Sapiente numquam facilis sunt iusto perspiciatis incidunt eius recusandae
      cum nemo? Sapiente accusamus soluta, nisi fugit laborum fugiat
      necessitatibus laboriosam eligendi dignissimos nam at! Accusamus possimus
      consectetur corrupti mollitia quidem aspernatur laborum commodi quibusdam
      cumque earum laboriosam nemo laudantium inventore officiis itaque, unde
      deserunt reprehenderit distinctio dolorem velit? Eos asperiores corrupti
      eveniet vel consequuntur. Laudantium aliquid corporis at ipsam quisquam
      similique impedit sapiente ab fugiat suscipit quo eveniet ex aperiam
      tempore nobis animi rem, eaque corrupti distinctio ea nostrum. Saepe,
      atque! Ut, sunt corporis autem fugit consequatur molestias excepturi
      architecto. Dolore numquam voluptas officiis natus voluptates cupiditate,
      deleniti vitae dolorem consequatur quo accusantium.
    </>
  );
}
