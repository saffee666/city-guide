# 城市介绍站 — 全国城市旅游指南（city.beichen.help）

## 项目身份

ChinaTravelCo 骨架与皮肤的中文复刻站：Astro v7 静态站，22 城 + 32 路线 + 榜单/节气/节日/体验页，370+ 图。vibe coding 个人项目，非商业。产出 = 线上站点的新增页面/内容/图片，部署到阿里云 ECS。

## 目录地图

| 目录 | 用途 |
|------|------|
| `knowledge/` | 知识网络（入口 index.md：当前焦点+导航） |
| `site/` | Astro 站点代码主体（构建/内容/模板全在里面；子目录文档见 site/AGENTS.md） |
| `site/tools/` | 图片批量抓取脚本（Python，curl 子进程） |
| `scripts/` | 部署脚本（deploy.cmd） |
| `output/截图/` | 验收截图（gitignore） |
| `素材-参考/` | 三参考站原始逆向材料（gitignore，只读不整理） |
| `.superpowers/` | SDD 执行工作区（gitignore） |

## 路由表

| 你想做的事 | 去读 |
|-----------|------|
| 项目现状/当前焦点 | `Read knowledge/index.md` |
| 加城市/路线/景点/图片（最常用） | `Read knowledge/内容管线.md` |
| 改模板/看页型清单/设计 token | `Read knowledge/架构.md` |
| 发布上线/环境故障 | `Read knowledge/部署.md` |
| 查源站规格/合规红线 | `Read knowledge/逆向笔记.md` |
| 看还有什么没修 | `Read knowledge/质量清单.md` |
| AstroWind 底座命令 | `site/AGENTS.md` |

## 知识文件约定

- `[[文件名]]` = `knowledge/文件名.md`；每条链接带一句 reason，盲连等于不连
- 一文件一领域平铺；frontmatter 带 `state`（active/reference/archive），易腐知识带 `as-of`（90 天复核）
- 每文件第一段是 TL;DR；active 文件首段带「产出行」
- 状态只允许三处：frontmatter `state`、`as-of`、index 当前焦点块——不写进度表
- 收录走入口三问（可行动？比已有新？别处已有？），三否不收
- 约定文件名保持英文（CLAUDE.md/index.md/knowledge/site/**），知识文件用中文

## 硬规则

- 站内链接必须走 `B = import.meta.env.BASE_URL.replace(/\/$/,'')` 前缀
- 图片位 = 构建期 fs 检测：丢文件进 `site/public/images/` 对应目录即生效，不改代码
- 素材-参考/ 无 License，只取 schema/结构/token，不搬原文与美术资产
- 不往仓库放 `.github/workflows/`（gh CLI 无 workflow scope）

## 继承

继承 `~/.claude/CLAUDE.md` 全部规则。
