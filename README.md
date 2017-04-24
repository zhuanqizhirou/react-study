
# react-study

主要看src/study/下html页面。学习阶段view与js放在一个html页面。
React:
1.state异步，setState传方法，而不能在state中同时获取/修改之前state。
2.事件：
用函数替代字符串
return false修改为preventDefault();

function ActionLink() {
  function handleClick(e) {
    e.preventDefault();// 阻止默认事件
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}


key map:
delete line C-S-L


Component名称必须大写(无论是函数形式还是class形式,否则无效)
list 中每个element应该指定key
render中，先取出state的值，再用。
代码格式化注意问题:超出竖线标识部分,格式化会导致换行,从而出错!!!
onSubmit,测试的情况下一定留意是否需要event.preventDefault(),否则看不到log内容.
console.log(this.state),不能拉掉this.
Props Default to "True"
props.children


# react-study

Component名称必须大写(无论是函数形式还是class形式,否则无效)
list 中每个element应该指定key

代码格式化注意问题:超出竖线标识部分,格式化会导致换行,从而出错!!!
onSubmit,测试的情况下一定留意是否需要event.preventDefault(),否则看不到log内容.
console.log(this.state),不能拉掉this.

1.The same:
function App1() {
  return <Greeting firstName="Ben" lastName="Hector" />;
}

function App2() {
  const props = {firstName: 'Ben', lastName: 'Hector'};
  return <Greeting {...props} />;
}
2.A React component can't return multiple React elements,
3.false, null, undefined, and true are valid children. They simply don't render.
Conversely, if you want a value like false, true, null, or undefined to appear in the output, you have to convert it
to a string first:
4.
//        this.setState({count: this.state.count + 1});  //多次执行,只加1
//        this.setState(state => ({count: state.count + 1}));//执行几次,加几次

5.//如果是PureComponent,会执行 shouldComponentUpdate, shallow comparison,反而不会render.而Component,会render
6.mutate objects:
          //以下效果相同.
          //        words:prevState.words.concat(["marklar"])
          //        words:[...prevState.words,"marklar"]

7.
function updateColorMap(colormap) {
  return Object.assign({}, colormap, {right: 'blue'});
}
8.
function updateColorMap(colormap) {
  return {...colormap, right: 'blue'};
}

9.Immutable.js is another way to solve this problem. It provides immutable, persistent collections that work via structural sharing:

