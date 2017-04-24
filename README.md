
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

