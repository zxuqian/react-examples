这个项目是我 B 站视频教程中，有关 React 的示例代码。我把组件打包成了单独的组件，可以在安装这个库之后直接导入使用。

[点击查看运行示例](http://localhost:3000/docs/react-examples/01-react-props-buttons/index)

[点击查看 B 站个人主页](https://space.bilibili.com/302954484)

## 如何使用

这个示例项目是由 Create-React-App 工具创建的，只导出了组件相关的部分，所以需要自己安装一下 React 相关的依赖。如果你的项目也是用 CRA 创建的，那么就不用做任何操作了~

首先安装本库：

```shell
npm i @zxuqian/react-examples
```

或

```shell
yarn add @zxuqian/react-examples
```

### 导入一个组件

```javascript
import { Gradient } from "@zxuqian/react-examples";
```

### 使用组件

直接像往常一样使用组件就好：

```jsx
export default function GradientDemo() {
  return (
    <div style={{ height: "50vh" }}>
      <Gradient />
    </div>
  );
}
```
