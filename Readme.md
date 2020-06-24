<div align="center"><img src="https://github.com/backrunner/lognet-frontend/raw/master/src/assets/image/lognet.png" width="96"/><h1>Lognet</h1></div>

## 概览

本项目为Lognet提供的的快速集成脚本。

## 使用说明

在页面内引入dist下的脚本，按照如下的方法配置：
```javascript
lognet.setKey('YOUR APP KEY');
// 任务ID的设置不是必要的
lognet.setMission('YOUR MISSION ID');
// 如果你希望所有基于console.error输出的内容全部以普通错误日志的形式提交到Lognet，请按下方内容设置
lognet.setInjection(true);
// 脚本默认会在window.onload触发后执行初始化，你也可以在这一步前手动初始化
lognet.init();
```

当然，你也可以快速地对集成脚本进行配置：
```javascript
lognet.setOptions({
    appKey: 'YOUR APP KEY',
    mission: 'YOUR MISSION ID',
    injection: false,
});
lognet.init();
```

在初始化完成后，当前站点抛出的所有错误都会直接提交到Lognet。

如需手动提交普通的错误日志，可以使用：
```javascript
lognet.submitGeneral('CONTENT');
```

如果你需要向某一任务提交，你需要在初始化前配置任务ID，如果没有配置，则无法进行提交。

如果你想手动指定不同的任务，你可以在向某个任务提交日志的时候对任务ID进行手动指定。

例子：
```javascript
lognet.debug('CONTENT');
lognet.debug('CONTENT', 'YOUR MISSION ID');
```

提供的方法有debug、info、warn、error，系统会直接根据你使用的方法区分日志类别。

## 命令说明

打包项目：
```bash
npm run build
```

## 许可证

MIT