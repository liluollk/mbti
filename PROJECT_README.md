# MBTI 人格测试网站

一个基于 React 18 + TypeScript + Vite + Tailwind CSS 构建的 MBTI 人格测试应用。

## 项目简介

这是一个完全前端实现的 MBTI 人格测试网站，包含以下功能：

- **付费页面**：作为入口页面，包含模拟支付流程
- **测试页面**：93 道题目，每页一题，进度自动保存
- **结果页面**：展示 MBTI 测试结果，包括人格分析、维度分数等

### 技术栈

- **前端框架**：React 18
- **语言**：TypeScript
- **构建工具**：Vite 6
- **样式**：Tailwind CSS 3
- **路由**：React Router DOM 7
- **数据存储**：localStorage

## 项目结构

```
mbti-test/
├── src/
│   ├── components/          # React 组件
│   │   ├── PayModal.tsx        # 支付模态框组件
│   │   ├── ProgressBar.tsx    # 进度条组件
│   │   └── QuestionCard.tsx   # 题目卡片组件
│   ├── data/               # 静态数据
│   │   ├── mbtiDescriptions.ts  # MBTI 16 型人格描述
│   │   └── questions.ts       # 测试题目数据
│   ├── pages/              # 页面组件
│   │   ├── PayPage.tsx        # 付费页面
│   │   ├── ResultPage.tsx     # 结果页面
│   │   └── TestPage.tsx       # 测试页面
│   ├── utils/              # 工具函数
│   │   ├── mbtiCalculator.ts  # MBTI 计算逻辑
│   │   └── storage.ts         # localStorage 封装
│   ├── App.tsx             # 主应用组件
│   ├── main.tsx            # 入口文件
│   └── index.css           # 全局样式
├── index.html              # HTML 入口
├── package.json            # 项目依赖
├── tailwind.config.js      # Tailwind 配置
├── tsconfig.json           # TypeScript 配置
└── vite.config.ts          # Vite 配置

## 快速开始

### 环境要求

- Node.js >= 18.0.0
- npm 或 yarn 或 pnpm

### 安装依赖

```bash
# 使用 npm
npm install

# 或使用 yarn
yarn install

# 或使用 pnpm
pnpm install
```

### 启动开发服务器

```bash
# 使用 npm
npm run dev

# 或使用 yarn
yarn dev

# 或使用 pnpm
pnpm dev
```

在浏览器中打开 http://localhost:5173

### 构建生产版本

```bash
# 使用 npm
npm run build

# 或使用 yarn
yarn build

# 或使用 pnpm
pnpm build
```

构建完成后的文件在 `dist/` 目录。

### 预览生产版本

```bash
# 使用 npm
npm run preview

# 或使用 yarn
yarn preview

# 或使用 pnpm
pnpm preview
```

## 功能说明

### 1. 付费页面

- 所有访客必须先访问付费页面
- 包含模拟支付流程（点击按钮显示模态框）
- 支付成功后设置 localStorage 中的 `paid = true`
- 下次访问时自动跳过付费页面

### 2. 测试页面

- 共 93 道题目（当前示例数据包含 10 道题）
- 每页显示一道题，5 个选项（非常同意 → 非常不同意）
- 自动保存进度到 localStorage
- 页面刷新后可以继续测试
- 进度提示：暂时离开不用担心，进度自动保存

### 3. 结果页面

- 计算 MBTI 人格类型（INTJ, ENFP 等 16 种）
- 展示四个维度的分析（EI / SN / TF / JP）
- 显示人格特点（优势和劣势）
- 推荐适合职业
- 人际关系描述
- 分享结果功能（占位）
- 重新测试功能

## 数据存储

所有数据存储在浏览器的 localStorage 中：

| 键名 | 描述 |
|------|------|
| `mbti_paid` | 付费状态（"true" 或不存在） |
| `mbti_answers` | 用户答案数组（0-4 的数字） |
| `mbti_current_index` | 当前题目索引 |

## 如何扩展到 93 题

当前 `src/data/questions.ts` 文件中包含 10 道示例题目。

要扩展到 93 题，只需在 `questions` 数组中继续添加题目：

```typescript
{
  id: 11,
  text: "新的题目内容",
  category: "JP", // EI / SN / TF / JP 之一
},
```

确保：
- `id` 连续递增
- `category` 正确标注维度
- 每个维度都有足够的题目

## 如何集成真实支付

当前支付流程是纯前端模拟。如需集成真实支付，需要：

### 方案 1：自建后端

1. 创建后端服务（如 Node.js + Express）
2. 实现支付接口（对接支付宝/微信支付 API）
3. 在前端调用支付接口
4. 支付成功后设置 localStorage

### 方案 2：使用第三方服务

- **Stripe**：国际支付，支持信用卡等
- **PayPal**：国际支付
- **支付宝/微信支付**：需要商户号和对接文档

### 支付流程示例

```typescript
const handlePay = async () => {
  try {
    // 1. 调用后端接口创建订单
    const response = await fetch('/api/create-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: 0.10 }),
    });

    const order = await response.json();

    // 2. 唤起支付（支付宝/微信）
    // 具体实现取决于支付 SDK

    // 3. 支付成功后
    storage.setPaid(true);
    navigate('/test');
  } catch (error) {
    console.error('支付失败:', error);
    alert('支付失败，请重试');
  }
};
```

## 部署

### 部署到 Vercel

1. 在 GitHub 上创建仓库
2. 连接 Vercel
3. 自动部署

或使用 Vercel CLI：

```bash
npm i -g vercel
vercel
```

### 部署到其他平台

构建后的 `dist/` 目录包含静态文件，可部署到：

- Netlify
- GitHub Pages
- 阿里云 OSS
- 腾讯云 COS
- 任意静态文件服务器

## 开发指南

### 添加新组件

1. 在 `src/components/` 目录创建新组件
2. 遵循 React + TypeScript 规范
3. 使用 Tailwind CSS 样式

### 添加新页面

1. 在 `src/pages/` 目录创建新页面组件
2. 在 `src/App.tsx` 中添加路由
3. 在 `storage.ts` 中添加相关存储逻辑（如需要）

### 修改样式

- 全局样式：`src/index.css`
- Tailwind 配置：`tailwind.config.js`
- 组件样式：使用 Tailwind 类名

## 注意事项

1. **数据安全**：localStorage 数据可在浏览器中查看和修改，不适合存储敏感信息
2. **浏览器兼容**：需要现代浏览器支持（ES6+）
3. **移动端适配**：已针对移动端优化，采用响应式设计
4. **隐私提示**：测试数据仅存储在用户本地，不会发送到服务器

## License

MIT License
