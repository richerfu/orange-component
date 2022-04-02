### 开发

项目基于`yarn workspace` & `lerna`构建，如果您想要参与到协同中来，请按照以下方式进行项目初始化。

```shell
# 1. 全局安装yarn
npm i yarn -g

# 2. 使用yarn安装依赖
yarn

# 3. 启动本地开发
yarn dev
```

### 常用的命令

1. 全局安装依赖

```shell
yarn add xxx -W -D
# -W 为全局安装必须参数
# -D 安装为devDependencies依赖。可根据需要自行修改
```

2. 为包单独安装依赖

```shell
yarn workspace package-name add lodash -S
# workspace指定包名 。package-name替换为实际需要安装的包
# lodash为需要被安装的依赖，可自行替换
# -S 同yarn参数
```

3. 为包安装内部包

```shell
yarn workspace package-a add package-b@version
# version必须指定，否则可能安装失败。
```

4. 创建新包
   
```shell
lerna create xxx
```