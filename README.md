# 量潮代码中心

## 定位

量潮代码中心面向人机交互提供素材：把软件工程的规范、实践与档案整理成人机共用的素材。这些素材既供人阅读与审查，也供 AI 直接采用，使 AI 做事时遵循既有规范，而不是各自发明一套做法。

## 内容

平台披露三类内容：

- 工程规范：章程、标准与工作手册，回答「必须怎么做」；
- 工程实践：可对照的工作案例，回答「规范在现场怎么落地」；
- 工程档案：项目与产物的记录，作为规范的来源与校验。

## 站点

公网展示站部署于 `code.quanttide.com`，现有页面：

- 首页 `/`：定位与工程概览；
- 工程规范 `/specs`：工程标准与规范展示，数据源接入中。

## 仓库结构

```text
qtcode/
├── docs/                 # 非代码文档
├── manifests/terraform/  # 云上基础设施
└── src/site/             # 公网展示站（React 与 Vite）
```

## 开发

```bash
cd src/site
npm install
npm run dev      # 开发服务器
npm run build    # 生产构建
```

## 部署

推送 `site/*` tag 触发 `.github/workflows/deploy-site.yml`：应用基础设施、构建站点、上传 `oss://qtcode-site/` 并刷新 CDN。基础设施细节见 [manifests/terraform/README.md](./manifests/terraform/README.md)。
