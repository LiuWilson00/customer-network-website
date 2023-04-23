# 使用官方的 Node.js 基础镜像
FROM node:16-alpine

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json 到工作目录
COPY package.json package-lock.json ./

# 安装项目依赖
RUN npm ci

# 复制项目文件到工作目录
COPY . .

# 构建项目
RUN npm run build

# 设置运行时环境变量，根据您的实际需求进行设置
ENV NEXT_PUBLIC_API_URL=https://api.example.com

# 对外暴露的端口
EXPOSE 3000

# 启动应用
CMD ["npm", "start"]
