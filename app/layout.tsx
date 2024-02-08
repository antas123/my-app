import React from "react";
import Link from "next/link";

interface DashBoardLayoutProps {
  children: React.ReactNode;
}

const DashBoardLayout: React.FC<DashBoardLayoutProps> = (props) => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "0 10px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <h3>LOGO</h3>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "row",
            gap: 15,
          }}
        >
          <li>Home</li>
          <li>About</li>
          <li>Contact us</li>
          <li>careers</li>
        </ul>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "0 10px",
            height: "100vh",
            width: "20vw",
            overflowY: "hidden",
            // display: "flex",
            flex:1
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "120px",
              paddingLeft: "50px",
              gap: "15px",
            }}
          >
            <h3>
              <Link href="/Dashboard">Homes</Link>
            </h3>
            <h3>
              <Link href="/Search">Search</Link>
            </h3>
            <h3>
              <Link href="/Property">Property</Link>
            </h3>
          </div>
        </div>
        <div style={{ padding: "10px", flex:4 }}>{props.children}</div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
