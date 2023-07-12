import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Button, Toast } from "@douyinfe/semi-ui";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://wiki.hydcraft.cn" target="_blank">
          <img
            src="https://wiki.hydcraft.cn/favicon/logo.png"
            className="logo hydc"
            alt="HydCraft Logo"
          />
        </a>
        <a href="https://hyd-cjt.olarker.cn" target="_blank">
          <img
            src="https://h2-wiki-1254268741.cos.accelerate.myqcloud.com/b/b0/Cjt.png"
            className="logo cjtg"
            alt="CJT Group logo"
          />
        </a>
      </div>
      <div className="card">
        <Button onClick={() => Toast.warning({ content: "welcome" })}>
          Hello Semi
        </Button>
      </div>

      <p className="read-the-docs">
        恒丹县政务服务一体化平台 × 城橘运输集团 提供认证服务
      </p>
    </div>
  );
}

export default App;
