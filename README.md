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