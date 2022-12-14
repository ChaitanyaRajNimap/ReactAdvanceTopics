import "./App.css";
import PostForm from "./Components/PostForm";
// import PostList from "./Components/PostList";
// import ComponentC from "./Components/ComponentC";
// import { UserProvider } from "./Components/userContext";
// import Counter from "./Components/Counter";
// import User from "./Components/User";
// import ClickCounter2 from "./Components/ClickCounter2";
// import HoverCounter2 from "./Components/HoverCounter2";
// import ClickCounter from "./Components/ClickCounter";
// import HoverCounter from "./Components/HoverCounter";

function App() {
  return (
    <div className="App">
      <h1>React Advance Topics</h1>
      {/* <PostList /> */}
      <PostForm />
      {/* <UserProvider value="Chay">
        <ComponentC />
      </UserProvider> */}
      {/* <Counter>
        {(count, incrementCount) => (
          <ClickCounter2 count={count} incrementCount={incrementCount} />
        )}
      </Counter> */}
      {/* <Counter>
        {(count, incrementCount) => (
          <HoverCounter2 count={count} incrementCount={incrementCount} />
        )}
      </Counter> */}
      {/* <User render={(isLoggedIn) => (isLoggedIn ? "Chay" : "Guest")} /> */}
      {/* <ClickCounter2 />
      <HoverCounter2 /> */}
      {/* <ClickCounter name="Chay" /> */}
      {/* <HoverCounter /> */}
    </div>
  );
}

export default App;
