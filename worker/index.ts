/// <reference types="@cloudflare/workers-types" />

/**
 * Cloudflare Worker for serving static React SPA
 * 
 * This worker handles:
 * - Static asset requests (JS, CSS, images, etc.)
 * - SPA routing (all routes return index.html)
 * 
 * Usage:
 * - Run `npm run worker:dev` to start development server
 * - Run `npm run deploy` to build and deploy to Cloudflare Workers
 */

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    const pathname = url.pathname;

    // 首先尝试获取请求的资源
    let response = await env.ASSETS.fetch(request);

    // 如果资源存在（状态码不是 404），直接返回
    if (response.status !== 404) {
      return response;
    }

    // 对于 SPA 路由，所有未找到的路径都返回 index.html
    // 这样可以支持客户端路由（如 React Router）
    const indexRequest = new Request(new URL('/index.html', request.url), {
      method: request.method,
      headers: request.headers,
    });

    response = await env.ASSETS.fetch(indexRequest);

    // 如果 index.html 存在，返回它
    if (response.status === 200) {
      return new Response(response.body, {
        status: 200,
        headers: {
          'Content-Type': 'text/html;charset=UTF-8',
          'Cache-Control': 'no-cache',
        },
      });
    }

    // 如果连 index.html 都不存在，返回 404
    return new Response('Not Found', { 
      status: 404,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  },
};

interface Env {
  ASSETS: {
    fetch: (request: Request) => Promise<Response>;
  };
}

