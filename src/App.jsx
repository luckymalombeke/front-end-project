//komponen adalah fungsi yang mengembalikan JSX
//jsx only have one parent element
//fragment adalah (<> </>)container seperti <div> yang tidak bisa di styling fungsi utamanya sebagai
// container
import HelloWorld from "./assets/HelloWorld";


const App = () => {
  let hello = "Hello World";
  return (
    <>
      <div className="text-[25px] bg-blue-500 m-10 p-10 font-serif">
        {hello}
      </div>
      <HelloWorld text="Ini adalah komponen Hello World 1" />
      <HelloWorld text="Ini adalah komponen Hello World 2" />
    </>
  );
};

export default App;