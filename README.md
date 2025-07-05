# CanaryFlow

CanaryFlow 是一个基于Kong网关和docker-compose的Web端灰度发布演示项目，支持基于百分比的流量灰度策略。

## 主要特性
- 前端：React，展示后端返回的版本信息
- 后端：Node.js (Express)，分别为v1和v2版本
- Kong网关：流量分流、服务注册、路由配置，支持百分比灰度
- 容器化：所有服务均为Docker容器
- 一键部署：docker-compose编排

## 目录结构
```
canaryflow/
├── docker-compose.yml
├── kong/
│   └── kong.yml           # Kong declarative配置
├── backend-v1/
│   ├── Dockerfile
│   └── index.js           # v1后端代码
├── backend-v2/
│   ├── Dockerfile
│   └── index.js           # v2后端代码
├── frontend/
│   ├── Dockerfile
│   ├── package.json
│   └── src/
│       └── App.jsx        # 前端代码
└── scripts/
    └── kong-setup.sh     # Kong服务注册脚本（可选）
```

## 快速开始
1. 安装 Docker 和 docker-compose
2. 运行 `docker-compose up -d`
3. 访问前端：http://localhost:8080

## 灰度流量分流
Kong通过`traffic-split`插件将流量按百分比分配到v1和v2后端，实现灰度发布。

--- 