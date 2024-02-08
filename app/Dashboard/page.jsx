import Counter from "@/components/Counter";


// promotes automatic caching
async function getToDo() {

    await new Promise(res => setTimeout(res,3000))
    return  response.json();
  }

const DashBoardPage = async () => {

   const toDos = await getToDo();

  return (
    <div>
      {/* if u want to use client side component in server side u can do it like this , like i have called Counter component here */}
        <Counter/>
      <div style={{ overflow: "auto", height: "100vh" }}>
        {toDos?.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid black",
              marginBottom: "10px",
              padding: "10px",
            }}
          >
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashBoardPage;
